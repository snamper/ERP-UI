<template>
	<pg-aside>
		<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="pageSize" v-infinite-scroll="loadmore">
			<div class="top ">
				<div class="banner_left ">
					<a class="recharge_btn white-color font_28 border-radius primary-bg-color disable-border-color" href="javascript:;">余额</a>	
				    <router-link class="examine_btn title-color font_28 border-radius " :to="{path: '/commission'}">佣金</router-link>			
				</div>
				<div class="banner_right">
				</div>
			</div>

			<div class="center bg-color  clearfix">
				<div class="center-left">
					<p class="center-text font_36">￥{{financeObj.balanceMoney}}</p>
					<p class="center-btn">
					    <router-link class="recharge_btn title-color font_28 border-radius" :to="{path: '/myRecharge', query: {group: currentTeam}}">充值</router-link>
						<router-link class="examine_btn title-color font_28 border-radius" :to="{path: '/rechargeCheck', query: {group: currentTeam}}">审核</router-link>
						<span class="warning-bg-color examine_count font_20">{{financeObj.needAuditTotal}}</span>					
					</p>
				</div>
				<div class="center-right font_28">
				    <p class="center-text">
				        <i @click="checkValue" class="iconfont icon-wenhao poab"></i>
				    	<span class="val">可下单余额</span>
				    	<span class="num">￥{{financeObj.orderBalanceMoney}}</span>
				    </p>
					<p class="center-text">
						<span class="val">可审余额</span>
						<span class="num">￥{{financeObj.canAuditMoney}}</span>
					</p>			
				</div>
				<div class="center-footer clearfix">
					<div class="center-left font_30">
						收支记录
					</div>
	                <div class="center-select pg-select border-radius disable-border-color">
	                    <select class="title-color font_28" v-model="month">
	                        <option v-for="item in months" :value="item.value">{{ item.text }}</option>
	                    </select>
	                </div>	
	                <div class="center-right font_28">
	                		<span>支￥{{expenditure}}</span>
	                		<span>收￥{{income}}</span>		
	                </div>			
				</div>
			</div>
			<div class="list bg-color" v-for="item in balanceList">
			    <ul class="list-ul clearfix font_24">
			    	<li class="list-left">
			    	    <p>
			    	    	<span class="text font_24">类型：</span>
			    	    	<span class="text font_24">{{item.sheetTypeDesc}}</span>
			    	    </p>
			    	    <p>
			    	    	<span class="text font_24">金额：</span>
			    	    	<span class="text font_24">+{{item.accValue}}</span>
			    	    </p>
			    	    <p>
			    	    	<span class="text font_24">流水号：{{item.sheet}}</span>
			    	    </p>

			    	</li>
			    	<li class="list-right">
			    	    <p class="font_24">{{item.sheetTime}}</p>
			    	    <p class="font_28 bom0">￥{{item.closeAccValue}}</p>
			    	</li>
			    </ul>
				
			</div>
			<div v-if="balanceList.length == 0">
                    <pg-default-page  icon="wodeqianbao"  tip="暂无数据" >
                    </pg-default-page>  
			</div>

		</pg-main>
	    <pg-confirm :confirm="confirm" ref="confirm">
	    	
	    </pg-confirm>
	</pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';

	.top {
		width: 100%;
		font-size: 0;
		padding: 26/@rate 0 26/@rate 30/@rate;
		background-color: #fff;
		text-align: left;
		.banner_left {
			display: inline-block;
			vertical-align: middle;
			width: 40%;
			height: 70/@rate;
			text-align: left;
			padding-right: 30/@rate;
			position: relative;
			.examine_btn {
				display: inline-block;
				width: 120/@rate;
				height: 70/@rate;
				text-align: center;
				line-height: 70/@rate;
				border-style: solid;
				border-width: 1px;
			}
			.recharge_btn {
				display: inline-block;
				width: 120/@rate;
				height: 70/@rate;
				text-align: center;
				line-height: 70/@rate;
				border-style: solid;
				border-width: 1px;
				margin-right: 10/@rate;				
			}			
		}		
	}
	.center {
		padding: 0 26/@rate 20/@rate 26/@rate;
		border-bottom: 1px solid #ccc;
		.center-left {
			float: left;
			width: 50%;
			.center-text {
				text-align: left;
				position: relative;
				padding-bottom: 10/@rate;
				.poab {
					position: absolute;
				    top: 20/@rate;
				    left: -20/@rate;
				}
			}
			.center-btn {
				text-align: left;
				display: inline-block;
				vertical-align: middle;
				width: 100%;
				height: 70/@rate;
				padding-right: 45/@rate;
				position: relative;
				.examine_btn {
					display: inline-block;
					width: 120/@rate;
					height: 70/@rate;
					text-align: center;
					line-height: 70/@rate;
					border-style: solid;
					border-width: 1px;
				}
				.recharge_btn {
					display: inline-block;
					width: 120/@rate;
					height: 70/@rate;
					text-align: center;
					line-height: 70/@rate;
					border-style: solid;
					border-width: 1px;
					margin-right: 10/@rate;				
				}
				.examine_count {
					display: inline-block;
					width: 30/@rate;
					height: 30/@rate;
					line-height: 30/@rate;
					text-align: center;
					position: absolute;
					top: -15/@rate;
					border-radius: 100%;
				}
			}
		}
		.center-right {
			width: 50%;
			float: right;
			text-align: right;
			.center-text {
				padding: 10/@rate 0 10/@rate 0 ;
				text-align: right;
			}
		}
		.center-footer {
			padding: 60/@rate 0 10/@rate 0;
			width: 100%;
			float: left;
			.center-left {
				text-align: left;
				width: 22%;
				float: left;
			    height: 70/@rate;
			    line-height: 70/@rate;
			}
			.center-select {
				float: left;
				width: 30%;
			}
			.center-right {
				float: right;
				width: 40%;
			    height: 70/@rate;
			    line-height: 70/@rate;
			}
		}
	}
	.list {
		width: 100%;
		border-bottom: 1px solid #ccc;
		padding: 26/@rate 26/@rate 26/@rate 26/@rate;
		.list-ul {
			width: 100%;
			.list-left {
				float: left;
				width: 50%;
				text-align: left;
			}
			.list-right {
				float: right;
				text-align: right;
				width: 50%;
				position: relative;
				.bom0 {
					margin-top: 60/@rate;
				}
			}
			.text {
				display: inline-block;
				padding: 10/@rate 0 10/@rate 0;
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