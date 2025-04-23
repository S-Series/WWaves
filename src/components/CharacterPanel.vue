<template>
  <div class="character-panel" :style="{ backgroundImage: `url('//Temp/Output.jpg')` }">
    <div class="character-illust-wrapper">
      <img class="character-illust" src="/character/shorekeeper/stand.png"/>
    </div>
    <CharacterStat/>
    <InfoGrid />
  </div>
</template>

<script setup>
import InfoGrid from './InfoGrid.vue';
import CharacterStat from './StatPanel.vue';
</script>

<style scoped>
.character-panel {
  background-size: cover;
  background-color: #a5a5a5;
  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  color: #fff;
  height: 100%;
  box-sizing: border-box;
  max-width: min(1080px, 90vw);
  border-radius: 1vh 1vw;
  aspect-ratio: 21 / 9;
  margin: 0 auto;
  overflow: hidden;

  justify-content: space-between;
}

.character-illust-wrapper {
  width: 30%;
  border-radius: 0px;
  display: flex;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}


.character-illust {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
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
  margin-bottom: 4px;
}

.character-info ul {
  padding-left: 8px;
}
</style>
