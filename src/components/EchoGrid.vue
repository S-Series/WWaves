<template>
  <div class="equipment-grid">
    <EquipmentSlot :index="0" />
    <EquipmentSlot v-for="n in 4" :key="n" :index="n" />
  </div>
</template>

<script setup>
import EquipmentSlot from './EchoSlot.vue'
</script>

<style scoped>
.equipment-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  gap: 1vw;
  max-width: min(1080px, 90vw);
  margin: 0 auto;
  padding: 1vw;
  box-sizing: border-box;
}
</style>