<template>
    <div class="character-panel">
        <img class="character-illust" :src="character.image" alt="Character" />
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
    name: "라나",
    score: 856,
    image: "/assets/Character/anke_standing.png", // 여기에 너의 일러스트 경로 넣으면 됨
    stats: {
        생명력: "13420",
        공격력: "1450",
        방어력: "900",
        치명타: "23.4%",
        속도: "108",
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
}

.character-illust {
    width: 320px;
    height: auto;
    border-radius: 12px;
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