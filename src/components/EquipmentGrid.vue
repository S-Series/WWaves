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
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 16px;
    padding: 20px;
}
</style>