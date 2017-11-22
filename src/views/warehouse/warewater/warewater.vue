<template>
    <!-- 库存流水 -->
    <pg-main top="0" base>
        <div class="bg-color warewater font_22 text-color">
	         <div class="title font_28 title-color bg-color-base clearfix ">
                <div class="title_name">{{inventoryForm.goodsName}}({{inventoryForm.customBC}}）</div>
                <div class="title_detail">出入库明细</div>
             </div>      	
            <div class="content bg-color font_22 text-color"   v-if="noData">
                <div class="lis disable-border-color" v-for="item in inventoryList" v-if="inventoryList.length">
                    <div class="time li">{{item.sheetTime}}</div>
                    <div class="name li title-color">{{item.sheetTypeDesc}}</div> 
                    <div class="order_num li">订单号：{{item.sheet}}</div>
                    <div class="status li success-color" v-if="item.directFlag == -1">出库 <span>{{item.qty}}</span></div>
                    <div class="status li warning-color" v-if="item.directFlag == 1">入库 <span>{{item.qty}}</span></div>
                    <div class="total li">结存 <span>{{item.closeQty}}</span></div>             
                </div>
<!--                 出库
<div class="lis disable-border-color">
                     <div class="time li">2017-03-12  23:22:561  </div>
                    <div class="name li title-color">订单出库</div>
                    <div class="order_num li">订单号：20171052425896</div>
                    <div class="status li success-color">出库 <span>10</span></div>
                    <div class="total li">结存 <span>xx1</span></div>               
</div>
入库
<div class="lis disable-border-color">
                     <div class="time li">2017-03-12  23:22:561  </div>
                    <div class="name li title-color">订单入库</div>
                    <div class="order_num li">订单号：20171052425896</div>
                    <div class="status li warning-color">入库 <span>10</span></div>
                    <div class="total li">结存 <span>xx1</span></div>  
                </div>
手动出库
<div class="lis disable-border-color">
                     <div class="time li">2017-03-12  23:22:561  </div>
                    <div class="name li title-color">手动出库</div>
                    <div class="order_num li">订单号：20171052425896</div>
                    <div class="status li success-color">出库 <span>10</span></div>
                    <div class="total li">结存 <span>xx1</span></div>               
</div> -->
            </div>
            <pg-default-page 
                    icon="xiajidingdan" 
                    tip="暂无数据" 
                    v-else>
            </pg-default-page>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

.warewater {
    //padding: 0 30/@rate;
    .title {
    	text-align: left;
    	padding: 25/@rate 30/@rate 0 30/@rate;

        .title_name {
            padding-bottom: 25/@rate;
            text-align: left;
        }
        .title_detail {
            text-align: left;
            padding-bottom: 25/@rate;
        }
    }
    .content {
    	.lis {
    		border-top-width: 10/@rate;
    	    border-top-style: solid;
    	    text-align: left;
    	    padding:30/@rate 0;
			.li {
                padding:20/@rate 0 20/@rate 30/@rate;
                span {
                	margin-left: 40/@rate;
                }
			}
    	}
    }

}
</style>

<script type="text/babel">
    import warewater from './warewater'
    export default {
        ...warewater
    }
</script>     