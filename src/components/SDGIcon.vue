<template>
    <img class="sdg-icons" :src="getImagePath(iconSrc!)" alt="SDG ICONS" />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    iconSrc: String
})

const { iconSrc } = toRefs(props);
const getImagePath = (path: string) => {
    return new URL(path, import.meta.url).href
}

</script>

<style scoped lang="scss">
.sdg-icons {
    margin-right: 13px;
    width: 50px;
    height: 50px;
}
</style>