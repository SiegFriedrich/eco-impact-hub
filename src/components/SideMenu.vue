<template>
    <div class="side-menu">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Vintage" name="1">
                <div class="vintage-select">
                    <div>
                        <span>From</span>
                        <el-select v-model="form.from" placeholder="Start">
                            <el-option label="Zone No.1" value="shanghai" />
                            <el-option label="Zone No.2" value="beijing" />
                        </el-select>
                    </div>
                    <div>
                        <span>To</span>
                        <el-select v-model="form.to" placeholder="End">
                            <el-option label="Zone No.1" value="shanghai" />
                            <el-option label="Zone No.2" value="beijing" />
                        </el-select>
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item title="Project Type" name="2">
                <div>
                    <CheckBoxGroup :elements="cities" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Mechanism" name="3">
                <div>
                    <CheckBoxGroup :elements="mechanisms" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Country" name="4">
                <div>
                    <CheckBoxGroup :elements="countries" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Registry" name="5">
                <div>
                    <CheckBoxGroup :elements="registries" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Price" name="6">
                <div class="vintage-select">
                    <div>
                        <span>From</span>
                        <el-input v-model="form.from" type="number" placeholder="$0.00" />
                    </div>
                    <div>
                        <span>To</span>
                        <el-input v-model="form.to" type="number" placeholder="$0.00" />
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import CheckBoxGroup from './CheckBoxGroup.vue';
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

const cities = ref([
    'Energy industry (renewable/non-renewable sources)',
    'Energy distribution',
    'Energy demand',
    'Manufacturing industries',
    'Chemical industries',
    'Construction',
    'Transport',
    'Mining/mineral production',
    'Metal production',
    'Fugitive emissions from fuels (solid, oil and gas)',
    'Fugitive emissions from production and consumption of halocarbons and sulphur hexafluoride',
    'Solvent use',
    'Waste handling and disposal',
    'Agriculture, forestry, and other land use',
]);

const mechanisms = ref(['Avoidance', 'Removal'])
const countries = ref(['Phippines', 'Malaysia', 'Indonesia'])
const registries = ref(['Gold Standard', 'Puro Earth', 'Verra'])
</script>

<style scoped lang="scss">
.vintage-select {
    display: flex;

    div {
        line-height: 30px;
        color: #A19F9F;
    }

    .el-input__inner::placeholder {
        font-size: 10px;
    }

    el-select {
        margin: 0;
    }

    span {
        margin-right: 10px;
    }
}
</style>