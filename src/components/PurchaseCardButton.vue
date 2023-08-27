<template>
    <div class="purchase-button" @click="dialogFormVisible = true">
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

    <el-dialog v-model="dialogFormVisible" title="Shipping address">
        <el-form :model="form">
            <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { toRefs, reactive, ref } from 'vue';
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

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