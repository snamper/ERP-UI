<template>
	<pg-aside>
		<pg-main top="0" bottom="120" base >
			<!-- 收货地址 -->
			<div v-if="address" class="address bg-color">
				<div class="userinfo">
					<div class="left font_26">收货人：{{ address.linkMan }}</div>
					<div class="right font_26">{{ address.mobile }}</div>
				</div>
				<div class="address_info">
					<div class="left-icon font_42">
						<pg-icon name="dingwei"></pg-icon>
					</div>
					<div class="content font_26">
						{{ address.state }} {{ address.city }} {{ address.district }} {{ address.address }}
					</div>
					<div class="right-icon font_42" @click="toSelectAddress">
						<pg-icon name="xiangyoujiantou"></pg-icon>
					</div>
				</div>
			</div>
			<div class="address bg-color" v-else>
				<div class="address_info">
					<div class="left-icon font_42">
						<pg-icon name="dingwei"></pg-icon>
					</div>
					<div class="content font_26">
						暂未设置收货地址，请进行添加
					</div>
					<div class="right-icon font_42" @click="toSelectAddress">
						<pg-icon name="xiangyoujiantou"></pg-icon>
					</div>
				</div>
			</div>
			
			<!-- 购物车列表 -->
			<div class="goods-group line-border-color bg-color" v-for="item in this.goodsList">
				<div class="goods-info">
					<div class="goods-img">
						<pg-img :src="item.imgUrl"></pg-img>
					</div>
					<div class="goods-detail">
						<div class="goods-name font_26 title-color">{{ item.name }}({{ item.customBC }})</div>
						<div class="info-item font_26 text-color">{{ item.colorName }} {{ item.sizeName }}</div>
						<div class="info-item font_26 text-color">￥ {{ item.sellPrice ? item.sellPrice.toFixed(2) : 0.00 }}</div>
					</div>
				</div>
				<div class="goods-handle">
					<div class="handle-item">

					</div>
					<div class="handle-item">
						X {{ item.qty }}
					</div>
				</div>
			</div>

			<!-- 备注 -->
			<div class="remark bg-color line-border-color">
				<div class="tip font_26">备注:</div>
				<div class="val">
					<input class="text-color font_26" type="text" name="" v-model="orderInfo.note" placeholder="请输入订单备注">
				</div>
			</div>

			<!-- 订单汇总 -->
			<div class="collect bg-color font_30">
				<span>共{{ goodsCoutn }}件商品</span>
				<span>小计:</span>
				<span class="primary-color"><b>￥{{ totalPrice.toFixed(2) || 0.00 }}</b></span>
			</div>

			<!-- 暂无数据 -->
			<pg-default-page v-if="noData" icon="gouwuchekong" tip="购物车暂无数据" buttonText="我要订货" buttonPath="/goodslist"></pg-default-page>
		</pg-main>

		<!-- 结算部分 -->
		<div class="cart-submit bg-color">
			<div class="cart-submit_msg">
				<div class="tip font_30">
					合计:
				</div>
				<div class="cartMsg font_30">
					<div class="primary-color">
						<b>￥ {{ totalPrice.toFixed(2) || 0.00}}</b>
					</div>
					<div class="disable-color">
						不含运费
					</div>
				</div>
			</div>
			<div class="cart-submit_btn font_30 primary-bg-color white-color" @click="createOrder">
				提交订单
			</div>
		</div>

		<!-- 确认提示框 -->
		<pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>
		
	</pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables.less';
	// 地址
	.address {
		width: 100%;
		padding: 30/@rate;
		
		.userinfo {
			font-size: 0;
			padding: 10/@rate 70/@rate;

			.left {
				width: 60%;
				display: inline-block;
				vertical-align: top;
				text-align: left;

			}
			.right {
				width: 40%;
				display: inline-block;
				vertical-align: top;
				text-align: right;

			}
		}

		&_info {
			position: relative;
			padding: 10/@rate 70/@rate;

			.left-icon {
				position: absolute;
				top: 10/@rate;
				left: 0;

			}

			.content {
				width: 100%;
				height: 50/@rate;
				text-align: left;
			}

			.right-icon {
				position: absolute;
				top: 10/@rate;
				right: 30/@rate;
			}
			
		}
		
	}

	// 购物车列表
	.goods-group {
		width: 100%;
		padding: 30/@rate;
		margin-top: 10/@rate;
		position: relative;

		.goods-info {
			width: 100%;
			padding-right: 70/@rate;
			position: relative;
			text-align: left;

			.goods-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 160/@rate;
				height: 160/@rate;
				overflow: hidden;
			}
			.goods-img img{
				width: 100%;
			}

			.goods-detail {
				width: 100%;
				padding-left: 170/@rate;
				text-align: left;

				.info-item {
					height: 40/@rate;
					line-height: 40/@rate;
				}
				.goods-name {
					padding-top: 2/@rate;
					height: 80/@rate;
					overflow: hidden;
				}
			}

		}
		.goods-handle {
			position: absolute;
			text-align: right;
			top: 30/@rate;
			right: 30/@rate;
			width: 65/@rate;

			.handle-item {
				height: 80/@rate;
				line-height: 80/@rate;
			}
		}

	}
	
	// 备注
	.remark {
		width: 100%;
		padding: 30/@rate;
		position: relative;
		border-bottom-style: solid;
		border-bottom-width: 1px;

		.tip {
			position: absolute;
			top: 30/@rate;
			left: 30/@rate;
			width: 80/@rate;
			height: 50/@rate;
			line-height: 50/@rate;
		}
		.val {
			width: 100%;
			height: 50/@rate;
			line-height: 50/@rate;
			padding-left: 80/@rate;

			input {
				padding: 2/@rate 5/@rate;
				width: 100%;
				height: 100%;
				border: 0;
			}
		}

	}

	// 汇总
	.collect {
		padding: 30/@rate;
		text-align: right;
	}


	// 结算
	.cart-submit {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100/@rate;

		&_msg {
			width: 100%;
			text-align: left;
			padding: 0 200/@rate 0 30/@rate;

			.tip {
				width: 90/@rate;
				height: 100/@rate;
				line-height: 50/@rate;
				top: 0;
				left: 30/@rate;
				position: absolute;
			}

			.cartMsg {
				width: 100%;
				padding-left: 100/@rate;

				div {
					height: 50/@rate;
					line-height: 50/@rate;
				}
			}

		}

		&_btn {
			position: absolute;
			top: 0;
			right: 0;
			width: 190/@rate;
			height: 100/@rate;
			line-height: 100/@rate;
		}
	}
</style>

<script type="text/babel">
	import confirmOrder from './confirmOrder'

	export default {
		...confirmOrder
	}

</script>