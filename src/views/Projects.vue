<template>
    <div class="images-container">
        <div class="image-item" v-for="item in images" :key="item.path">
            <img :src="getImagePath(item.path)">
        </div>
    </div>
</template>

<script setup lang="ts">
/**
 * How to deal with dynamic path import in vite vue3
 * https://juejin.cn/post/7030698018609315871
 */

const getImagePath = (path: string) => {
    return new URL(`../assets/${path}.svg`, import.meta.url).href
}
const images = [
    { path: 'afforestation', category: 'afforestation'.toLocaleUpperCase, title: 'One-to-Tree' },
    { path: 'energyefficiency', category: 'energy efficiency'.toLocaleUpperCase, title: 'Improved Cookstoves' },
    { path: 'agriculture', category: 'agriculture'.toLocaleUpperCase, title: 'Carbon-Efficient Farming' },
    { path: 'redd', category: 'redd'.toLocaleUpperCase, title: 'Mindanao Forest Conservation' },
]
</script>

<style scoped>
.images-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .image-item {
        margin-bottom: 45px;
        cursor: pointer;
    }
}
</style>