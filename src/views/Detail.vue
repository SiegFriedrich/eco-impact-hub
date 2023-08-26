<template>
    <div class="common-layout">
        <el-container>
            <el-header class="header">
                <div class="header-cover"></div>
            </el-header>
            <el-main class="detail-page">
                <div class="project-detail">
                    <div>
                        <div class="detail-sub-titile">Description </div>
                        <div class="detail-content">
                            The "One-to-Tree" initiative is a visionary tree planting project focused on addressing climate
                            change and fostering ecological restoration. This innovative project aims to convert
                            underutilized spaces into thriving forests, strategically planting trees that serve as powerful
                            carbon sinks. Through community involvement, educational campaigns, and rigorous monitoring,
                            "One-to-Tree" seeks to not only mitigate carbon emissions but also cultivate a renewed sense of
                            environmental responsibility. Each tree planted symbolizes a step towards a more sustainable
                            future, uniting individuals and communities in the global fight against climate change.
                        </div>
                    </div>
                    <div>
                        <div class="detail-sub-titile">Sustainable Development Contributions</div>
                        <div class="detail-content">
                            <SDGIcon v-for="el in icons" :key="el" :iconSrc="el" />
                        </div>
                    </div>

                    <div>
                        <div class="detail-sub-titile">Project Details</div>
                        <div class="detail-content"> </div>
                    </div>

                    <div>
                        <div class="detail-sub-titile">Certification</div>
                        <div class="detail-content"> </div>
                    </div>
                </div>
                <div class="project-bill">
                    <div class="bill-item"></div>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SDGIcon from '../components/SDGIcon.vue';
//Problems Solutions
/**
 * How to pass img src to children when i do this below it doesnt work.
 */
const icons = ref([
    '../assets/sdg-image/E_SDG_Icons-01.jpg',
    '../assets/sdg-image/E_SDG_Icons-13.jpg',
    '../assets/sdg-image/E_SDG_Icons-15.jpg',
])

</script>

<style scoped lang="scss">
@media (max-width:1100px) {
    .detail-page {
        flex-direction: column;
        margin: auto;
    }
}

.header {
    height: 18vh;
    margin-left: 0;
    background-image: url('../assets/project1banner.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.header-cover {
    height: 18vh;
    background: linear-gradient(to right, #7A7A7A, #7A7A7A00);
}

.detail-page {
    display: flex;
    justify-content: space-around;

    .project-detail {
        padding: 0 60px 0 50px;

        .detail-sub-titile {
            color: #525252;
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            padding-top: 39px;
            padding-bottom: 12px;
            border-bottom: 1px #f4f4f4 solid;
            margin-bottom: 15px;
        }

        .detail-content {
            display: flex;
            justify-content: flex-start;
            color: #525252;
            font-size: 14px;
            font-weight: 400px;
            line-height: 20px;
            padding-right: 40px;
        }

    }

    .project-bill {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 20px 52px 52px 52px;

        .bill-item {
            width: 400px;
            height: 60vh;
            margin-top: 19px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;

        }
    }


}
</style>