<template>
	<pg-aside>
		<pg-main top="0" bottom="120" base infinite-scroll-disabled="busy" infinite-scroll-distance="130" v-infinite-scroll="loadmore">
			<!-- 购物车列表 -->
			<div class="action-bar font_30 bg-color  line-border-color" v-if="noData">
				<div class="action-bar_allSel">
					<pg-checkbox v-model="isAllSel"></pg-checkbox>
				</div>
				<div class="action-bar_tipMsg">
					<!-- <span>可用额度 ￥1396</span> -->
				</div>
				<div class="action-bar_handle">
					<span v-if="isEdit === false" @click="editCart(true)"> 编辑</span>
					<span v-if="isEdit === true" @click="delCart"> 删除</span>
					<span v-if="isEdit === true"> | </span>
					<span v-if="isEdit === true" @click="editCart(false)"> 完成</span>
				</div>
			</div>
			
			<!-- 购物车列表 -->
			<div class="goods-group line-border-color bg-color" v-for="item in this.cartList">
				<div class="goods-info">
					<div class="goods-sel">
						<pg-checkbox v-model="item.isSel" @input="cartSel"></pg-checkbox>
					</div>
					<div class="goods-img">
						<pg-img :src="item.imgUrl"></pg-img>
					</div>
					<div class="goods-detail">
						<div class="goods-name font_26 title-color">{{ item.name }}({{ item.customBC }})</div>
						<div class="info-item font_26 text-color">{{ item.colorName }} {{ item.sizeName }}</div>
						<div class="info-item text-color">￥ {{ item.sellPrice ? item.sellPrice.toFixed(2) : 0.00 }}</div>
					</div>
				</div>
				<pg-input-number class="goods-handle" type="primary" :id="item.id" :value="item.qty" @change="qtyChange"></pg-input-number>
			</div>
			<!-- 暂无数据 -->
			<pg-default-page v-if="noData === false" icon="gouwuchekong" tip="购物车暂无数据" buttonText="我要订货" buttonPath="/goodslist"></pg-default-page>
		</pg-main>

		<!-- 结算部分 -->
		<div class="cart-submit bg-color" v-if="noData">
			<div class="cart-submit_msg">
				<div class="tip font_30">
					合计:
				</div>
				<div class="cartMsg font_30">
					<div class="primary-color">
						<b>￥ {{ totalPrice.toFixed(2) || 0.00 }}</b>
					</div>
					<div class="disable-color">
						不含运费
					</div>
				</div>
			</div>
			<div class="cart-submit_btn font_30 primary-bg-color white-color" @click="submitCart">
				提 交
			</div>
		</div>

		<!-- 确认提示框 -->
		<pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>

	</pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables.less';
	
	// 操作栏
	.action-bar {
		width: 100%;
		padding: 25/@rate 30/@rate;
		position: relative;
		border-bottom-width: 1px;
		border-bottom-style: solid;

		&_allSel {
			position: absolute;
			top: 25/@rate;
			left: 30/@rate;
			width: 50/@rate;
			text-align: left;
		}

		&_tipMsg{
			width: 100%;
			height: 42/@rate;
			line-height: 42/@rate;
			padding-left: 60/@rate;
			padding-right: 150/@rate;
			text-align: left;
		}

		&_handle {
			position: absolute;
			top: 25/@rate;
			right: 30/@rate;
			width: 220/@rate;
			height: 42/@rate;
			line-height: 42/@rate;
			text-align: right;
		}
	}

	// 购物车列表
	.goods-group {
		width: 100%;
		padding: 30/@rate;
		margin-top: 10/@rate;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		position: relative;

		.goods-info {
			width: 100%;
			position: relative;
			text-align: left;

			.goods-sel {
				position: absolute;
				top: 55/@rate;
				left: 0;
				width: 50/@rate;
			}

			.goods-img {
				position: absolute;
				top: 0;
				left: 60/@rate;
				width: 160/@rate;
				height: 160/@rate;
				overflow: hidden;
			}
			.goods-img img{
				width: 100%;
			}

			.goods-detail {
				width: 100%;
				padding-left: 225/@rate;
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
			bottom: 30/@rate;
			right: 30/@rate;
		}

	}
	.goods-group:last-child{
		border-bottom-style: none;
		border-bottom-width: 0px;
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
	import shopCartList from './shopCartList'

	export default {
		...shopCartList
	}
</script>