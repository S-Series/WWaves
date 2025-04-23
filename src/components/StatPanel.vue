<template>
    <div class="character-stat-wrapper">
        <WeaponData />
    </div>
</template>

<script setup>
import WeaponData from './WeaponData.vue';
</script>

<style scoped>
.character-stat-wrapper {
    display: flex;
    width: 30%;
    border-radius: .5vw;
    margin: 1.55% 0%;
    background-color: rgba(255, 255, 0, 0.2);
}
</style>