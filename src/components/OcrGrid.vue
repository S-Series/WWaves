<template>
  <div class="ocr-grid">
    <OcrUploader v-for="i in 5" :key="i" :slotIndex="i - 1" />
  </div>
</template>

<script setup>
import OcrUploader from './OcrUploader.vue'
</script>

<style scoped>
.ocr-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  max-width: min(1080px, 90vw);
  border-radius: 1vh 1vw;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>