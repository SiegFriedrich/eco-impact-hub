<template>
    <el-popover placement="top-start" :width="200" trigger="hover" :content="SDGContent['08']">
        <template #reference>
            <img class="sdg-icons" :src="getImagePath(iconSrc!)" alt="SDG ICONS" />
        </template>
    </el-popover>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue';

const props = defineProps({
    iconSrc: String,
})

const { iconSrc } = toRefs(props);
const getImagePath = (path: string) => {
    return new URL(path, import.meta.url).href
}

const SDGContent: { [key: string]: any } = ref({
    'NA': '1',
    '01': 'No poverty',
    '02': 'Zero hunger (No hunger)',
    '03': 'Good health and well-being',
    '04': 'Quality education',
    '05': 'Gender equality',
    '06': 'Clean water and sanitation',
    '07': 'Affordable and clean energy',
    '08': 'Decent work and economic growth',
    '09': 'Industry, Innovation and Infrastructure',
    '10': 'Reduced inequality',
    '11': 'Sustainable cities and communities',
    '12': 'Responsible consumption and production'
})

</script>

<style scoped lang="scss">
.sdg-icons {
    margin-right: 13px;
    width: 50px;
    height: 50px;
}
</style>