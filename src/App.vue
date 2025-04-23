<template>
  <div class="app-wrapper">
    <Navbar />
    <Sidebar />
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
import EquipmentGrid from './components/EchoGrid.vue'
import OcrGrid from './components/OcrGrid.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style src="./style.css"/>
