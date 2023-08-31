<template>
    <el-header class="header common-margin">
        <EcoLogo @click="backToHome()" class="pointer" />
        <div class="header-navi">
            <div class="title">Projects</div>
            <div class="title">About Us</div>
            <div class="icon-group">
                <div>
                    <img src="../assets/shoppingcart.png" width="33" alt="shopping cart" />
                </div>
                <div>
                    <img src="../assets/profile.png" width="36" alt="profile" />
                </div>
            </div>
        </div>
    </el-header>

    <el-container>
        <router-view />
    </el-container>
</template>
  

<script setup lang="ts">
import EcoLogo from '../elements/EcoLogo.vue'
import { useRouter } from 'vue-router';
const router = useRouter();
const backToHome = () => {
    router.push('/');
}

</script>

<style scoped lang="scss">
.header {
    height: 100px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-top: 19px;
    margin-bottom: 19px;
    z-index: 100;
    background-color: #ffffff;
    padding-left: 25px;
    padding-right: 25px;

    .header-navi {
        display: flex;

        /**
            How to deal with the text vertical align middle 
            https://www.cnblogs.com/xiaocaiyuxiaoniao/p/10407830.html
        */
        .title {
            height: 59px;
            line-height: 59px;
            vertical-align: middle;
            width: 85px;
            margin-left: 32px;
            font-size: 20px;
            cursor: pointer;
        }

        .icon-group {
            width: 85px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-left: 50px;
        }
    }

    .pointer {
        cursor: pointer;
    }
}



//Problems Solutions -> How to fix header on the top but the content will be scrollable?
</style>