<template>
    <pg-main top="0" base>
        <div class="bg-color myDiv">
	         <div class="top font_28">
		         <div class="top-item clearfix ">
		         	<span class="item-span">选择团队</span>
                    <div class="team-name">
                        {{currentTeam.groupName}}
                    </div>                   
		         </div>
		         <div class="top-item clearfix">
		         	<span class="item-span">选择等级</span>
                    <div class="pg-select border-radius disable-border-color">
                        <select class="title-color font_28" v-model="query.customerGradeID">
                            <option value="">请选择等级</option>
                            <option v-for="item in customerGradeList" :value="item.customerGradeID">{{item.name}}</option>
                        </select>
                    </div> 
		         </div>
		         <div class="top-item clearfix">
                    <span class="item-span"></span>
			         <p class="clearfix font_22 disable-color">
			         	<i class="icon clearfix">
                            <span class="left">上级：</span>
                            <span class="left" v-if="upCustomerInfo.name">{{ upCustomerInfo.name }}</span>
                            <span class="left" v-else>暂无</span>
                            
                        </i>
			         	<i class="clearfix">
                            <span class="left">微信号：</span>
                            <span class="left" v-if="upCustomerInfo.wechat">{{ upCustomerInfo.wechat }}</span>
                            <span  class="left" v-else>暂无</span>
                            
                        </i>	         	
			         </p>

		         </div>	         
		         <div class="top-item clearfix">
		         	<span class="item-span">二维码时效</span>
		         	<input class="border-radius bg-color disable-border-color" v-model="query.hour" type="number" name="">
		         	<em class="font_22 disable-color ">小时</em>
		         </div>
		        <div class="top-btn">
                    <a @click="createCode" class="pg-btn white-color primary-bg-color font_28" href="javascript:;">
                    生成二维码
                    </a>                           		
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
    		p {
                float: left;
                width: 400/@rate;
    			text-align: center;
                i {
                    text-align: left;
                    display: block;
                    width: 100%;
                    .left {
                        float: left;
                    }
                }
                .icon {
                    margin-bottom: 20/@rate;
                }
    		}
    		.item-span {
    			width: 225/@rate;
    			display: inline-block;
    			float: left;
    			padding-top: 22/@rate;
    			padding-right: 30/@rate;
    			text-align: right;
    		}
    		div {
    			width: 400/@rate;
    			height: 70/@rate;
	            border-width: 1px;
	            border-style: solid; 
    		}
    		input {
    			float: left;
    			text-indent: 15/@rate;
    			width: 200/@rate;
    			height: 70/@rate;
	            border-width: 1px;
	            border-style: solid;    	
    		}
    		em {
    			float: left;height: 70/@rate;
    			line-height: 70/@rate;
    			text-indent: 15/@rate;
    			font-style: normal;
    		}
    	}
    	.top-btn {
    		padding-top: 50/@rate;
    		a {
    			width: 300/@rate;
    			height: 70/@rate;
                line-height: 70/@rate;
                text-decoration: none;
    		}
    	}
    }
</style>

<script type="text/babel">
    import promotion from './promotion'
    export default {
        ...promotion
    }
</script>