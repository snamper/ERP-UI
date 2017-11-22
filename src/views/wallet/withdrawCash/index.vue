<template>
	<pg-aside>
		<pg-main top="0" base>
			<div class="banner">
				<div class="name font_28">{{ customer.customerName }}</div>
				<div class="case font_28">
					佣金￥{{ customer.amount }}
				</div>
			</div>
			<div class="returnCommission">
				<div class="returnCommission_item disable-border-color">
					<span class="item_left  font_28">姓名</span>
					<span class="text-color  font_28 item_right">{{ drawalInfo.name }}</span>
				</div>
				<div class="returnCommission_item disable-border-color">
					<span class="item_left  font_28">提现对象</span>
					<div class="text-color item_right  font_28">
						<span class="name">{{ drawalInfo.parentName }}</span><span>(微信: {{drawalInfo.parentWechat }})</span>
					</div>
				</div>
				<div class="returnCommission_item disable-border-color">
					<span class="item_left font_28">提现金额</span>
					<span class="text-color item_right font_28">￥{{ drawalInfo.amount }}</span>
				</div>
				<div class="returnCommission_item disable-border-color">
					<span class="item_left  font_28">收款二维码</span>
					<pg-img :src="drawalInfo.imgUrl" class="item_right item_img"></pg-img>
				</div>
				<div class="note">
					<span class="font_28 note_title">备注</span>
					<input type="text" class="note_content text-color font_28 border-radiusdisable-border-color" v-model="note">
				</div>
				<pg-button class="pg-btn small primary-bg-color white-color" @click="submit">提现</pg-button>
				<pg-button class="pg-btn case_btn title-color title-border-color font_28 border-radiu" @click="gotoCashRegister">提现记录</pg-button>
			</div>
		</pg-main>
		<pg-confirm :confirm="confirm" ref="confirm"></pg-confirm>
	</pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.banner {
		font-size: 0;
		text-align: right;
		background-color: #fff;
		margin-bottom: 20/@rate;
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
		background-color: #fff;
		padding-bottom: 30/@rate;
		.returnCommission_item {
			padding: 20/@rate 0 20/@rate 30/@rate;
			text-align: left;
			border-bottom-width: 1/@rate;
			border-bottom-style: solid;	
			position: relative;
			font-size: 0;
			.item_left {
				display: inline-block;
				width: 30%;
				vertical-align: middle;
			}
			.item_right {
				display: inline-block;
				width: 70%;
				vertical-align: middle;
				.name {
					margin-right: 20/@rate;
				}
			}
			.item_img {
				width: 100/@rate;
				height: 100/@rate;
				border: none;
				background: #ccc; //图片来之后删除
			}		
		}
		.note {
			padding: 20/@rate 0 80/@rate 30/@rate;
			text-align: left;
			font-size: 0;
			.note_title {
				display: inline-block;
				width: 10%;
				vertical-align: top;
				vertical-align: middle;
			}
			.note_content {
				width: 80%;
				height: 70/@rate;
				line-height: 70/@rate;
				border-width: 1/@rate;
				border-style: solid;	
				padding-left: 20/@rate;
				margin-right: 30/@rate;
				vertical-align: middle;
			}
		}
		.small {
			width: 570/@rate;
			height: 90/@rate;
			line-height: 90/@rate;
			margin-bottom: 20/@rate;
		}
		.case_btn {
			width: 570/@rate;
			height: 90/@rate;
			display: inline-block;
			line-height: 90/@rate;
			border-width: 1/@rate;
			border-style: solid;	
		}
	}	
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>