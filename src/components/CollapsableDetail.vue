<template>
    <div class="demo-collapse collapse-container">
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Description" name="1">
                <div>
                    The "One-to-Tree" initiative is a visionary tree planting project focused on addressing climate
                    change and fostering ecological restoration. This innovative project aims to convert
                    underutilized spaces into thriving forests, strategically planting trees that serve as powerful
                    carbon sinks. Through community involvement, educational campaigns, and rigorous monitoring,
                    "One-to-Tree" seeks to not only mitigate carbon emissions but also cultivate a renewed sense of
                    environmental responsibility. Each tree planted symbolizes a step towards a more sustainable
                    future, uniting individuals and communities in the global fight against climate change.
                    The "One-to-Tree" initiative is a visionary tree planting project focused on addressing climate
                    change and fostering ecological restoration. This innovative project aims to convert
                    underutilized spaces into thriving forests, strategically planting trees that serve as powerful
                    carbon sinks. Through community involvement, educational campaigns, and rigorous monitoring,
                </div>
                <div>
                    Consistent within interface: all elements should be consistent, such
                    as: design style, icons and texts, position of elements, etc.
                </div>
            </el-collapse-item>
            <el-collapse-item title="Sustainable Development Contributions" name="2">
                <div class="detail-content">
                    <SDGIcon v-for="el in icons" :key="el" :iconSrc="el" />
                </div>
            </el-collapse-item>
            <el-collapse-item title="Project Details" name="3">
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
            </el-collapse-item>
            <el-collapse-item title="Certification" name="4">
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
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
import SDGIcon from '../components/SDGIcon.vue';

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
    console.log(val)
}

const icons = ref([
    '../assets/sdg-image/E_SDG_Icons-01.jpg',
    '../assets/sdg-image/E_SDG_Icons-13.jpg',
    '../assets/sdg-image/E_SDG_Icons-15.jpg',
])
</script>

<style lang="scss" scoped>
.detail-page {
    display: flex;
    justify-content: space-around;

    .project-detail {
        padding: 0 60px 0 50px;
        margin-right: 100px;

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
  