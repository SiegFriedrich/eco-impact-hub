<template>
    <div class="purchase-button">
        <el-button v-show="basic" size="large" round class="basic-button">
            <div class="inside-button">
                <span>{{ name }}</span>
                <span v-if="!suffix">+</span>
                <span v-else>{{ suffix }}</span>
            </div>
        </el-button>
        <el-button v-show="blue" size="large" round class="blue-button">
            <div class="inside-button">
                <span>{{ name }}</span>
                <span v-if="!suffix">+</span>
                <span v-else>{{ suffix }}</span>
            </div>
        </el-button>
        <el-button v-show="gray" size="large" round class="gray-button">
            <div class="inside-button">
                <span>{{ name }}</span>
                <span v-if="!suffix">+</span>
                <span v-else>{{ suffix }}</span>
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
    basic: Boolean,
    blue: Boolean,
    gray: Boolean,
    suffix: {
        type: String,
    }
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
        width: 250px;
    }
}

.purchase-button {
    el-button:hover {
        box-shadow: 0px 4px 4px #00000010;
    }
}

.dialog-footer button:first-child {
    margin-right: 10px;
}
</style>