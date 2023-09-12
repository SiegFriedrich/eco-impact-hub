<template>
    <el-container class="common-margin">
        <el-header class="seconde-header">
            <div><el-text class="page-title">My Hub</el-text></div>
            <div>
                <ClearableInput :placeholderMessage="placeholderMsg" />
            </div>
            <div>
                <el-button @click="open3" color="#004D84" round>+ New Order</el-button>
            </div>
        </el-header>

        <el-container>
            <el-aside class="side" width="200px">
                <ul>
                    <li class="menu-item" v-for="item in mainMenu" :class="{ active: route.path.includes(item.path) }"
                        :key="item.name" @click="changePage(item.path)"> {{
                            item.name }} </li>
                </ul>

            </el-aside>

            <el-main>
                <router-view />
            </el-main>

        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import ClearableInput from '../components/ClearableInput.vue'
import { ElNotification } from 'element-plus';
import { ref } from 'vue';
const placeholderMsg = ref('Search message here')
const router = useRouter();
const route = useRoute();
/**
 * How to deal with dynamic path import in vite vue3
 * https://juejin.cn/post/7030698018609315871
 */

// const getImagePath = (path: string) => {
//     return new URL(`../assets/${path}.png`, import.meta.url).href
// }
const open3 = () => {
    ElNotification({
        title: 'Info',
        message: 'This function has not been implemented',
        type: 'info',
    })
}

const mainMenu = [
    // {
    //     name: 'Dashboard',
    //     path: 'dashboard'
    // },
    {
        name: 'Transactions',
        path: 'transactions'
    },
    {
        name: 'Messages',
        path: 'messages'
    },
    {
        name: 'Bids & Offers',
        path: 'bids_and_offers'
    },
    {
        name: 'Payment Details',
        path: 'paymentdetails'
    },
    {
        name: 'Settings',
        path: 'settings'
    },
]

const changePage = (path: string) => {
    // if path contains the path i want to push, the function will not be called
    if (!route.path.includes(path)) router.push(`/myhub/${path}`);
}

// const active = ref({
//     fontWeight: '700',
//     color: '#004D84',
// })

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

    .page-title {
        font-size: 40px;
        color: #000000;
    }
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
        justify-content: flex-start;
        align-items: center;
        line-height: 51px;
        font-size: 15px;
        color: #A19F9F;
        height: 51px;
        cursor: pointer;
    }

    .menu-item::before {
        content: '';
        width: 21px;
        height: 14px;
        background-color: #D9D9D9;
        margin-right: 10px;
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

.active {
    font-weight: 700;
    color: #004D84 !important;
}
</style>