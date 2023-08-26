<template>
    <div class="project-bill">
        <div class="bill-item-container">
            <div class="bill-item">
                <span class="bill-item-name">Vintage</span>
                <el-select v-model="value" class="m-2 purchase-card-select-input" :placeholder="options[1].label"
                    size="small">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </div>
            <div class="bill-item">
                <span class="bill-item-name">Price</span>
                <div>
                    <span class="weight-700">$10.00</span>
                    <span>/tCO2e</span>
                </div>

            </div>
            <div class="bill-item">
                <span class="bill-item-name">Volume</span>
                <div class="mt-4">
                    <el-input v-model="input3" :value="value" class="input-with-select">
                        <template #prepend>
                            <span>-</span>
                        </template>
                        <template #append>
                            <span>+</span>
                        </template>
                    </el-input>
                </div>
            </div>
            <div class="bill-item-info">
                <div class="item-info">
                    <div>Available stock</div>
                    <div>36,000</div>
                </div>

                <div class="item-info">
                    <div>Minimum purchase</div>
                    <div>500</div>
                </div>
            </div>
            <div class="bill-item-info">
                <div class="item-info">
                    <div>Transaction fee</div>
                    <div>$ 5.00</div>
                </div>

                <div class="item-info">
                    <div>VAT</div>
                    <div>$ 0.00</div>
                </div>
                <div class="item-info">
                    <div>Total</div>
                    <div>$ 20,005.00</div>
                </div>
            </div>
            <div class="button-area">
                <PurchaseCardButton :name="`Buy now`" />
                <PurchaseCardButton :name="`Add to cart`" />
                <PurchaseCardButton :name="`Create a bid`" />
                <PurchaseCardButton :name="`Offtake`" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PurchaseCardButton from './PurchaseCardButton.vue';

const input3 = ref('')

const value = ref('')
const options = [
    {
        value: '2018',
        label: '2018',
    },
    {
        value: '2019',
        label: '2019',
    },
    {
        value: '2019',
        label: '2019',
    },
    {
        value: '2020',
        label: '2020',
    },
    {
        value: '2021',
        label: '2021',
    },
    {
        value: '2022',
        label: '2022',
    },
]
</script>

<style scoped>
.project-bill {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 52px 52px 52px;

    .bill-item-container {
        width: 400px;
        height: 65vh;
        margin-top: 19px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        padding: 20px 15% 20px 15%;

        .bill-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 10%;
            box-shadow: 0px 1px #F4F4F4;
            color: #525252;

            .bill-item-name {
                font-size: 1.2rem;

            }

            .purchase-card-select-input {
                margin-top: 10px;
                width: 30%;
            }
        }

        .bill-item-info {
            padding: 20px 0 20px 0;
            align-items: center;
            box-shadow: 0px 1px #F4F4F4;

            .item-info {
                display: flex;
                justify-content: space-between;
                margin-bottom: 6px;
                color: #525252;
            }
        }

        .weight-700 {
            font-weight: 700;
        }

        /* 
        .button-area {
            padding: 10px;
            margin-bottom: 10px;

        } */

        .input-with-select .el-input-group__prepend {
            background-color: var(--el-fill-color-blank);
        }


    }
}
</style>