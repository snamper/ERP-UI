<template>
    <pg-main top="0" base>
        <div class="bg-color myDiv">
	         <div class="top font_28">       
		         <div class="top-item clearfix">
		         	<input class="border-radius bg-color disable-border-color" v-model="key" placeholder="输入代理商姓名或编号或微信号搜索"  name="">
		         </div>
		        <div class="top-btn">
                    <a @click="query" class="pg-btn white-color primary-bg-color font_28" href="javascript:;">
                    	立即查询
                    </a>                           		
		        </div>
				<div class="angecy-detail" v-if="contentShow" >
					<ul class="detail-box clearfix text-color font_30">
						<li>
							<span>代理商 :</span>
							<span>{{content.name}}</span>
						</li>
						<li>
							<span>代理编码 :</span>
							<span>{{content.code}}</span>
						</li>
						<li>
							<span>代理级别 :</span>
							<span>{{content.gradeName}}</span>
						</li>
					</ul>
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
    		// padding-right: 125/@rate;
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
    			text-indent: 15/@rate;
    			width: 80%;
    			height: 70/@rate;
	            border-width: 1px;
	            border-style: solid;
                display: block;
                margin: 0 auto;   	
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
		.angecy-detail{
			margin-top: 50/@rate;
			
		}
    }
</style>

<script type="text/babel">
    import queryAgency from './queryAgency'
    export default {
        ...queryAgency
    }
</script>