<template>
	<pg-main top="0" base>
		<div class="returnCommission">
			<div class="returnCommission_item disable-border-color">
				<span class="item_left font_28">收货人</span>
				<div class="text-color item_right  font_28">
					<input type="text" class="item_input text-color border-radius disable-border-color" v-model="form.linkMan">
				</div>
			</div>
			<div class="returnCommission_item disable-border-color">
				<span class="item_left font_28">联系电话</span>
				<div class="text-color item_right font_28">
					<input type="text" class="item_input text-color border-radius disable-border-color" v-model="form.mobile">
				</div>
			</div>
			<div class="returnCommission_item disable-border-color">
				<span class="item_left font_28">所在地区</span>
					<!-- <pg-area class="item_right"></pg-area> -->
				<pg-region @change="change" :stateInfo="stateInfo" :cityInfo="cityInfo" :districtInfo="districtInfo" class="item_right"></pg-region>
			</div>
			<div class="returnCommission_item disable-border-color">
				<span class="item_left address_detail font_28">详细地址</span>
				<textarea type="textarea" class="text-color area_input border-radius disable-border-color font_28 item_right" v-model="form.address">
				</textarea>
			</div>
			<pg-button class="pg-btn primary-bg-color white-color small" @click="saveAddress">保存</pg-button>
		</div>	
	</pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../../assets/css/variables';
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
				width: 20%;
				vertical-align: middle;
			}
			.item_right {
				display: inline-block;
				width: 80%;
				vertical-align: middle;
				.name {
					margin-right: 20/@rate;
				}
				.item_input {
					width: 96%;
					height: 70/@rate;
					line-height: 70/@rate;
					border-width: 1/@rate;
					border-style: solid;	
					padding-left: 20/@rate;
					margin-right: 30/@rate;
				}
			}	
			.area_input {
				display: inline-block;
				width: 76%;
				height: 200/@rate;
				border-width: 1/@rate;
				border-style: solid;	
				vertical-align: top;
			}
			.address_detail {
				vertical-align: top;
			}
		}
		.small {
			width: 570/@rate;
			height: 90/@rate;
			line-height: 90/@rate;
			margin: 20/@rate 0;
		}
	}		
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>