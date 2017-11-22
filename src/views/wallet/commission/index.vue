<template>
	<pg-main top="0" base>
		<div class="top">
			<div class="banner_left ">
			    <a class="recharge_btn white-color font_28 border-radius primary-bg-color disable-border-color" href="javascript:;">佣金</a>
				<router-link class="examine_btn title-color font_28 border-radius" :to="{path: '/balance'}">余额</router-link>				
			</div>
			<div class="banner_right">
			</div>
		</div>

		<div class="banner">
			<span class="banner_left font_28">{{currentTeam.groupName}}</span>
			<div class="banner_right">
				<router-link class="examine_btn title-color font_28 border-radius" :to="{path: '/cashCheck', query: {group: currentTeam}}">审核</router-link>
				<span class="warning-bg-color examine_count font_20">{{ auditCount }}</span>
			</div>
		</div>
		<div class="returnCommission">
			<h1 class="title title-color font_28">待返佣金</h1>
			<div class="return_banner disable-border-color">
				<span class="return_banner_left font_28">对象</span>
				<span class="return_banner_right font_28 primary-color">￥{{ returnTotalAmount }}</span>
			</div>
			<ul>
				<div v-if="returnCommissionList.length === 0" class="notData font_28">无数据</div>
				<li class="commission_item" v-for="item in returnCommissionList">
					<span class="name font_28" v-if="item.customerName !== null && item.customerName !== ''">{{ item.customerName }}</span>
					<span class="name font_28" v-else>公司</span>
					<pg-button class="pg-btn item_btn1 title-color font_28 border-radius" @click="gotoReturnCommission(item)">查看明细</pg-button>
					<pg-button class="pg-btn item_btn2 primary-color disable-border-color font_28 border-radius" @click="gotoWithdrawCash(item)">提现</pg-button>
					<span class="price font_28 primary-color">￥{{ item.amount }}</span>
				</li>
			</ul>
		</div>
		<div class="paidCommission">
			<h1 class="title title-color font_28">待付佣金</h1>
			<div class="return_banner disable-border-color">
				<span class="return_banner_left font_28">对象</span>
				<span class="return_banner_right font_28 success-color">￥{{ payTotalAmount }}</span>
			</div>
			<ul>
				<div v-if="payCommissionList.length === 0" class="notData font_28">无数据</div>
				<li class="commission_item" v-for="item in payCommissionList">
					<span class="name font_28" v-if="item.customerName !== null && item.customerName !== ''">{{ item.customerName }}</span>
					<span class="name font_28" v-else>公司</span>
					<pg-button class="pg-btn item_btn1 title-color font_28 border-radius" @click="gotopayCommission(item)">查看明细</pg-button>
					<span class="price font_28 success-color">￥{{ item.amount}}</span>
				</li>
			</ul>
		</div>
	</pg-main>
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

	.banner {
		width: 100%;
		font-size: 0;
		padding: 26/@rate 0;
		background-color: #fff;

		.banner_left {
			display: inline-block;
			width: 60%;
			line-height: 40/@rate;
			padding-left: 30/@rate;
			text-align: left;
			vertical-align: middle;
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
		.banner_right {
			display: inline-block;
			vertical-align: middle;
			width: 40%;
			height: 70/@rate;
			text-align: right;
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
				right: 30/@rate;
				top: -15/@rate;
				border-radius: 100%;
			}
		}
	}
	.returnCommission, .paidCommission {
		text-align: left;
		padding-top: 30/@rate;
		padding-bottom: 30/@rate;
		margin-top: 10/@rate;
		background-color: #fff;
		.title {
			font-weight: normal;
			padding-left: 30/@rate;
		}
		.return_banner {
			width: 100%;
			font-size: 0;
			padding-left: 30/@rate;
			padding-bottom: 22/@rate;
			border-bottom-width: 1/@rate;
			border-bottom-style: solid;
			.return_banner_left {
				display: inline-block;
				width: 50%;
			}
			.return_banner_right {
				display: inline-block;
				width: 50%;
				text-align: right;
				padding-right: 30/@rate;
			}
		}
		.commission_item {
			font-size: 0;
			position: relative;
			margin-top: 20/@rate;
			padding-left: 30/@rate;
			.name {
				display: inline-block;
				width: 30%;
			}
			.item_btn1 {
				display: inline-block;
				width: 25%;
				height: 70/@rate;
				text-align: center;
				margin-right: 20/@rate;
				line-height: 70/@rate;
				border-style: solid;
				border-width: 1/@rate;
				border-color: #000;
			}
			
			.price {
				position: absolute;
				display: inline-block;
				width: 10%;
				right: 30/@rate;
				top: 16/@rate;
			}
		}
		.notData {
			text-align: center;
			line-height: 80/@rate;
			height: 80/@rate;
		}
	}
	.returnCommission {
		.item_btn2 {
			display: inline-block;
			width: 25%;
			height: 70/@rate;
			text-align: center;
			line-height: 70/@rate;
			border-style: solid;
			border-width: 1/@rate;
		}
	}
	.team-list {
        li {
            position: relative;
            text-align: left;
            padding: 20/@rate;
            &:not(:last-child) {
                border-bottom-width: 1px;
                border-bottom-style: solid;
            }
            .cover {
                width: 80/@rate;
                height: 80/@rate;
                text-align: left;
            }
            .title {
                height: 80/@rate;
                line-height: 80/@rate;
                display: inline-block;
                vertical-align: top;
                margin-left: 40/@rate;
            }
            .radio {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
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