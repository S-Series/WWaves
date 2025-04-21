<template>
    <div class="equipment-grid">
      <EquipmentSlot :index="0" />
      <EquipmentSlot v-for="n in 4" :key="n" :index="n" />
    </div>
  </template>

<script setup>
import EquipmentSlot from './EquipmentSlot.vue'
</script>

<style scoped>
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* 5개의 동일한 너비 컬럼 */
  gap: 20px;
  justify-content: center; /* 중앙 정렬 */
  width: fit-content;
  margin: 0 auto; /* 수평 중앙정렬 */
}

</style>