<template>
    <div class="common-layout">
        <el-container class="detail-container">
            <img :src="getProjectImage(projectInfoResult[0]?.projectImage)" />
            <el-header class="header">
                <div class="header-cover">
                    <el-button class="back-button" type="info" round @click="goToProjectPage()">
                        <UnionArrowLeft class="left-arrow" />
                        <span class="button-text">Back</span>
                    </el-button>
                    <div class="title-group">
                        <!-- Problems Solutions 初期画面渲染时，没有数据会报错！！！， 所以要使用‘？’符号 -->
                        <span class="header-project-name">{{ projectInfoResult[0]?.projectCategory }}</span> <br />
                        <span class="header-project-category">{{ projectInfoResult[0]?.projectName }}</span>
                    </div>
                </div>
            </el-header>

            <el-main class="detail-page">
                <div class="project-detail">
                    <CollapsableDetail :projectId="projectInfoResult[0]?.projectNo"
                        :SDGIcons="projectInfoResult[0]?.SDGIcons" />
                </div>
                <PurchaseCard />
            </el-main>
        </el-container>
    </div>
</template>

<script setup lang="ts">
//Problems Solution
/**
 * 1.How to adjust the @ path in vue?
 * 2.Cannot find module '../models/project.model' or its corresponding type declaration
 *   -> Restart the VSCode!!!!! XD
 * 3.How to get route parameters?
 */
import router from '../router';
import { ProjectInfo } from '../models/project.model';
import UnionArrowLeft from '../elements/UnionArrowLeft.vue';
import PurchaseCard from '../components/PurchaseCard.vue';
import CollapsableDetail from '../components/CollapsableDetail.vue';
import { useRoute } from 'vue-router'
const route = useRoute();
// import { PropType, toRefs, onMounted } from 'vue';
//Problems Solutions
/**
 * How to pass img src to children when i do this below it doesnt work.
 */

//Problems Solution
/**
 * 如何从父组件向子组件传递事件方法？
 */


// const props = defineProps({
//     projectInfo: {
//         required: true,
//         type: Object as PropType<ProjectInfo>,
//     }
// });

// const { projectInfo } = toRefs(props);
const projectInfos: ProjectInfo[] = [

    {
        projectNo: '1001',
        projectCategory: 'AFFORESTATION',
        projectName: 'One-to-Tree',
        projectImage: 'banner_afforestation',
        SDGIcons: [`01`, `13`, `15`],
    }, {
        projectNo: '1002',
        projectCategory: 'ENERGY EFFICIENCY',
        projectName: 'Improved Cookstoves',
        projectImage: 'banner_cookstoves',
        SDGIcons: [`02`, `06`, `08`, `12`],
    }, {
        projectNo: '1003',
        projectCategory: 'AGRICULTURE',
        projectName: 'Carbon-Efficient Farming',
        projectImage: 'banner_farming',
        SDGIcons: [`03`, `04`, `14`],
    }, {
        projectNo: '1004',
        projectCategory: 'REDD',
        projectName: 'Mindanao Forest Conservation',
        projectImage: 'banner_forest',
        SDGIcons: [`06`, `08`, `10`, `11`, `13`],
    },
]

let projectInfoResult: ProjectInfo[] = [];
const getProjectImage = (path: string) => {
    const res = path ? new URL('../assets/' + path + '.png', import.meta.url).href : '';
    return res;
}

const goToProjectPage = () => {
    router.push('/')
}

const projectNo = route.params.id
console.log(projectNo);

projectInfoResult = projectInfos.filter((el) => {
    return el.projectNo === projectNo;
})
</script>

<style scoped lang="scss">
@media (max-width:1100px) {
    .detail-page {
        flex-direction: column;
        margin: auto;
    }
}

.detail-container {
    margin-top: 100px;
}

.detail-page {
    margin-bottom: 10%;

    .project-detail {
        width: 100%;
    }
}

//Problems Solution
/**
vmとvhの違いをわかってください！
*/
.header {
    margin-top: -206px;
    width: 100vw;
    height: min(206px);
    margin-left: 0;
    // background-image: url('../assets/project1banner.png');
    background-repeat: no-repeat;
    background-size: cover;
}

img {
    z-index: -1;
    width: 100%;
    height: 206px;
    object-fit: cover;
}

.header-cover {
    // margin-top: -210px;
    z-index: 100;
    height: 166px;
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
        margin-right: 100px;
    }
}
</style>