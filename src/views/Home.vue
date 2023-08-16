<template>
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
            <ul>
                <li class="menu-item" v-for="item in mainMenu" :key="item.name">{{ item.name }}
                    <el-icon>
                        <ArrowDown />
                    </el-icon>
                </li>
            </ul>
            <div>
                <el-button class="reset-button" type="info" round>Reset filters</el-button>
            </div>
        </el-aside>
        <el-container>
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>
  

<script setup lang="ts">
import ClearableInput from '../components/ClearableInput.vue'

const mainMenu = [
    { name: 'Vintage' },
    { name: 'Project Type' },
    { name: 'Mechanism' },
    { name: 'Country' },
    { name: 'Registry' },
    { name: 'Price' }
]
</script>

<style scoped lang="scss">
.seconde-header {
    margin-top: 42px;
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

    .reset-button {
        position: absolute;
        margin-top: 26px;
        left: 40%;
        margin-left: -52px;
    }
}



.footer {
    background-color: darkgoldenrod;
}
</style>