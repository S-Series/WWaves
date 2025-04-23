<template>
    <div class="info-slot">
        <!-- 왼쪽 2개 -->
        <div class="side left">
            <div class="pair" v-for="i in [0, 1]" :key="'left-' + i">
                <div class="icon">{{ iconIndex[i] }}</div>
                <span class="value">{{ value[i] }}</span>
            </div>
        </div>

        <div class="divider" />

        <!-- 오른쪽 그룹 1: 2개 -->
        <div class="side right">
            <div class="pair" v-for="i in [2, 3]" :key="'right1-' + i">
                <div class="icon">{{ iconIndex[i] }}</div>
                <span class="value">{{ value[i] }}</span>
            </div>
        </div>

        <!-- 오른쪽 그룹 2: 2개 -->
        <div class="side right">
            <div class="pair" v-for="i in [4, 5]" :key="'right2-' + i">
                <div class="icon">{{ iconIndex[i] }}</div>
                <span class="value">{{ value[i] }}</span>
            </div>
        </div>

        <!-- 오른쪽 그룹 3: 1개 -->
        <div class="side right">
            <div class="pair" v-for="i in [6]" :key="'right3-' + i">
                <div class="icon">{{ iconIndex[i] }}</div>
                <span class="value">{{ value[i] }}</span>
            </div>
            <div class="pair" v-for="i in [7]" :key="'right4-' + i">
                <span class="value">{{ value[i] }}pt</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    iconIndex: Array,
    value: Array
})
</script>

<style scoped>
.info-slot {
    display: flex;
    object-fit: contain;
    width: 100%;
    height: 18%;
    background-color: rgba(0, 255, 242, 0.384);
    border: 1px dashed #00000027;
    border-radius: 1vh 1vw;
    justify-content: space-between;
}

.side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    margin: 0vh 0.1vw;
}

.pair {
    display: flex;
    align-items: center;
    height: 37.5%;
    margin: .3vh .3vw;
    background-color: rgba(255, 251, 0, 0.2);
}

.icon {
    width: 25%;
    aspect-ratio: 1 / 1;
    background-color: #000;
    flex-shrink: 0;
    object-fit: contain;
    margin: .2rem .2rem;
}

.value {
    width: 100%;
    font-size: min(1.25vw, 1.25vh);
    font-weight: bold;
    text-align: right;
    margin: 0% 7.5%;
    white-space: nowrap;
}

.divider {
    display: flex;
    width: 2px;
    height: 85%;
    justify-content: center;
    background-color: #444;
    margin: 0.5cap;
}

.score {
    position: absolute;
    right: .5rem;
    bottom: .25rem;
    font-size: 1rem;
    font-weight: bold;
}
</style>