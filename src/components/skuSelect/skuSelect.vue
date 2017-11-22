<template>
	<transition name="fade">
		<div class="sku" v-show="isShowSKU">
			<transition name="opacity">
				<div class="sku-group" v-if="isShowSKU" @click="closeSKU"></div>
			</transition>
			<transition name="sku">
				<div class="sku-group_main bg-color" v-if="isShowSKU" @click.stop>
					<!-- 关闭按钮 -->
					<div class="sku-group_close">
						<pg-icon name="guanbi" class="font_42 text-color" @click="closeSKU"></pg-icon>
					</div>
					
					<!-- 头像、价格、已选 -->
					<div class="sku-group_goodsInfo line-border-color">
						<div class="goodImg">
							<pg-img :src="skulist.img"></pg-img>
						</div>

						<div class="goodInfo">
							<div class="goodInfo_price font_36 primary-color">￥{{ skulist.price || 0.00 }}</div> 
							<div class="goodInfo_sku font_28" v-if="isSel">已选:{{ color ? '“' + color.text + '”' : ''}} {{ size ? '“' + size.text + '”' : ''}}</div>
						</div>
					</div>

					<!-- 内容部分 -->
					<div class="sku-group_goodsSKU line-border-color">
						<div class="sku_name font_28">{{ skulist.list.colorTitle }}</div>
						<div class="sku_list">
							<span v-for="color in skulist.list.colors" :class="[color.isSel ? 'font_28 primary-bg-color white-color border' : 'font_28 primary-color primary-border-color border' ]" @click="colorSelect(color)">{{ color.text }}</span>
						</div>
					</div>

					<!-- 内容部分 -->
					<div class="sku-group_goodsSKU line-border-color">
						<div class="sku_name font_28">{{ skulist.list.sizeTitle }}</div>
						<div class="sku_list">
							<span v-for="size in skulist.list.sizes" :class="[(size.isShow && size.isSel == false) ? 'font_28 primary-color border primary-boder-color' : size.isSel ? 'font_28 primary-bg-color white-color border primary-border-color' : 'font_28 disable-bg-color white-color border disable-border-color']" @click="sizeSelect(size)">{{ size.text }}</span>
						</div>
					</div>

					<!-- 数量操作 -->
					<div class="sku-group_goodsSKU line-border-color">
						<div class="sku_name font_28">数量</div>
						<div class="sku_list">
							<pg-input-number type="primary" :value="number" @change="numberChange"></pg-input-number>
						</div>
					</div>

					<!-- 操作按钮 -->
					<pg-button size="big" class="primary-bg-color no-radius sku-group_Btn white-color" @click="addCart">确定</pg-button>
				</div>
			</transition>
		</div>
	</transition>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../assets/css/variables.less';
	.sku {
		z-index: 99998;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
	}
	// SKU选择
	.sku-group {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background: rgba(0,0,0,0.6);
	}

	// SKU弹出的主窗体
	.sku-group_main {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
	}
	
	// 商品信息
	.sku-group_goodsInfo {
		width: 100%;
		height: 265/@rate;
		//padding: 30/@rate;
		//margin-top: 60/@rate;
		position: relative;
		border-bottom-style: solid;
		border-bottom-width: 1px;

		.goodImg {
			position: absolute;
			top: -50/@rate;
			left: 30/@rate;
			width: 275/@rate;
			height: 275/@rate;
			border-radius: 10/@rate;
			overflow: hidden;
		}
		.goodImg img {
			width: 100%;
		}

		.goodInfo {
			width: 100%;
			padding-left: 335/@rate;
			padding-top: 100/@rate;
			text-align: left;
			&_price {
				width: 100%;
			}
			&_sku {
				margin-top: 30/@rate;
				width: 100%;
			}
		}
	}
	
	// SKU列表
	.sku-group_goodsSKU {
		width: 100%;
		padding: 40/@rate 30/@rate;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		text-align: left;
		.sku_list {
			width: 100%;
			margin-top: 40/@rate;
			font-size: 0;

			span {
				display: inline-block;
				height: 68/@rate;
				line-height: 68/@rate;
				padding: 0 28/@rate;
				margin-right: 30/@rate;
				border-radius: 10/@rate;
				&.border {
					border-style: solid;
					border-width: 1px;
				}
			}
			span:last-child {
				margin-right: 0;
			}
		}

		.sku_number {

		}
	}
	.sku-group_goodsSKU:last-child {
		border-bottom-style: none;
		border-bottom-width: 0;
	}
	
	// 按钮
	.sku-group_Btn {

	}		

	.sku-group_close {
		position: absolute;
		z-index: 9;
		top: 20/@rate;
		right: 20/@rate;
	}


	// 动画
	.sku-enter-active {
		animation: bounce-in .5s;
	}
	.sku-leave-active {
		animation: bounce-out .5s;
	}
	.opacity-enter-active {
		animation: opacity-in .5s;
	}
	.opacity-leave-active {
		animation: opacity-out .5s;
	}
	.fade-enter-active {
		animation: fade .5s;
	}
	.fade-leave-active {
		animation: fade .5s;
	}
	@keyframes bounce-in {
	  	0% {
	  		bottom: -100%;
	  	}
	  	100% {
	  		bottom: 0;
	  	}
	}
	@keyframes bounce-out {
	  	0% {
	  		bottom: 0;
	  	}
	  	100% {
	  		bottom: -100%;
	  	}
	}
	@keyframes opacity-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes opacity-out {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes fade {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}
</style>

<script type="text/babel">
	import skuSelect from './skuSelect'

	export default {
		...skuSelect
	}
</script>