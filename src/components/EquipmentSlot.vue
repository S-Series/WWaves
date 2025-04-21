<template>
    <div class="slot-wrapper">
        <div class="slot-label">에코 {{ index + 1 }}</div>
        <div class="dropdown-grid-vertical">
            <!-- Main Options (2줄) -->
            <template v-for="(main, i) in 2" :key="'main-' + i">
                <select v-model="selected.mainStats[i]">
                    <option value="" disabled>속성 선택</option>
                    <option v-for="stat in fixedMainStats" :key="stat" :value="stat">{{ stat }}</option>
                </select>
                <select v-model="selected.mainValues[i]">
                    <option value="" disabled>수치 선택</option>
                    <option v-for="val in getMainValues(selected.mainStats[i])" :key="val" :value="val">{{ val }}
                    </option>
                </select>
            </template>

            <div class="dropdown-divider"></div>

            <!-- Sub Options (5줄) -->
            <template v-for="(sub, i) in 5" :key="'sub-' + i">
                <select v-model="selected.subStats[i]">
                    <option value="" disabled>속성 선택</option>
                    <option v-for="stat in fixedSubStats" :key="stat" :value="stat">{{ stat }}</option>
                </select>
                <select v-model="selected.subValues[i]">
                    <option value="" disabled>수치 선택</option>
                    <option v-for="val in getSubValues(selected.subStats[i])" :key="val" :value="val">{{ val }}</option>
                </select>
            </template>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
import {
    fixedMainStats,
    statMainValues,
    fixedSubStats,
    statSubValues,
} from '../dropdownValue.js';

const props = defineProps({
    index: Number
});

// 반응형 선택값
const selected = reactive({
    mainStats: ['', ''],
    mainValues: ['', ''],
    subStats: Array(5).fill(''),
    subValues: Array(5).fill('')
});

function getMainValues(stat) {
    return statMainValues[stat] || [];
}

function getSubValues(stat) {
    return statSubValues[stat] || [];
}
</script>

<style scoped>
.slot-wrapper {
    border: 1px solid #333;
    border-radius: 8px;
    padding: 12px;
    background-color: #1c1c1c;
}

.slot-label {
    font-weight: bold;
    margin-bottom: 6px;
}

.dropdown-grid-vertical {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 12px;
}

.dropdown-divider {
    grid-column: 1 / 3;
    height: 1px;
    background-color: #444;
    margin: 4px 0;
}
</style>