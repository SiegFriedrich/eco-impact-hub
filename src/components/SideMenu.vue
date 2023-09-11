<template>
    <div class="side-menu">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Vintage" name="1">
                <div class="vintage-select">
                    <div>From</div>
                    <el-select v-model="form.from" placeholder="Start">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                    <div>To</div>
                    <el-select v-model="form.to" placeholder="End">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </div>
            </el-collapse-item>
            <el-collapse-item title="Project Type" name="2">
                <div>
                    Operation feedback: enable the users to clearly perceive their
                    operations by style updates and interactive effects;
                </div>
                <div>
                    Visual feedback: reflect current state by updating or rearranging
                    elements of the page.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Mechanism" name="3">
                <div>
                    Simplify the process: keep operating process simple and intuitive;
                </div>
                <div>
                    Definite and clear: enunciate your intentions clearly so that the
                    users can quickly understand and make decisions;
                </div>
                <div>
                    Easy to identify: the interface should be straightforward, which helps
                    the users to identify and frees them from memorizing and recalling.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Country" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Registry" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Price" name="4">
                <div>
                    Decision making: giving advices about operations is acceptable, but do
                    not make decisions for the users;
                </div>
                <div>
                    Controlled consequences: users should be granted the freedom to
                    operate, including canceling, aborting or terminating current
                    operation.
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const form = reactive({
    offer: '',
    credits: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
    from: '',
    to: '',
})

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}
</script>

<style scoped lang="scss">
.vintage-select {
    display: flex;

    el-select {
        margin: 0 10px 0 10px;
    }

    span {
        margin-right: 10px;
    }
}
</style>