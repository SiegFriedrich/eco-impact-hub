<template>
    <div class="project-bill" @scroll="scrolling()">
        <div class="bill-item-container">
            <div class="bill-item">
                <span class="bill-item-name">Vintage</span>
                <el-select v-model="vintageValue" class="m-2 purchase-card-select-input" :placeholder="options[1].label">
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
                <div class="volume-input">
                    <el-input v-model="input3" :value="`${volumeValue} tCO2e`" class="input-with-select">
                        <template class="volume-input-prefix-suffix" #prepend>
                            <span>-</span>
                        </template>
                        <template class="volume-input-prefix-suffix" #append>
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
                <PurchaseCardButton @click="open3" :name="`Buy now`" blue :suffix="`$ 20,005.00`" />
                <PurchaseCardButton @click="open3" :name="`Add to cart`" basic />
                <PurchaseCardButton :name="`Create a bid`" basic @click="createOneBidVisible = true" />
                <PurchaseCardButton :name="`Offtake`" gray @click="offtakeVisible = true" />
            </div>

        </div>

        <el-dialog class="popupmodal bid-modal" v-model="createOneBidVisible" title="Creat a bid">
            <div class="bottom-line" />
            <el-form :model="form">
                <el-form-item>
                    <label for="form.offer">Your offer *</label>
                    <div class="modal-input-wrapper">
                        <el-input v-model="form.offer" placeholder="How much would you pay per ton?" clearable />
                        <span style="z-index: 10;">USD/tCO2e</span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <label for="form.credits">Volume of credits *</label>
                    <div class="modal-input-wrapper offtake">
                        <el-input v-model="form.credits" placeholder="How many times would you like to purchase?"
                            clearable />
                        <span style="z-index: 10;">tCO2e</span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <label>Vintage *</label>
                    <el-select v-model="form.region" placeholder="Which vintage would you like to purchase?">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <label>Offer valid until after *</label>
                    <el-select v-model="form.region" placeholder="Until when is your offer valid?">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <label>Message to the developer (optional)</label>
                    <el-input v-model="form.desc" type="textarea" rows="5" placeholder="Your message" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button class="bid-btn" type="primary" round @click="creatBid">Create
                        bid</el-button>
                </span>
                <div class="footer-info">
                    <span>Total</span>
                    <span>$ 0.00</span>
                </div>
            </template>
        </el-dialog>

        <el-dialog class="popupmodal offtake-modal" v-model="offtakeVisible" title="Offtake">
            <div class="bottom-line" />
            <el-form :model="form">
                <el-form-item>
                    <label for="form.offer">Your offer *</label>
                    <div class="modal-input-wrapper">
                        <el-input v-model="form.offer" placeholder="How much would you pay per ton?" clearable />
                        <span style="z-index: 10;">USD/tCO2e</span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <label for="form.credits">Volume of credits *</label>
                    <div class="modal-input-wrapper offtake">
                        <el-input v-model="form.credits" placeholder="How many times would you like to purchase?"
                            clearable />
                        <span style="z-index: 10;">tCO2e</span>
                    </div>
                </el-form-item>
                <el-form-item>
                    <label>Vintage (Optional)</label>
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
                </el-form-item>
                <el-form-item>
                    <label>Offer valid until after *</label>
                    <el-select v-model="form.region" placeholder="Until when is your offer valid?">
                        <el-option label="Zone No.1" value="shanghai" />
                        <el-option label="Zone No.2" value="beijing" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <label>Message to the developer (optional)</label>
                    <el-input v-model="form.desc" type="textarea" rows="5" placeholder="Your message" />
                </el-form-item>
            </el-form>
            <template #footer>
                <span class="dialog-footer">
                    <el-button class="offtake-btn" @click="creatOffTake" type="primary" round>Create proposal</el-button>
                </span>
                <div class="footer-info">
                    <span>Total</span>
                    <span>$ 0.00</span>
                </div>
            </template>
        </el-dialog>

        <el-dialog class="msg-box" v-model="centerBidVisible" width="30%" center>
            <div class="center-dialog">
                <img src="../assets/bid.png" />
            </div>
            <div class="center-dialog">
                <span class="msg-box-info"> Bid created </span>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    Please check “Bids & Offers” under “My Hub”.
                </span>
            </template>
        </el-dialog>

        <el-dialog class="msg-box" v-model="centerOfftakeVisible" width="30%" center>
            <div class="center-dialog">
                <img src="../assets/offtake.png" />
            </div>
            <div class="center-dialog">
                <div class="msg-box-offtake"> Offtake proposal created </div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    Please check “Bids & Offers” under “My Hub”.
                </span>
            </template>
        </el-dialog>

    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import PurchaseCardButton from './PurchaseCardButton.vue';
import { ElNotification } from 'element-plus';

const createOneBidVisible = ref(false)
const offtakeVisible = ref(false)
const centerBidVisible = ref(false)
const centerOfftakeVisible = ref(false)

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
const open3 = () => {
    ElNotification({
        title: 'Info',
        message: 'The function of this button has not been written',
        type: 'info',
    })
}
const creatBid = () => {
    createOneBidVisible.value = false;
    //Promise => transfer data to backend!
    centerBidVisible.value = true;

}

const creatOffTake = () => {
    offtakeVisible.value = false;
    //Promise => transfer data to backend!
    centerOfftakeVisible.value = true;
}

const scrolling = () => {
    console.log(window.scrollY)
};
onMounted(() => {
    scrolling();
});

//Problems Solutions 
/**
 * 1, you need to learn about the position of CSS
 * 2, how to scroll to fix the element
 */


const input3 = ref('')
const vintageValue = ref('')
const volumeValue = ref('2,000')
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
    position: sticky;
    top: min(101px);
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 52px 52px 52px;
    margin-right: 52px;

    .bill-item-container {
        /* width: 400px; */
        height: min(550px);
        min-width: 300px;
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

            .volume-input {
                width: 60%;

                .volume-input-prefix-suffix {
                    padding: 0px 3px 0 3px;
                }
            }

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

.bid-btn {
    background-color: #004D84;
    margin-right: 19px;
}

.offtake-btn {
    background-color: #1D91A2;
    margin-right: 19px;
}

.footer-info {
    margin: 34px 19px 10px 19px;
    display: flex;
    justify-content: space-between;
    color: #525252;
    font-size: 12px;
    font-weight: 700;
}

.modal-input-wrapper {
    display: flex;

    span {
        color: #525252;
    }

    .el-input__wrapper {
        margin-right: -84px;
    }

}

.vintage-select {
    display: flex;

    el-select {
        margin: 0 10px 0 10px;
    }

    span {
        margin-right: 10px;
    }
}

.center-dialog {

    display: flex;
    justify-content: center;

    img {
        /* max-width: 200px; */
        margin-left: 50%;
    }


}
</style>