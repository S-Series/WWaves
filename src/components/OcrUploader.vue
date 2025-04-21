<script setup>
import { ref } from 'vue'
import Tesseract from 'tesseract.js'
import { cleanText } from '../CleanText.js'
import { handleOcrResult } from '../dropdown.js'
</script>

<template>
    <div class="ocr-uploader">
        <div v-for="i in 5" class="slot-wrapper" :key="i">
            <div class="slot">에코 {{ i }}</div>
            <DropdownGrid :index="i - 1" />
        </div>
    </div>
</template>
