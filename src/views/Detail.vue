<template>
    <div class="common-layout">
        <el-container>

            <el-header class="header">
                <div class="header-cover">
                    <el-button class="back-button" type="info" round>
                        <UnionArrowLeft class="left-arrow" />
                        <span class="button-text">Back</span>
                    </el-button>
                    <div class="title-group">
                        <span class="header-project-name">AFFORESTATION</span> <br />
                        <span class="header-project-category">One-to-Tree</span>
                    </div>

                </div>

            </el-header>

            <el-main class="detail-page">
                <div class="project-detail">
                    <div>
                        <div class="detail-sub-titile">
                            <span>Description</span>
                            <UnionArrowDown />
                        </div>
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
                        <div class="detail-sub-titile">
                            <span>Sustainable Development Contributions</span>
                            <UnionArrowDown />
                        </div>
                        <div class="detail-content">
                            <SDGIcon v-for="el in icons" :key="el" :iconSrc="el" />
                        </div>
                    </div>

                    <div>
                        <div class="detail-sub-titile">
                            <span>Project Details</span>
                            <UnionArrowDown />
                        </div>
                        <div class="detail-content-between">
                            <div class="text-content">
                                <div class="detail-sub-content">
                                    Project type:<br />
                                    Mechanism:<br />
                                    Location:<br />
                                    Developer:<br />
                                    Website:<br />
                                </div>
                                <div class="detail-sub-content">
                                    Afforestation<br />
                                    Removal<br />
                                    Cebu, Philippines<br />
                                    Tree Planters, Inc.<br />
                                    www.treeplanters.com<br />
                                </div>
                            </div>
                            <div>
                                <img src="../assets/cebu-location-map.png">
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="detail-sub-titile">
                            <span>Certification</span>
                            <UnionArrowDown />
                        </div>
                        <div class="detail-content-between">
                            <div class="text-content">
                                <div class="detail-sub-content">
                                    Registry:<br />
                                    Status:<br />
                                    URL:<br />
                                </div>
                                <div class="detail-sub-content">
                                    Verra Registry<br />
                                    Registered<br />
                                    Verra Registry<br />
                                </div>
                            </div>
                            <div class="text-content">
                                <div class="detail-sub-content">
                                    Validator:<br />
                                    Start of crediting period:<br />
                                    End of crediting period:<br />
                                </div>
                                <div class="detail-sub-content">
                                    DNV<br />
                                    January 11, 2018<br />
                                    January 10, 2048<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <PurchaseCard />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SDGIcon from '../components/SDGIcon.vue';
import UnionArrowDown from '../elements/UnionArrowDown.vue';
import UnionArrowLeft from '../elements/UnionArrowLeft.vue';
import PurchaseCard from '../components/PurchaseCard.vue';
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
    height: 22vh;
    margin-left: 0;
    background-image: url('../assets/project1banner.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.header-cover {
    z-index: 99;
    height: calc(18vh - 1px);
    background: linear-gradient(to right, #7A7A7A, #7A7A7A00);
    padding: 20px 50px 20px 50px;

    .title-group {
        margin-top: 59px;
    }

    .back-button {
        display: flex;
        justify-content: space-between;

        .left-arrow {
            // margin-top: 10px;
            margin-right: 8px;
        }

        .button-text {
            margin-top: 1px;
        }
    }

    .header-project-name {
        font-size: 15px;
        color: white;
    }

    .header-project-category {
        color: white;
        font-size: 50px;
        font-weight: 700;
    }

}

.detail-page {
    display: flex;
    justify-content: space-around;

    .project-detail {
        padding: 0 60px 0 50px;

        .detail-sub-titile {
            display: flex;
            justify-content: space-between;
            align-items: center;

            padding-top: 39px;
            padding-bottom: 12px;
            border-bottom: 1px #f4f4f4 solid;
            margin-bottom: 15px;

            span {
                color: #525252;
                font-size: 18px;
                font-weight: 700;
                line-height: 22px;
            }
        }

        .detail-content {
            display: flex;
            justify-content: start;
            color: #525252;
            font-size: 14px;
            font-weight: 400px;
            line-height: 20px;
            padding-right: 40px;



        }

        .detail-content-between {
            display: flex;
            justify-content: space-between;

            .text-content {
                display: flex;
                justify-content: flex-start;
            }


            .detail-sub-content {
                margin-right: 20px;
            }
        }

    }




}
</style>