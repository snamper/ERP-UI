<template>
    <pg-main top="0">
    	<div class="personinformation font_28 title-color bg-color">
    		<form class="detail">
    			<div class="item clearfix disable-border-color">
    				<div class="left">姓名</div>
    				<div class="right text-color">{{detailForm.name}}</div>
    			</div>
    			<div class="item clearfix disable-border-color">
    				<div class="left">身份证号</div>
    				<div class="right text-color">{{detailForm.certNo}}</div>
    			</div>
    			<div class="item clearfix disable-border-color">
    				<div class="left">手机号</div>
    				<div class="right text-color">
    					<input type="text" class="title-color disable-border-color border-radius" placeholder="请输入手机号" v-model="detailForm.mobile">
    				</div>
    			</div>
    			<div class="item clearfix disable-border-color">
    				<div class="left">微信号</div>
    				<div class="right text-color">
    					<input type="text" class="title-color disable-border-color border-radius" placeholder="请输入微信号" v-model="detailForm.wechat">
    				</div>
    			</div>
    			<div class="item clearfix disable-border-color">
    				<div class="left erweima">收款二维码</div>
    				<div class="right text-color clearfix">
                        <a href="javascript:void(0)">
                          <pg-img :src="detailForm.qrCodeImg" v-if="detailForm.qrCodeImg"></pg-img>
                          <img src="../../../assets/images/warehouse-goods.jpg" v-else alt="">
                        </a>
                        <div class="content-bottom">
                              <!-- <button class="content-btn primary-bg-color font_28 border-radius white-color" type="button" >更换二维码</button> -->
                              <!-- folderType="21" -->
                            <pg-upload class="text-btn" type="primary" folderType="21" @upload-success="uploadSuccess" text="更换二维码"></pg-upload> 
                        </div>
    				</div>
    			</div>
<!--     			<div class="item note clearfix disable-border-color ">
    				<div class="left">备注</div>
    				<div class="right text-color border-radius bg-color ">
    					<textarea cols="30" rows="3" placeholder="备注" class="disable-border-color" v-model="customerInfo.note"></textarea>
    				</div>
    			</div> -->
    		</form>
             <div class="bottom">
                  <button class="primary-bg-color font_28 border-radius white-color" @click='save' type="button">保存</button>
            </div>   		
    	</div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .personinformation {
    	.detail {
    		.item {
    			padding: 25/@rate 30/@rate;
    			border-bottom-width:1px;
    			border-bottom-style: solid;
    			.left {
    				float: left;
    				width: 200/@rate;
    				height: 60/@rate;
    				line-height: 60/@rate;
    				text-align: left;
    			}
    			.erweima {
    				height:100/@rate;
    				line-height: 100/@rate;
    			}
   				.right {
   					float: left;
   					line-height: 60/@rate;
   					input {
   						width: 350/@rate;
   						height: 60/@rate;
   						line-height: 60/@rate;
   						border-width:1px;
   						border-style: solid;
   						text-indent: 25/@rate;
   					}
                    a {
                    	float: left;
                        display: inline-block;
                        width: 100/@rate;
                        height:  100/@rate;
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                    }
                    .content-bottom {
                        float: left;
                        margin-left: 20/@rate;
                        margin-top: 30/@rate;
                        button {
                            outline: none;
                            border: none;
                            width: 180/@rate;
                            height: 70/@rate;
                        }
                    }
   				}
    		}
    	}
    }
    .note {
    	.right {
    		textarea {
    			text-indent: 5/@rate;
    			border-style:solid;
    			border-width:1px;
    		}
    	}
    }
   .bottom {
       margin-top: 90/@rate;
       button {
           outline: none;
           border: none;
           width: 300/@rate;
           height: 70/@rate;
       }
   }

</style>

<script type="text/babel">
    import userInfo from './userInfo'
    export default {
        ...userInfo
    }
</script>