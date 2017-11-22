<template>
	<pg-aside>
		<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="pageSize" v-infinite-scroll="loadmore">
		    <pg-search @search="search" placeholder="姓名/手机号/微信号"></pg-search>
		    <div class="tob">
		    	<div class="balance">
		    		<p>
			    		<i @click="checkValue" class="iconfont icon-wenhao poab"></i>
			    		<span class="font_42">可审余额￥</span>
			    		<span class="font_42">{{financeObj.canAuditMoney}}</span>
		    		</p>
		    		<p>
			    		<span class="font_28">总余额￥</span>
			    		<span class="font_28">{{financeObj.balanceMoney}}</span>
		    		</p>
		    	</div>
		    </div>
			<div class="team">
				<span class="team_name font_28">{{ currentTeam.groupName }}</span>
				<div class="pg-select border-radius disable-border-color team_status">
	                <select class="title-color font_28" v-model="query.condition.flag" >
	                    <option v-for="item in options" :value="item.value">{{ item.text }}</option>
	                </select>
            	</div>
			</div>
			<div v-if="rechargeList.length == 0">
                    <pg-default-page  icon="wodeqianbao"  tip="暂无数据" >
                    </pg-default-page>  
			</div>			
			<div class="team_item" v-for="item in rechargeList">
				<div class="banner disable-border-color">
					<div class="banner_left font_28">
						<h2 class="title-color font_28 title">{{item.customerName}}</h2><span>({{item.gradeName}})</span>
					</div>
					<div class="banner_right font_22 text-color">
						{{item.applyTime}}
					</div>
				</div>
				<div class="team_item_info disable-border-color font_22">
					<div class="info_item">
						<span class="info_item_title">手机号:</span>
						<span>{{item.mobile}}</span>
					</div>
					<div class="info_item">
						<span class="info_item_title">微信号:</span>
						<span>{{item.wechat}}</span>
					</div>
					<div class="info_item">
						<span class="info_item_title">身份证:</span>
						<span>{{item.certNo}}</span>
					</div>
					<div class="info_item">
						<span class="info_item_title">充值金额:</span>
						<span>{{item.value}}</span>				
					</div>
				</div>
				<div class="btn_group" v-if="item.flag == 0">
					<a class="btn_group_item title-color font_28 border-radius" @click="chackCode(item)">查看二维码</a>

					<pg-button class="btn_group_item primary-color title-color font_28 border-radius" @click="audit(0,item)">拒绝</pg-button>
					<pg-button class="btn_group_item primary-color disable-border-color font_28 border-radius" @click="audit(1,item)">同意</pg-button>
				</div>
				<div class="reject font_28" v-else>
					<span v-if="item.flag == 97">已拒绝</span>
					<span v-if="item.flag == 100">已完成</span>
				</div>
			</div>
	    </pg-main>
	    <pg-confirm :confirm="confirm" ref="confirm">
	        <div v-if="isShowCode">
	         	<pg-img v-if="cheImg" :src="cheImg" alt=""></pg-img>
	        </div>
	    	
	    </pg-confirm>
    </pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.tob {
		padding: 25/@rate 20/@rate 25/@rate 30/@rate;
		text-align: right;
		background-color: #fff;

		.balance {
			width: 340/@rate;
			margin: 0 auto;
			p {
				position: relative;
				padding: 10/@rate 0 10/@rate 0;
				.poab {
					position: absolute;
				    top: 20/@rate;
				    left: -20/@rate;
				}
			}
		}
	}
	.team {
		padding: 25/@rate 20/@rate 25/@rate 30/@rate;
		text-align: left;
		background-color: #fff;
		font-size: 0;
		.team_name {
			display: inline-block;
			width: 70%;
			vertical-align: middle;
			padding-right: 30/@rate;
		}
		.team_status {
			width: 30%;
			vertical-align: middle;
			// margin-left: 35/@rate;
		}
	}
	.notData {
		height: 200/@rate;
		line-height: 200/@rate;
		text-align: center;
	}
	.team_item {
		margin-top: 20/@rate;
		background-color: #fff;
		.banner {
			padding: 30/@rate 0;
			font-size: 0;
			border-bottom-width: 1/@rate;
			border-bottom-style: solid;
			.banner_left {
				width: 50%;
				display: inline-block;
				text-align: left;
				padding-left: 30/@rate;
				.title {
					display: inline-block;
					font-weight: normal;
					margin-right: 20/@rate;
				}
			}
			.banner_right {
				width: 50%;
				display: inline-block;
				text-align: right;
				padding-right: 32/@rate;
			}
		}
		.team_item_info {
			padding: 30/@rate 0 30/@rate 35/@rate;
			text-align: left;
			border-bottom-width: 1/@rate;
			border-bottom-style: solid;			
			.info_item {
				margin-bottom: 20/@rate;
				.info_item_title {
					margin-right: 16/@rate;
				}
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
		.btn_group {
			padding: 16/@rate 0;
			font-size: 0;
			background-color: #fff;
			.btn_group_item {
				width: 180/@rate;
				height: 70/@rate;
				line-height: 70/@rate;
				text-align: center;
				display: inline-block;
				border-style: solid;
				border-width: 1/@rate;
				margin-right: 20/@rate;
			}
		}
		.reject {
			background-color: #fff;
			padding: 40/@rate 0;
		}
	}
	

</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>