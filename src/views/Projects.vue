<template>
    <div class="images-container">
        <div class="image-item" v-for="item in images" :key="item.path">
            <div class="cover"></div>
            <div class="base"><img :src="getImagePath(item.path)"></div>

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

// const setBackground = (path: string) => {
//     return {
//         'background-image': new URL(`../assets/${path}.svg`, import.meta.url).href
//     }
// }

const images = [
    { path: 'afforestation', category: 'afforestation'.toLocaleUpperCase, title: 'One-to-Tree' },
    { path: 'energyefficiency', category: 'energy efficiency'.toLocaleUpperCase, title: 'Improved Cookstoves' },
    { path: 'agriculture', category: 'agriculture'.toLocaleUpperCase, title: 'Carbon-Efficient Farming' },
    { path: 'redd', category: 'redd'.toLocaleUpperCase, title: 'Mindanao Forest Conservation' },
]
</script>

<style scoped>
.images-container {
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    .image-item {

        width: 440px;
        height: 250px;
        margin-bottom: 45px;

        .base {
            z-index: 1;
            cursor: pointer;
        }

        .cover {
            position: absolute;
            opacity: 90%;
            z-index: 99;
            margin-top: 125px;
            width: 440px;
            height: 125px;
            background: linear-gradient(to bottom, #7A7A7A00, #7A7A7A);
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
    }
}
</style>