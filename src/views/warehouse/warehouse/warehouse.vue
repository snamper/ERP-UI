<template>
	<pg-aside>
        <!-- 云仓首页 -->
        <pg-main top="0" base>
            <div class="bg-color warehouse font_22 text-color">
                <pg-search @search="search" placeholder=""></pg-search>
    	         <div class="title font_28 title-color bg-color-base clearfix">
                    <div class="left">
                        <span>我的仓存</span>
                        <span class="text-color">|</span>
                        <span v-if='currentTeam'>{{currentTeam.groupName}}</span>
                        <!-- <span class="iconfont icon-icon_qiehuan primary-color"></span> -->
                    </div>
                    <div class="right">
                        <router-link class="order title-color font_28 border-radius" :to="{path: '/goodslist'}">订货</router-link>
                        <!-- <span class="warning-bg-color examine_count font_20">1</span> -->
                    </div>
    	         </div>
                 <div class="content bg-color clearfix">
                    <ul v-if="noData">
                        <li v-for="item in warehouseList" class="clearfix line-border-color" >
                             <div class="left">
                                 <a href="javascript:void(0)">
                                    <pg-img :src="item.imageUrl" alt=""  v-if="item.imageUrl"></pg-img>
                                 </a>
                             </div>
                             <div class="right clearfix">
                                 <div class="title font_28 title-color">
                                     <!-- <router-link class="title-color font_28" :to="{path: '/warewater'}">{{item.goodsName}}({{item.customBC}}）</router-link> -->
                                     <a href="javascript:void(0)" @click="gotoWareWater(item)" class="title-color font_28">
                                        {{item.goodsName}}
                                        <span v-if="item.customBC">({{item.customBC}})</span>
                                      </a>
                                 </div>
                                 <div class="band clearfix">
                                     <div class="name">{{item.brandName }}</div>
                                     <div class="wareNum">库存：{{item.qty}}</div>
                                 </div>
                                 <div class="status clearfix">
                                <!--  如果可用库存>=0 缺货就是0 如果可用库存<0  缺货就是可用库存*-1 -->
                                     <div class="color">{{item.colorName}} <span>{{item.sizeName}}</span></div>
                                     <div class="statusNum">
                                        缺货：{{item.outOfStockQty ? item.outOfStockQty : 0}}
                                     	 <i class="span1 iconfont icon-icon_tishi warning-color font_22" v-if="item.outOfStockQty > 0"></i>
                                     </div>
<!--                                      <div class="statusNum" v-else>
                                        缺货：0
                                     </div> -->
                                     <div class="caozuo clearfix">
                                         <span class="span1 iconfont icon-icon_qiehuan primary-color" v-if="item.hasPack == 1" @click="showConfirm(item, 1)"></span>
                                         <span class="span2 iconfont icon-icon_jianshaoanniu text-color" @click="showConfirm(item, 2)"></span>
                                     </div>
                                 </div>
                             </div>
                        </li>
                    </ul>
                    <pg-default-page 
                            icon="xiajidingdan" 
                            tip="暂无数据" 
                            v-else>
                    </pg-default-page>
                    <!-- <div class="nodata text-color font_36" v-else>暂无数据!</div> -->
                 </div>      	
            </div>
            
        </pg-main>
        <!-- 分页 -->
        <!-- <pg-main infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore"> -->
        <pg-confirm class="open_confirm" ref="confirm" :confirm="confirm">
        	<div class="content">
                <span v-if="currentTitleFlag" class="title">转换数量</span>
        		<span v-else class="title">扣减库存</span>
        		<pg-input-number @change="changeInputNumber"></pg-input-number>
        	</div>
        </pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
// .nodata {
//     height: 500/@rate;
//     line-height: 500/@rate;
//     //弹出框样式
// }
.open_confirm {
	.content {
		padding: 30/@rate 0;
    	.title{
    		display: inline-block;
    		width: 140/@rate;
    		text-align: left;
    	}
    }
}
.warehouse {
    .title {
        padding: 25/@rate  40/@rate 25/@rate 40/@rate;
        .left {
            float: left;
            height: 70/@rate;
            span {
                margin-right: 5/@rate;
                line-height: 70/@rate;
            }
        }
        .right {
            float: right;
            .order {
                width: 120/@rate;
                height: 70/@rate;
                line-height: 70/@rate;
                display: inline-block;
                border-width: 1px;
                border-style: solid;
            }
        }
    }
    .content {
       ul {
        li {
            border-bottom-style: solid;
            border-bottom-width: 1/@rate;
            padding: 30/@rate 40/@rate;
            //padding: 0 40/@rate 40/@rate 40/@rate;
            .left {
                float: left;
                width: 160/@rate;
                height:  160/@rate;
                overflow: hidden;
                a {
                    width: 100%;
                    img {
                        width: 100%;
                    }
                }
            }
            .right {
                width: 510/@rate;
                float: left;
                padding-left: 20/@rate;
                .title {
                    padding: 0;
                    padding-bottom: 20/@rate;
                    text-align: left;
                }
                .band {
                    padding-bottom: 20/@rate;
                    .name {
                        float: left;
                    }
                    .wareNum {
                        //width: 150/@rate;
                        text-align: left;
                        float: right;
                    }
                }
                .status {
                    position: relative;
                    .color {
                        float: left;
                    }
                    .statusNum {
                        text-align: left;
                        float: right;
                        //width: 150/@rate;
                        position: relative;
                        .span1 {
                        	position: absolute;
                        	bottom:0;
                        	left: -40/@rate;
                        	z-index: 1;
                        }

                    }
                    .caozuo {
                        width: 120/@rate;
                        height: 30/@rate;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        margin-left: -100/@rate;
                        margin-top: -15/@rate;
                        .span1 {
                        	float: left;
                        }
                        .span2 {
                        	float: right;
                        }
                    }
                }
            }
        }
       }
    }

}
</style>

<script type="text/babel">
    import warehouse from './warehouse'
    export default {
        ...warehouse
    }
</script>     