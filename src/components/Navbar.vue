<template>
    <nav class="navbar">
        <div class="navbar-left">
            <img src="/gem.webp" alt="logo" class="logo" />
            띵조 DEV
        </div>
        <div class="navbar-right">
            <button>홈</button>
            <button>OCR 불러오기</button>
            <button>도움말</button>
        </div>
    </nav>
</template>

<script setup>
// 아무 로직 없음. 단순한 UI
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0e3d6b;
    color: white;
    padding: 12px 24px;
}

.navbar-left .logo {
    width: 64px;
    height: 64px;
}

.navbar-right button {
    background: none;
    border: none;
    color: white;
    margin-left: 20px;
    font-size: 14px;
    cursor: pointer;
}

.navbar-right button:hover {
    text-decoration: underline;
}
</style>