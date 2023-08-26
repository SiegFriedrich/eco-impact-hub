<template>
    <div class="purchase-button">
        <el-button type="info" size="large" round>
            <div class="inside-button">
                <span>{{ name }}</span>
                <span>+</span>
            </div>
        </el-button>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
})

const { name } = toRefs(props);

</script>

<style scoped lang="scss">
.purchase-button {
    margin-bottom: 9px;
    display: flex;
    justify-content: center;
    align-items: center;

    .inside-button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        width: 30vh;
    }
}

.purchase-button {
    el-button:hover {
        box-shadow: 0px 4px 4px #00000010;
    }
}
</style>