<template>
    <div class="ocr-uploader-grid">
        <OcrUploader v-for="n in 5" :key="n" :index="n" />
    </div>
</template>

<script setup>
import OcrUploader from './OcrUploader.vue';
</script>

<style scoped>
.ocr-uploader-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
}
</style>