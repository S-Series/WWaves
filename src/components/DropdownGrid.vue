<template>
    <div class="dropdown-grid-vertical">
        <!-- 주옵션 -->
        <select class="main-stat"></select>
        <select class="main-value"></select>
        <select class="main-stat"></select>
        <select class="main-value"></select>

        <!-- 구분선 -->
        <div class="dropdown-divider"></div>

        <!-- 서브옵션 5줄 -->
        <select class="sub-stat" v-for="n in 5"></select>
        <select class="sub-value" v-for="n in 5"></select>
    </div>
</template>