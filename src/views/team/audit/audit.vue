<template>
    <pg-main top="0" base>
        <div class="bg-color myDiv">         
	         <div class="top font_28">
		         <div class="top-item clearfix ">
		         	<span>选择团队</span>
                    <div class="team-name">
                        {{currentTeam.groupName}}
                    </div>                    
		         </div>
		         <div class="top-item clearfix">
		         	<span>选择等级</span>
                    <div class="select-div pg-select border-radius disable-border-color">
                        <select class="title-color font_28" v-model="query.upCustomerGradeID" @change="updateTeam(0)">
                            <option value="">请选择等级</option>
                            <option v-for="item in customerGradeList" :value="item.id">{{item.desc}}</option>
                        </select>
                    </div> 
		         </div>
		         <div class="top-item clearfix">
		            <span class="h50">新上级信息</span>
		            <p class="text-p disable-color">
                        <span>姓名：
                            <i v-if="upCustomerInfoObject.name">{{ upCustomerInfoObject.name }}</i>
                            <i v-else>暂无</i>                        
                        </span>
                        <span>微信号：
                            <i v-if="upCustomerInfoObject.wechat">{{ upCustomerInfoObject.wechat }}</i>
                            <i v-else>暂无</i>                                                 
                        </span>
                        <span>手机号：
                            <i v-if="upCustomerInfoObject.mobile">{{ upCustomerInfoObject.mobile }}</i>
                            <i v-else>暂无</i>                                                  
                        </span>
                    </p>
		         </div>
		         <div class="top-item clearfix">
		            <span>新上级二维码</span>
		            <pg-img v-if="upCustomerInfoObject.qrCodeIm" class="" :src="upCustomerInfoObject.qrCodeImg" alt=""></pg-img>
                    <p class="text-p p30 disable-color" style="text-align:left" v-else>暂无</p>
		         </div>	
		         <div class="top-item clearfix">
		            <span>打款凭证</span>
                    <pg-upload class="text-btn" type="primary" @upload-success="uploadSuccess" text="上传"></pg-upload>
                    <div class="text-btn" v-if="query.fileUrl">上传成功</div>	
                    <!-- <button type="button" class="text-btn pg-btn white-color primary-bg-color font_28">上传</button> -->
		         </div> 
		         <div class="top-item clearfix">
		            <span>备注</span>
		            <div class="text-div border-radius bg-color disable-border-color">
			            <textarea name="" v-model="query.note" placeholder="多行输入">
			            	
			            </textarea>		            	
		            </div>
		         </div>		                 
		        <div class="top-btn">
		                <button type="button" class="pg-btn white-color primary-bg-color font_28" @click="addAudit">提交</button>		
		        </div>
		        <div class="top-btn">
                    <router-link class="font_28 bg-color title-color" :to="{path: '/recordTeam'}">
                    升级记录
                    </router-link>                    
		        </div>        	
	         </div>        	
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .myDiv {
    	width: 100%;
    	height: 100%;
    }
    .top {
    	padding-top: 30/@rate;
    	width: 100%;
    	.top-item {
    		padding-right: 125/@rate;
    		margin-bottom: 20/@rate;
            .team-name {
                float: left;
                width: 400/@rate;
                height: 70/@rate;
                line-height: 70/@rate;
                text-align: left;
                 border-width: 0px; 
                 border-style: none;
                 text-indent: 15/@rate;
            }            
    		.text-btn {
    			float: left;
    			width: 170/@rate;
    			height: 70/@rate;
                line-height: 70/@rate;
                text-align: left;
                a {
                    text-align: center;
                }
    		}
    		.text-p {
    			float: left;
                width: 400/@rate;
                span {
                    width: 100%;
                    text-align: left;
                }
    		}
    		.text-div {
    			float: left;
    			width: 400/@rate;
    			height: 130/@rate;
			    border-width: 1px;
			    border-style: solid;
			    overflow: auto;
			    textarea {
			    	padding: 15/@rate 15/@rate 15/@rate 15/@rate;
                    width: 100%;
                    height: 90%;
			    	outline: none;
			    }
    		}
    		img {
    			float: left;
    			width: 100/@rate;
    			height: 100/@rate;
    		}
    		span {
    			width: 225/@rate;
    			display: inline-block;
    			float: left;
    			padding-top: 22/@rate;
    			padding-right: 30/@rate;
    			text-align: right;
    		}
    		.select-div {
    			width: 400/@rate;
    			height: 70/@rate;
	            border-width: 1px;
	            border-style: solid; 
    		}
            .p30 {
                padding-top:22/@rate;
                padding-right:30/@rate;
            }
    	}
    	.top-btn {
    		padding-top: 50/@rate;
            text-align: center;

    		button {
    			width: 300/@rate;
    			height: 70/@rate;
    			outline: none;
    			border: none;
                border-radius: 10/@rate;
    		}
            a {
                width: 300/@rate;
                display: inline-block;
                height: 70/@rate;
                line-height: 70/@rate;
                border-radius: 10/@rate; 
                border: 1px solid #000;              
            }
    	}
    }
</style>

<script type="text/babel">
    import audit from './audit'
    export default {
        ...audit
    }
</script>