<template>
  <div class="app-wrapper">
    <Navbar />
    <div class="main-panel">
      <CharacterPanel />
      <OcrGrid />
      <EquipmentGrid />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import CharacterPanel from './components/CharacterPanel.vue'
import EquipmentGrid from './components/EquipmentGrid.vue'
import OcrUploader from './components/OcrUploader.vue'
import OcrGrid from './components/OcrGrid.vue'
</script>

<style src="./style.css"/>
