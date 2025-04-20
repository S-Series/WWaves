import { cleanText } from './CleanText.js';
import { dropdown, handleOcrResult } from './dropdown.js';

let selectedIndex = null;

document.addEventListener('DOMContentLoaded', () => {
  dropdown();

  // 슬롯 선택 핸들러
  document.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('click', () => {
      document.querySelectorAll('.slot').forEach((s) => s.classList.remove('selected'));
      slot.classList.add('selected');
      selectedIndex = parseInt(slot.dataset.index);
    });
  });

  // 이미지 붙여넣기
  document.addEventListener('paste', async (e) => {
    if (selectedIndex === null) return;

    const items = e.clipboardData.items;
    for (const item of items) {
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        const img = new Image();

        img.onload = async () => {
          const slot = document.querySelector(`.slot[data-index="${selectedIndex}"]`);
          slot.style.backgroundImage = `url(${img.src})`;
          slot.textContent = '';

          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);

          const result = await Tesseract.recognize(canvas, 'eng+kor');
          const rawText = cleanText(result.data.text.trim());
          document.getElementById(`text-${selectedIndex}`).innerText = rawText;

          handleOcrResult(selectedIndex, rawText);
        };

        img.src = URL.createObjectURL(blob);
      }
    }
  });
});
