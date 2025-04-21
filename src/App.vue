<template>
  <div class="app-wrapper">
    <Navbar />
    <div class="main-panel">
      <CharacterPanel />
      <EquipmentGrid />
    </div>
    <OcrUploader />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import CharacterPanel from './components/CharacterPanel.vue'
import EquipmentGrid from './components/EquipmentGrid.vue'
import OcrUploader from './components/OcrUploader.vue'
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-panel {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 1rem;
}
</style>
