<template>
    <div class="ocr-uploader" :class="{ active: isFocused }" tabindex="0" @focus="isFocused = true"
        @blur="isFocused = false" @paste="handlePaste">
        <p class="slot-label">에코 슬롯 {{ (slotIndex ?? 0) + 1 }}</p>

        <div v-if="imagePreview" class="image-preview">
            <img :src="imagePreview" alt="Preview" />
        </div>

        <div v-else class="drop-hint">
            <p v-if="!isFocused">📋 Ctrl + V로 붙여넣기</p>
            <p v-else>🟢 슬롯 {{ (slotIndex ?? 0) + 1 }} 준비됨</p>
        </div>

        <button v-if="ocrText && !showResult" @click="showResult = true" class="view-result">
            🔍 결과 보기
        </button>

        <div class="ocr-result" v-if="showResult">
            <pre>{{ ocrText }}</pre>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Tesseract from 'tesseract.js'
import { cleanText } from '../CleanText.js'

const props = defineProps({
    slotIndex: Number,
})

const imagePreview = ref(null)
const ocrText = ref('')
const isFocused = ref(false)
const showResult = ref(false)

const handlePaste = (event) => {
    const items = event.clipboardData?.items
    if (!items) return

    for (const item of items) {
        if (item.type.indexOf('image') !== -1) {
            const file = item.getAsFile()
            if (file) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    const imgDataUrl = e.target.result
                    imagePreview.value = imgDataUrl
                    runOcr(imgDataUrl)
                }
                reader.readAsDataURL(file)
                break
            }
        }
    }
}

const runOcr = async (imgDataUrl) => {
    ocrText.value = '🔄 OCR 처리 중...'
    showResult.value = false
    try {
        const result = await Tesseract.recognize(imgDataUrl, 'eng+kor')
        const cleaned = cleanText(result.data.text)
        ocrText.value = cleaned || '❌ 인식된 텍스트 없음'
    } catch (err) {
        ocrText.value = '❌ OCR 실패'
        console.error(err)
    }
}
</script>

<style scoped>
.ocr-uploader {
  padding: 1rem;
  border: 2px dashed #ccc;
  text-align: center;
  border-radius: 12px;
  margin: 1rem;
  width: 180px;
  height: auto; /* <-- 높이는 내용에 맞게 */
  background: #fff;
  outline: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem; /* 요소 간 여백 */
}

.ocr-uploader.active {
    border-color: #409eff;
    background-color: #f0f8ff;
}

.slot-label {
    font-weight: 600;
    color: #444;
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
}

.image-preview img {
  width: 100%;
  height: auto;
  border-radius: 6px;
  max-height: 80px; /* 제한을 두되 적당히 */
  object-fit: contain;
}

.drop-hint {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.2;
    margin-top: 0.5rem;
}

.view-result {
    margin-top: 8px;
    padding: 4px 8px;
    font-size: 0.8rem;
    border: none;
    background-color: #3c8dbc;
    color: white;
    border-radius: 6px;
    cursor: pointer;
}

.ocr-result {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: #f3f3f3;
    border-radius: 6px;
    font-size: 0.75rem;
    width: 100%;
    text-align: left;
    max-height: 100px;
    overflow-y: auto;
    border: 1px solid #ddd;
}

/* 이걸 추가! */
.ocr-result pre {
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
}
</style>