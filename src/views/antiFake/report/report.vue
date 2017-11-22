<template>
	<pg-aside>
        <pg-main top="0" base>
            <div class="bg-color warehouse font_22 text-color">
    	         <div v-if="detail.goodsID !=''&&detail.goodsID !=null" class="title font_28 title-color bg-color-base clearfix" v-html="detail.content">
    	         </div>
                 <div v-else class="content bg-color clearfix">
                    <pg-default-page 
                            icon="xiajidingdan" 
                            tip="暂无数据" 
                            >
                    </pg-default-page>
                    <!-- <div class="nodata text-color font_36" v-else>暂无数据!</div> -->
                 </div>      	
            </div>
            
        </pg-main>
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
    import report from './report'
    export default {
        ...report
    }
</script>     