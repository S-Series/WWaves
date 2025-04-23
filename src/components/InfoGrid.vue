<template>
  <div class="info-grid">
    <InfoSlot v-for="n in 5" :key="n" :iconIndex="dummyIcons[n - 1]" :value="dummyValues[n - 1]" />
  </div>
</template>

<script setup>
import InfoSlot from './InfoSlot.vue'

// 더미 데이터 5세트
const dummyIcons = [
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
]

const dummyValues = [
  ['22.0%', 150, '10.9%', '6.3%', '13%', '22%', 165, '178.9'],
  ['22.0%', 150, '10.9%', '6.3%', '13%', '22%', 165, '178.9'],
  ['22.0%', 150, '10.9%', '6.3%', '13%', '22%', 165, '178.9'],
  ['22.0%', 150, '10.9%', '6.3%', '13%', '22%', 165, '178.9'],
  ['22.0%', 150, '10.9%', '6.3%', '13%', '22%', 165, '178.9']
]
</script>

<style scoped>
.info-grid {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 37%;
  margin: 1.25%;
  flex-wrap: nowrap;
}
</style>