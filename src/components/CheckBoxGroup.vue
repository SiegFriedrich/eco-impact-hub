<template>
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">Check all</el-checkbox>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in elements" :key="city" :label="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
</template>
  
<script lang="ts" setup>
import { ref, toRefs } from 'vue'
const props = defineProps({
    elements: Array<string>,
})


const { elements } = toRefs(props);
console.log(elements?.value)
const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])


const handleCheckAllChange = (val: boolean) => {
    checkedCities.value = val ? elements!.value! : []
    isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
    const checkedCount = value.length
    checkAll.value = checkedCount === elements!.value!.length
    isIndeterminate.value = checkedCount > 0 && checkedCount < elements!.value!.length
}
</script>
  