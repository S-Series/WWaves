<template>
    <div :class="['sidebar', { open }]">
        <div class="sidebar-content">
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.sidebar {
    position: fixed;
    top: 5vh;
    width: 20vh;
    height: calc(100vh - 5vh);
    background-color: #1c1c1c;
    z-index: 500; /* Navbar보다 아래여야 함 */
}
</style>