import { fixedMainStats, statMainValues, fixedSubStats, statSubValues, percentStatMap } from './dropdownValue.js';

const secondLineFixedStats = ['공격력', 'HP'];
const secondLineValues = {
  공격력: ['150', '100'],
  HP: ['2280']
};

export function dropdown() {
  document.querySelectorAll('.dropdown-grid-vertical').forEach((group) => {
    const selects = group.querySelectorAll('select');

    for (let i = 0; i < selects.length; i += 2) {
      const left = selects[i];
      const right = selects[i + 1];

      const isMain = left.classList.contains('main-stat');
      const isSub = left.classList.contains('sub-stat');

      left.innerHTML = '';
      const defaultLeft = new Option('속성 선택', '', true, true);
      defaultLeft.disabled = true;
      left.appendChild(defaultLeft);

      const sourceList = i === 2 ? secondLineFixedStats : isMain ? fixedMainStats : isSub ? fixedSubStats : [];
      sourceList.forEach((stat) => {
        left.appendChild(new Option(stat, stat));
      });

      left.addEventListener('change', () => {
        const values =
          i === 2
            ? secondLineValues[left.value] || []
            : isMain
            ? statMainValues[left.value] || []
            : statSubValues[left.value] || [];

        right.innerHTML = '';
        const defaultRight = new Option('수치 선택', '', true, true);
        defaultRight.disabled = true;
        right.appendChild(defaultRight);

        values.forEach((v) => {
          right.appendChild(new Option(v, v));
        });

        // 자동 선택 (특히 두 번째 줄)
        if (values.length > 0) {
          right.value = values[0];
        }

        [left, right].forEach((select) => {
          select.addEventListener('change', () => {
            if (!select.value) {
              select.style.border = '1px solid red';
            } else {
              select.style.border = '';
            }
          });

          // 초기 상태에도 검사
          if (!select.value) {
            select.style.border = '1px solid red';
          } else {
            select.style.border = '';
          }
        });
      });
    }
  });
}

function getMainStatFromText(line) {
  const noSpace = line.replace(/\s/g, '');
  console.log(noSpace);

  if (noSpace.includes('크리')) {
    if (noSpace.includes('피') || noSpace.includes('해')) return '크리티컬 피해';
    return '크리티컬';
  }

  for (const { name, keyword } of percentStatMap) {
    if (noSpace.includes(keyword)) {
      console.log(name);
      return name;
    }
  }

  return null;
}

function getSubStatFromText(line) {
  const noSpace = line.replace(/\s/g, '');
  if (noSpace.includes('크리')) {
    if (noSpace.includes('피') || noSpace.includes('해')) return '크리티컬피해';
    return '크리티컬';
  }

  // % 포함 시 %형 스탯 먼저 체크
  if (line.match(/[\d.]+%/)) {
    if (line.includes('HP')) return 'HP%';
    if (line.includes('공격력')) return '공격력%';
    if (line.includes('방어력')) return '방어력%';
  }

  // 일반 고정 스탯 체크
  return fixedSubStats.find((s) => noSpace.includes(s.replace(/\s/g, ''))) || null;
}

export function handleOcrResult(index, rawText) {
  const lines = rawText.split('\n').filter(Boolean);
  const lastSeven = lines.slice(-7);
  const mainLines = lastSeven.slice(0, 2);
  const subLines = lastSeven.slice(2);

  const wrapper = document.querySelectorAll('.dropdown-grid-vertical')[index];
  if (!wrapper) return;

  const labelSpans = wrapper.querySelectorAll('.dropdown-labels');
  if (labelSpans.length >= 2) {
    for (let i = 0; i < 2; i++) {
      const left = labelSpans[i].querySelector('.label-left');
      const right = labelSpans[i].querySelector('.label-right');

      if (left && right) {
        left.innerText = statMainSecondValues.Text[i] || '';
        right.innerText = statMainSecondValues.Value[i] || '';
      }
    }
  }

  const selects = wrapper.querySelectorAll('select');
  for (let i = 0; i < 2; i++) {
    const stat = getMainStatFromText(mainLines[i]);
    if (stat) {
      const left = selects[i * 2];
      const right = selects[i * 2 + 1];

      left.value = stat;
      left.dispatchEvent(new Event('change'));
    }
  }

  let slot = 0;
  subLines.forEach((line) => {
    const stat = getSubStatFromText(line);
    const value = line.match(/[\d.]+%?/)?.[0];

    if (stat && value && slot < 5) {
      const left = selects[4 + slot * 2];
      const right = selects[4 + slot * 2 + 1];

      left.value = stat;
      left.dispatchEvent(new Event('change'));

      setTimeout(() => {
        right.value = value;
      }, 30);

      slot++;
    }
  });

  selects.forEach((select) => {
    if (!select.value) {
      select.style.border = '1px solid red';
    } else {
      select.style.border = '';
    }
  });
}
