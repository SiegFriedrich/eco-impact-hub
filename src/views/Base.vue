<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <div>
                    <EcoLogo />
                </div>
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
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </div>
</template>
  

<script setup lang="ts">
import EcoLogo from '../elements/EcoLogo.vue'


</script>

<style scoped lang="scss">
.common-layout {
    margin: 0 45px 0 45px;
}

.header {
    display: flex;
    justify-content: space-between;
    margin-top: 18px;

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
}
</style>