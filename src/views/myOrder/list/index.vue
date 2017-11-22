<template>
    <pg-aside>
        <pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="50" v-infinite-scroll="getDistributorListPage">
            <pg-search @search="search"></pg-search>
            <pg-tabs 
                :tabs="tabs" 
                :selected="query.condition.orderStatus" 
                @tab="tab">
            </pg-tabs>
            <pg-orders 
                type="my"
                :flag="query.condition.orderStatus" 
                :list="orderList" 
                @cancelOrder="cancelOrder" 
                @getPayQRcode="getPayQRcode" 
                @uploadPayImg="uploadPayImg"
                @deleteOrder="deleteOrder" 
                @receiveOrder="receiveOrder"
                v-if="noData">
            </pg-orders>
            <pg-default-page 
                icon="gouwuchekong" 
                tip="目前没有商品，快去购买" 
                buttonPath="/goodslist" 
                buttonText="去订货" 
                v-else>
            </pg-default-page>
        </pg-main>
        <pg-confirm ref="confirm" :confirm="confirm">
            <pg-img style="width: 100%;" :src="payQRcode" v-if="showPayQRcode"></pg-img>
        </pg-confirm>
    </pg-aside>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>