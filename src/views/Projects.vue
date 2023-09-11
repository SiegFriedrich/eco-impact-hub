<template>
    <el-container class="common-margin">
        <el-header class="seconde-header">
            <div><el-text style="font-size: 40px;">Projects</el-text></div>
            <div>
                <ClearableInput />
            </div>
            <div>
                <el-button color="#004D84" round>+ Request for proposal</el-button>
            </div>
        </el-header>

        <el-container>
            <el-aside class="side" width="200px">
                <div class="reset-section">
                    <el-button class="reset-button" type="info" round>Reset filters</el-button>
                </div>
                <SideMenu />
            </el-aside>

            <el-main>
                <div class="images-container">
                    <div class="image-item" v-for="item in images" :key="item.path" @click="gotoDatailPage(item.detailNo)">
                        <div class="cover">
                            <div class="description">
                                <span class="category">{{ item.category }}</span> <br />
                                <span class="title">{{ item.title }}</span>
                            </div>
                        </div>
                        <div class="base"><img :src="getImagePath(item.path)"></div>
                    </div>
                </div>
            </el-main>

        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ClearableInput from '../components/ClearableInput.vue'
import SideMenu from '../components/SideMenu.vue';

const router = useRouter();
/**
 * How to deal with dynamic path import in vite vue3
 * https://juejin.cn/post/7030698018609315871
 */

const getImagePath = (path: string) => {
    return new URL(`../assets/${path}.png`, import.meta.url).href
}

const images = [
    { path: 'thumbnail_afforestation', category: 'AFFORESTATION', title: 'One-to-Tree', detailNo: '1001' },
    { path: 'thumbnail_energyefficiency', category: 'ENERGY EFFICIENCY', title: 'Improved Cookstoves', detailNo: '1002' },
    { path: 'thumbnail_agriculture', category: 'AGRICULTURE', title: 'Carbon-Efficient Farming', detailNo: '1003' },
    { path: 'thumbnail_redd', category: 'REDD', title: 'Mindanao Forest Conservation', detailNo: '1004' },
]

const gotoDatailPage = (detailNo: string) => {
    console.log(detailNo)
    router.push(`/projects/detail/${detailNo}`);
}
</script>

<style scoped lang="scss">
@media (max-width:1770px) {
    .images-container {
        display: flex;
        justify-content: space-around;
    }
}


.images-container {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0;

    .image-item {

        width: 440px;
        height: 270px;
        margin-bottom: 45px;
        margin-left: min(10px);

        .base {
            z-index: 1;

            img {
                border-radius: 20px;
            }

        }

        .cover {
            position: absolute;
            opacity: 90%;
            z-index: 99;
            margin-top: 125px;
            width: 440px;
            height: 125px;
            background: linear-gradient(to bottom, #7A7A7A00, #7A7A7A);
            // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;

            .description {
                margin-top: 70px;
                margin-left: 21px;

                .category {
                    font-size: 10px;
                    color: white;
                }

                .title {
                    color: white;
                    font-size: 20px;
                    font-weight: 700;
                }
            }

        }
    }

    .image-item:hover {
        .cover {
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }
}

.seconde-header {
    position: relative;
    margin-top: 100px;
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
}

.side {
    width: 20%;
    background-color: #FFFFFF;
    position: relative;

    ul {
        width: 80%;
    }

    .reset-section {
        display: flex;
        justify-content: center;
        align-items: center;

        .reset-button {
            margin-bottom: 26px;
            margin-right: 20%;

        }
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 51px;
        font-size: 15px;
        color: #A19F9F;
        height: 51px;
        border-bottom: 1px solid #A19F9F;
        cursor: pointer;
    }


}

.eco-content-container {
    position: absolute;
    top: 100px;
    width: 100%;
}


.footer {
    background-color: darkgoldenrod;
}
</style>