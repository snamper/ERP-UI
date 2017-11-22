<template>
    <pg-aside>
        <pg-main 
            top="0" 
            base 
            infinite-scroll-disabled="busy" 
            infinite-scroll-distance="50" 
            v-infinite-scroll="getDistributorListPage">
            <pg-search 
                @search="search">        
            </pg-search>
            <pg-tabs 
                :tabs="tabs" 
                :selected="query.condition.orderStatus" 
                @tab="tab">
            </pg-tabs>
            <pg-orders 
                type="sub"
                :flag="query.condition.orderStatus" 
                :list="orderList" 
                @cancelOrder="cancelOrder"
                @confirmPayByDistributor="confirmPayByDistributor"
                @multipleConfirmPayByDistributor="multipleConfirmPayByDistributor"
                @checkPayImg="checkPayImg"
                @deleteOrder="deleteOrder"
                @submitOrderToParent="submitOrderToParent"
                v-if="noData">
            </pg-orders>
            <pg-default-page 
                    icon="xiajidingdan" 
                    tip="暂无数据" 
                    v-else>
                </pg-default-page>
        </pg-main>
        <pg-confirm ref="confirm" :confirm="confirm">
            <pg-img style="width: 100%;" :src="qrCode" v-if="showQRcode"></pg-img>
            <div style="text-align: center" v-if="showToParent">
                <pg-button class="border primary-bg-color white-color" @click="getPayQRcode">查看付款二维码</pg-button>
                <pg-upload type="primary" text="上传付款凭证" folderType="51" :id="currentOrderId" @upload-success="uploadPayImg"></pg-upload>
            </div>
        </pg-confirm>
    </pg-aside>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>