<template>
    <div class="clearable-input">
        <el-input class="eco-impact-search" v-model="input" placeholder="Search project here" clearable />
        <el-button class="search-button" type="info" round>Search</el-button>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
<style scoped lang="scss">
.clearable-input {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    border: 0.50px #B6B6B6 solid;
    height: 39px;
    width: 500px;
    padding-left: 10px;
    padding-right: 5px;

    .search-button {
        background-color: #BFC0C0;
        width: 96px;
        height: 32px;
        border: none;
    }
}
</style>
  