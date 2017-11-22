<template>
	<pg-aside>
		<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore">
			<!-- 搜索部分 -->
			<div class="bg-color collect">
				<pg-search @search="search" placeholder="商品名称" class="search"></pg-search>
				
				<!-- 购物车 汇总 -->
				<div class="cart-icon" @click="toCart">
					<pg-icon name="gouwuche" class="primary-color font_42"></pg-icon>
					<div class="tip warning-bg-color font_20 white-color">{{ cartCount || 0 }}</div>
				</div>
			</div>
			
			<!-- 商品列表 -->
			<div class="goods-group line-border-color bg-color" v-for="item in this.goodsList">
				<div class="goods-info" @click="toGoodsDetail(item)">
					<div class="goods-img">
						<pg-img :src="item.imgUrl"></pg-img>
					</div>
					<div class="goods-detail">
						<div class="goods-name font_26 title-color">{{ item.name }}</div>
						<div class="info-item font_26 text-color">{{ item.customNo }}</div>
						<div class="info-item font_26 text-color">￥ {{ item.sellPrice ? item.sellPrice.toFixed(2) : 0.00 }}</div>
					</div>
				</div>
				<div class="goods-handle">
					<div class="handle-item">
						<pg-icon v-if="item.distributorGoodsCollectionD === null" name="shoucang" class="font_42" @click="addGoodsCollect(item)"></pg-icon>
						<pg-icon v-else name="shoucang" class="font_42 warning-color" @click="cancelGoodsCollect(item)"></pg-icon>
					</div>
					<div class="handle-item">
						<pg-icon name="gouwuche" @click="showSKU(item)" class="primary-color font_42"></pg-icon>
					</div>
				</div>
			</div>
		</pg-main>

		<!-- SKU显示 组件:skulist="currentSku" -->
		<pg-sku-select :isShowSKU="isShowSKU" :skulist="currentSku"  @closeSKU="closeSKU"></pg-sku-select>

	</pg-aside>
	
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables.less';

	// 汇总信息
	.collect {
		width: 100%;
		position: relative;

		// 搜索
		.search {
			margin-right: 50/@rate;
		}

		.cart-icon {
			position: absolute;
			top: 40/@rate;
			right: 30/@rate;

			.tip {
				padding: 3/@rate 10/@rate;
				border-radius: 100%;
				position: absolute;
				top: -10/@rate;
				right: -10/@rate;
			}
		}
		
	}

	// 商品列表
	.goods-group {
		width: 100%;
		padding: 30/@rate;
		margin-top: 10/@rate;
		border-bottom-style: solid;
		border-bottom-width: 1px;
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
	.goods-group:last-child{
		border-bottom-style: none;
		border-bottom-width: 0px;
	}
	

</style>

<script type="text/babel">
	import goodslist from './goodsList.js'

	export default {
		...goodslist
	}
</script>