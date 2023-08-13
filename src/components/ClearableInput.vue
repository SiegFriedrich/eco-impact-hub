<template>
    <div class="clearable-input">
        <el-input class="search" v-model="input" placeholder="Please input" clearable />
        <el-button type="info" round>Info</el-button>
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

    .search>.el-input__wrapper>.el-input__inner {
        border-radius: 20px;
        border: 4px;
    }

}
</style>
  