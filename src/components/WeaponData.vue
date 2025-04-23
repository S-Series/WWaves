<template>
    <div class="weapon-slot">
      <img
        class="weapon-icon"
        :src="iconSrc"
        @error="handleImageError"
        alt="Weapon Icon"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    path: {
      type: String,
      required: false,
      default: '/weapon/default.png' // 기본 이미지
    }
  })
  
  const iconSrc = ref(`/weapon/Amplifter/${props.path}`)
  
  function handleImageError() {
    iconSrc.value = '/weapon/default.png' // 대체 이미지 경로
  }
  </script>
  
  <style scoped>
  .weapon-slot {
    display: flex;
    height: 25%;
    width: 100%;
  }
  
  .weapon-icon {
    display: flex;
    margin: 2.5%;
    object-fit: cover;
  }
  </style>