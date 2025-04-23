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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5%;
  z-index: 1000;
  background-color: #0e3d6b;
  color: aliceblue;
  justify-content: space-between;
  align-items: center;
}

.navbar-left .logo {
    width: 64px;
    height: 64px;
}

.navbar-right {
    margin-right: 2vh;
}

.navbar-right button {
    background: none;
    border: none;
    color: white;
    font-size: 14px;
    cursor: pointer;
}

.navbar-right button:hover {
    text-decoration: underline;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
}

.logo-icon {
  height: 100%;
  width: auto;
}

.navbar-title {
  font-size: 20px;
  font-weight: bold;
}

.navbar-links {
  display: flex;
  gap: 20px;
  /*justify-content: flex-end;*/
  width: 100%;
}

.navbar-links button {
  margin-left: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 15px;
  cursor: pointer;
}

.navbar-links button:hover {
  text-decoration: underline;
}
</style>