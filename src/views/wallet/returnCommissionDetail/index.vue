<template>
	<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="pageSize" v-infinite-scroll="loadmore">
		<div class="banner">
			<div class="name font_28" v-if="customer.customerName !== null && customer.customerName !== ''">{{ customer.customerName }}</div>
			<div class="name font_28" v-else>公司</div>
			<div class="case font_28">
				待返佣金￥{{ customer.amount }}
			</div>
			<!-- <router-link class="case_btn primary-color disable-border-color font_28 border-radius" :to="{path: '/withdrawCash', query: {customer: customer, groupId: query.groupId}}">提现</router-link> -->
			<pg-button class="pg-btn case_btn primary-color disable-border-color font_28 border-radius" @click="gotoWithdrawCash">提现</pg-button>
		</div>
		<div class="returnCommission disable-border-color">
			<span class="returnCommission_name font_28">佣金流水</span>
			<div class="pg-select border-radius disable-border-color returnCommission_status">
                <select class="title-color font_28" v-model="month" @change="monthChange">
                    <option v-for="item in months" :value="item.value">{{ item.text }}</option>
                </select>
            </div>
		</div>
		<div class="returnCommission_item_info disable-border-color font_22" v-for="item in returnCommissionDetail">
			<div class="info_item">
				<span class="info_item_title">类型:</span>
				<span v-if="item.sheetType === 0">结算</span>
				<span v-if="item.sheetType === 100">提现</span>
				<span v-if="item.sheetType === 200">调整</span>
				<span v-if="item.sheetType === 8101">商品返点</span>
				<span v-if="item.sheetType === 8111">跨级推荐返点</span>
				<span v-if="item.sheetType === 8121">平级推荐返点</span>
				<span v-if="item.sheetType === 8131">个人业绩返点</span>
				<span v-if="item.sheetType === 8141">团队业绩返点</span>
				<span class="info_item_time text-color">{{ item.createTime }}</span>
			</div>
			<div class="info_item">
				<span class="info_item_title">金额:</span>
				<span class="warning-color" v-if="item.busiTime == null">+{{ item.accValue }}</span>
				<span class="success-color" v-else>-{{ item.accValue }}</span>
			</div>
			<div class="info_item">
				<span class="info_item_title">订单号:</span>
				<span>{{ item.sheet }}</span>
				<!-- <span class="info_item_price primary-color">￥{{ item.closeAccValue }}</span> -->
			</div>
		</div>
	</pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.banner {
		font-size: 0;
		text-align: right;
		background-color: #fff;
		padding: 44/@rate 100/@rate 44/@rate 30/@rate;
		.name {
			display: inline-block;
			text-align: left;
			width: 50%;
		}
		.case {
			width: 50%;
			display: inline-block;
			text-align: right;
		}
		.case_btn {
			width: 120/@rate;
			height: 70/@rate;
			line-height: 70/@rate;
			text-align: center;
			display: inline-block;
			border-style: solid;
			border-width: 1/@rate;
			margin-right: 20/@rate;
			margin-top: 20/@rate;
		}
	}
	.returnCommission {
		padding: 25/@rate 0 25/@rate 30/@rate;
		text-align: left;
		border-bottom-width: 1/@rate;
		border-bottom-style: solid;
		margin-top: 20/@rate;
		background-color: #fff;
		.returnCommission_status {
			width: 35%;
			margin-left: 20/@rate;
		}
	}
	.returnCommission_item_info {
		padding: 20/@rate 0 30/@rate 30/@rate;
		text-align: left;
		background-color: #fff;
		border-bottom-width: 1/@rate;
		border-bottom-style: solid;			
		.info_item {
			margin-bottom: 20/@rate;
			position: relative;
			.info_item_title {
				margin-right: 16/@rate;
			}
			&:last-child {
				margin-bottom: 0;
			}
			.info_item_price, .info_item_time {
				position: absolute;
				right: 30/@rate;
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