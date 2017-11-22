<template>
	<pg-main top="0" base>
		<div class="banner">
			<div class="name font_28">{{currentTeam.groupName}}</div>
			<div class="case font_28">
				可用余额￥{{financeObj.orderBalanceMoney}}
			</div>
			<div class="case font_28">
				可审余额￥{{financeObj.canAuditMoney}}
			</div>
		</div>
		<div class="returnCommission">
			<div class="returnCommission_item disable-border-color">
				<span class="item_left  font_28">上级姓名</span>
				<span class="text-color  font_28 item_right">{{ parentInfo.name ? parentInfo.name : "暂无上级"}}</span>
			</div>
			<div class="returnCommission_item disable-border-color">
				<span class="item_left font_28">充值金额</span>
				<span class="text-color item_right font_28">
					<input type="text" v-model="query.value" placeholder="请输入充值金额" class="num-input" name="">
				</span>
			</div>
			<div class="returnCommission_item disable-border-color">
				<span class="item_left  font_28">打款截图</span>
				<pg-upload class="item_right" type="primary" @upload-success="uploadSuccess" text="选择上传图片"></pg-upload>
			</div>
			<div class="note">
				<span class="font_28 note_title">备注</span>
				<input type="text" v-model="query.note" class="note_content text-color font_28 border-radiusdisable-border-color">
			</div>
			<div class="h50 small text-color">* 充值前请和上级沟通好</div>
			<pg-button class="pg-btn small primary-bg-color white-color" @click="submit">提交</pg-button>
			<pg-button class="pg-btn case_btn title-color title-border-color font_28 border-radiu" @click="toRechargeInfo">充值记录</pg-button>
		</div>
		<div class="fotter">
			<div class="content" v-if="parentInfo.isTopGrade">
				提示：此功能只是辅助上级管理与下级的账目，与公司财务未发生任何关系，请代理们尽量严谨的审核充值金额，我公司对代理间因充值产生的纠纷不负责任。
			</div>
			<div class="code-img">
				<p class="img1 font_28">上级收款二维码</p>
				<p class="img2">
	                <pg-img :src="parentInfo.qrCodeImg"  v-if="parentInfo.qrCodeImg"></pg-img>
	                					
				</p>
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
		margin-bottom: 20/@rate;
		padding: 44/@rate 100/@rate 44/@rate 30/@rate;
		.name {
			display: inline-block;
			text-align: left;
			width: 30%;
		}
		.case {
			width: 35%;
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
				.num-input {
					width: 80%;
					outline: none;
					border: none;
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
			padding: 20/@rate 0 30/@rate 30/@rate;
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
		.h50 {
			height: 50/@rate;
			line-height: 50/@rate;
			margin: 0 auto;
			text-align: left;
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
	.fotter {
		background-color: #fff;
		.content {
			padding: 20/@rate 30/@rate 20/@rate 30/@rate;
			line-height: 40/@rate;
			text-align: left;
		}
		.code-img {
			padding: 20/@rate 30/@rate 20/@rate 30/@rate;
			.img1 {
				text-align: left;
			}
			.img2 {
				img {
					width: 240/@rate;
					height: 240/@rate;
				}
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