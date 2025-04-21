<template>
  <div class="character-panel">
    <div class="character-illust-wrapper">
      <img class="character-illust" :src="character.image" alt="Character" />
    </div>
    <div class="character-info">
      <h2>{{ character.name }}</h2>
      <p>총 점수: {{ character.score }}</p>
      <ul>
        <li v-for="(value, stat) in character.stats" :key="stat">
          {{ stat }}: {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const character = {
  name: "카멜리아",
  score: 856,
  image: "/character/camellya_stand.png",
  stats: {
    HP: "13420",
    공격력: "1450",
    방어력: "900",
    '공명 효율': "23.4%",
    크리티컬: "23.4%",
    '크리티컬 피해': "23.4%",
    '타입공격 보너스': "108",
    '속성공격 보너스': "108",
  },
};
</script>

<style scoped>
.character-panel {
  display: flex;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 16px;
  gap: 24px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  height: 100%;
  box-sizing: border-box;
  max-width: min(1080px, 90vw);
  aspect-ratio: 21 / 9;
  margin: 0 auto;
  overflow: hidden;
}

.character-illust-wrapper {
  width: 35%;
  height: 100%;
  overflow: hidden;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
}

.character-illust {
  width: 100%;
  height: 150%;
  object-fit: cover;
}

.character-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.character-info h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.character-info ul {
  padding-left: 16px;
}
</style>
