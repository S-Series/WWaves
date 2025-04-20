import { cleanText } from './CleanText.js';
import { handleOcrResult } from './dropdown.js';

document.addEventListener('paste', async (e) => {
  const items = e.clipboardData.items;
  for (const item of items) {
    if (item.type.indexOf('image') !== -1) {
      const blob = item.getAsFile();
      const img = new Image();
      img.onload = async () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // 이미지 표시
        document.getElementById('image-preview').src = img.src;

        // OCR 실행
        document.getElementById('text-output').innerText = '🧠 OCR 인식 중...';

        const result = await Tesseract.recognize(canvas, 'eng+kor');
        const rawText = result.data.text.trim();
        const cleaned = cleanText(rawText);
        document.getElementById('text-output').innerText = cleaned;

        // 7줄 분리 → 주옵션 2줄 + 서브옵션 5줄 구분
        const lines = cleaned.split('\n');
        const lastSeven = lines.slice(-7);
        const mainLines = lastSeven.slice(0, 2);
        const subLines = lastSeven.slice(2);

        console.log('✨ 주옵션:', mainLines);
        console.log('✨ 보조옵션:', subLines);

        // 선택된 슬롯 인덱스 참조
        const selectedIndex = window.selectedIndex ?? 0;
        handleOcrResult(selectedIndex, cleaned);
      };
      img.src = URL.createObjectURL(blob);
    }
  }
});
