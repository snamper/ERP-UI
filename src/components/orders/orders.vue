<template>
    <div class="pg-orders">
        <div class="pg-order bg-color" v-for="item in list">
            <router-link  :to="{path: '/orderDetail?flag='+flag+'&id='+item.distributorOrderID}">
                <div class="pg-order_header line-border-color font_22 clearfix">
                    <span class="author primary-color">下单人：{{item.reqCustomerName}}（{{item.gradeName}}）</span>
                    <span class="ordernum title-color">订单号：{{item.sheet}}</span>
                </div>
            </router-link>
            <ul class="pg-order_list pg-goods">
                <li class="line-border-color clearfix" v-for="goods in item.listItem">
                    <router-link :to="{path: '/goodsdetail?goodsId=' + goods.goodsID}">
                        <div class="pg-goods_cover">
                            <pg-img :src="goods.imgUrl"></pg-img>
                        </div>
                        <div class="pg-goods_info text-color font_22">
                            <div class="title title-color font_26">{{goods.name}}（{{goods.customBC}}）</div>
                            <div class="time">时间：{{item.createTime}}</div>
                            <div class="size">{{goods.property1}} {{goods.property2}}</div>
                            <div class="amount">
                                <span>￥{{goods.price}}</span>
                                <span class="num">x{{goods.qty}}</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="pg-order_amount line-border-color title-color font_22 clearfix">
                <span class="team">{{currentTeam.groupName}}</span>
                <span class="price">合计：￥{{item.totalAmount}}（含运费：￥{{item.postFee}}）</span>
                <span class="qty">共{{item.totalQty}}件商品</span>
            </div>
            <div class="pg-order_footer clearfix">
                <span class="status title-color font_28">{{ (item.flag == 10 && type == 'sub') ? '向上级提交中' : status()}}</span>
                <pg-button class="border primary-border-color primary-color" @click="cancelOrder(item.distributorOrderID)" v-if="(flag == -1 || (flag == 1 && type == 'sub')) && item.flag != 10">取消</pg-button>
                <pg-upload type="light" text="上传付款凭证" folderType="51" :id="item.distributorOrderID" @upload-success="uploadSuccess" v-if="flag == -1 && type == 'my'"></pg-upload>
                <pg-button class="border title-border-color title-color bg-color" @click="getPayQRcode(item.distributorOrderID)" v-if="flag == -1 && type == 'my'">查看付款二维码</pg-button>
                <pg-button class="border primary-border-color primary-color" @click="deleteOrder(item.distributorOrderID)" v-if="flag == 95">删除</pg-button>
                <pg-button class="border primary-border-color primary-color" @click="receiveOrder(item.distributorOrderID)" v-if="flag == 100 && type == 'my'">确认收货</pg-button>
                <pg-button class="border title-border-color title-color bg-color" @click="confirmPayByDistributor(item.distributorOrderID)" v-if="flag == -1 && type == 'sub'">确定</pg-button>
                <pg-button class="border title-border-color title-color bg-color" @click="checkPayImg(item.payImgUrl)" v-if="flag == -1 && type == 'sub'">查看截图</pg-button>
                <!-- 下级订单 待发货 -->
                <pg-button class="border title-border-color title-color bg-color" @click="sendGoods(item.distributorOrderID)" v-if="flag == 1 && type == 'sub' && item.flag != 10">发货</pg-button>
                <pg-button class="border title-border-color title-color bg-color" @click="submitOrderToParent(item.distributorOrderID)" v-if="flag == 1 && type == 'sub' && item.flag != 10">提交上级</pg-button>

            </div>
        </div>
        <div class="selectall primary-bg-color white-color font_28" v-if="flag == -1 && type == 'sub' && merchantConfig['201062'] == 1" @click="multipleConfirmPayByDistributor">全选</div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-orders {
        .selectall {
            position: fixed;
            bottom: 60/@rate;
            right: 70/@rate;
            width: 96/@rate;
            height: 96/@rate;
            line-height: 96/@rate;
            text-align: center;
            overflow: hidden;
            border-radius: 100%;
            box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
        }
        .pg-order {
            display: block;
            margin-bottom: 20/@rate;
            &_header {
                padding: 30/@rate;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                .author {
                    float: left;
                }
                .ordernum {
                    float: right;
                }
            }
            &_list {

            }
            &_amount {
                padding: 30/@rate;
                border-bottom-style: solid;
                border-bottom-width: 1px;
                .team {
                    float: left;
                }
                .qty {
                    padding-right: 30/@rate;
                }
                .price, .qty {
                    float: right;
                }
            }
            &_footer {
                padding: 15/@rate 30/@rate;
                text-align: left;
                .status {
                    height: 70/@rate;
                    line-height: 70/@rate;
                }
                a, div {
                    float: right;
                    margin-left: 10/@rate;
                }
            }
        }
    }
</style>

<script type="text/babel">
	import orders from './orders'

	export default {
		...orders
	}
</script>