<template>
    <el-header class="header common-margin">
        <EcoLogo @click="backToHome()" class="pointer" />
        <div class="header-navi">
            <div class="title" @click="backToHome()">Projects</div>
            <div class="title" @click="gotoMyhub">My Hub</div>
            <div class="title" @click="open3">About Us</div>
            <div class="icon-group">
                <div @click="open3">
                    <img src="../assets/shoppingcart.png" width="33" alt="shopping cart" />
                </div>
                <div @click="open3">
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
import { useRouter } from 'vue-router';
// import { useRoute } from 'vue-router';
import { ElNotification } from 'element-plus';
import EcoLogo from '../elements/EcoLogo.vue'
// import { computed } from 'vue';

const router = useRouter();
// const route = useRoute();
// const isMyHub = computed(() => {
//     return !route.path.includes('myhub');
// })
const backToHome = () => {
    router.push('/');
}
const open3 = () => {
    ElNotification({
        title: 'Info',
        message: 'This function has not been implemented',
        type: 'info',
    })
}

const gotoMyhub = () => {
    router.push('/myhub/transactions')
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
            cursor: pointer;
        }
    }

    .pointer {
        cursor: pointer;
    }
}



//Problems Solutions -> How to fix header on the top but the content will be scrollable?
</style>