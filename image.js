let selectedIndex = null;
window.selectedIndex = selectedIndex;

document.querySelectorAll('.equipment-image').forEach((img) => {
  img.addEventListener('click', () => {
    document.querySelectorAll('.equipment-image').forEach((i) => i.classList.remove('selected'));
    img.classList.add('selected');
    selectedIndex = parseInt(img.dataset.index);
    window.selectedIndex = selectedIndex; // 공유
  });
});

document.addEventListener('paste', async (e) => {
  if (selectedIndex === null) return;

  const items = e.clipboardData.items;
  for (const item of items) {
    if (item.type.indexOf('image') !== -1) {
      const blob = item.getAsFile();
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const url = img.src;
        const slot = document.querySelector(`.equipment-image[data-index="${selectedIndex}"]`);
        slot.style.backgroundImage = `url(${url})`;
        slot.textContent = '';

        const result = await Tesseract.recognize(canvas, 'eng+kor');
        console.log(`📦 [${selectedIndex}] OCR 결과:`, result.data.text.trim());
      };
      img.src = URL.createObjectURL(blob);
    }
  }
});
