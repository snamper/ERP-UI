<template>
    <pg-aside>
        <pg-main top="0" bottom="120" base>
            <div class="pg-list">
                <div class="pg-list_item font_22 title-color line-border-color bg-color">
                    订单号：{{details.sheet}}
                </div>
                <div class="pg-list_item font_28 title-color line-border-color bg-color">
                    <div class="info">
                        <div>下单人：{{details.reqCustomerName}}（{{details.gradeName}}）</div>
                        <div>姓名：{{details.linkMan}}</div>
                        <div>电话：{{details.mobile}}</div>
                        <div>收货地址：{{details.address}}</div>
                    </div>
                    <div class="team">{{details.groupName}}</div>
                </div>
                <div class="scancode line-border-color bg-color" v-if="type == 'send'">
                    <pg-button class="scan bg-color primary-color primary-border-color" @click="scanCode">扫码</pg-button>
                </div>
                <div class="goods pg-list_item line-border-color bg-color" v-for="item in details.listOrderItemList">
                    <div class="info">
                        <div class="title-color font_26">{{item.name}}</div>
                        <div class="text-color font_22">{{item.property1}} {{item.property2}}</div>
                    </div>
                    <div class="qty text-color font_22">
                        <span>x{{item.qty}}</span>
                        <span class="noscan" v-if="type == 'send'">没扫 {{item.qty - item.hasScanedNum}}</span>
                    </div>
                    <div class="code" v-if="type == 'send'">
                        <input class="code border-radius disable-border-color title-color font_28" v-model="item.code[index]" v-for="(code, index) in item.code" @blur="distributorScan(item.code[index])" placeholder="输入条形码">
                    </div>
                </div>
                <div class="pg-list_item line-border-color bg-color clearfix">
                    <div class="total">合计：{{details.totalPrice}}</div>
                </div>
                <div class="pg-list_item font_28 title-color line-border-color bg-color" v-if="flag == 100">
                    <div class="info">
                        <div>快递公司：{{details.deliveryName}}</div>
                        <div>快递单号：{{details.deliverySheetID}}</div>
                    </div>
                </div>
                <div class="pg-list_item delivery no-border font_28 title-color bg-color" v-if="type == 'send'">
                    快递公司：
                    <div class="pg-select border-radius disable-border-color">
                        <select class="title-color font_28" v-model="form.merchantDeliveryID">
                            <option value="">请选择</option>
                            <option v-for="item in deliveryList" :value="item.id">{{item.desc}}</option>
                        </select>
                    </div>
                    <br>
                    快递单号：<input class="sheet border-radius disable-border-color title-color font_28" type="text" v-model="form.deliverySheetID">
                    <pg-button class="scan bg-color primary-color primary-border-color" @click="deliverySheetScan">扫码</pg-button>
                </div>
            </div>
        </pg-main>
        <pg-button size="big" class="status primary-bg-color white-color no-radius" @click="sendGoodsFromDistributor" v-if="type == 'send'">发货</pg-button>
        <pg-button size="big" class="status bg-color primary-color no-radius" v-else>{{status()}}</pg-button>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .scan {
        border-style: solid;
        border-width: 1px;
    }
    .scancode {
        padding: 10/@rate;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        text-align: right;
    }
    .code {
        input {
            margin-top: 30/@rate;
            height: 70/@rate;
            width: 400/@rate;
            border-width: 1px;
            border-style: solid;
            padding: 0 20/@rate;
        }
    }
    .status {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .pg-list {
        &_item {
            position: relative;
            text-align: left;
            padding: 30/@rate;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            &.goods:first-child {
                margin-top: 20/@rate;
            }
            .info {
                div:not(:last-child) {
                    padding-bottom: 30/@rate;
                }
            }
            .team {
                position: absolute;
                top: 30/@rate;
                right: 30/@rate;
            }
            .qty {
                position: absolute;
                right: 30/@rate;
                top: 30/@rate;
                .noscan {
                    margin-left: 40/@rate;
                }
            }
            .total {
                float: right;
            }
            &.no-border {
                border-bottom-style: none;
                border-bottom-width: 0;
            }
            &.delivery {
                .pg-select {
                    width: 400/@rate;
                    margin-bottom: 20/@rate;
                }
                .sheet {
                    margin-left: 10/@rate;
                    height: 70/@rate;
                    width: 400/@rate;
                    border-width: 1px;
                    border-style: solid;
                    padding: 0 20/@rate;
                }
            }
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>