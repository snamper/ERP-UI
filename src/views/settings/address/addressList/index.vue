<template>
	<pg-aside>
		<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="pageSize" v-infinite-scroll="loadmore">
			<ul class="address">
				<li class="address_item" v-for="item in list">
					<div class="address_content disable-border-color" @click="selectAddress(item)">
						<div class="linkMan">
							<span class="name font_28">收货人:&nbsp;&nbsp;{{ item.linkMan }}</span>
							<span class="phone font_28">{{ item.mobile }}</span>
						</div>
						<div class="place font_28">
							<span class="scd">{{ item.stateName }}{{ item.cityName }}{{ item.districtName }}
							</span>
							<span>{{ item.address }}</span>
						</div>
					</div>
					<div class="address_option">
						<div class="option_left">
							<pg-button class="pg-btn text-color font_28" v-if="item.isDefault === 1">
								<pg-icon name="zhengquetishi" class="zhengquetishi_icon primary-color font_60"></pg-icon>
								<span class="title primary-color font_28">默认地址</span>
							</pg-button>
							<!-- 不是默认地址时显示 -->
							<pg-button class="pg-btn text-color font_28" @click="defaultAddresss(item.distributorAddressID)" v-else>
								<div class="zhengquetishi text-border-color font_48"></div>
								<span class="title text-color font_28">默认地址</span>
							</pg-button>
						</div>
						<div class="option_right">
							<router-link class="bg-color edit border-radius" :to="{path: '/addAddress', query: { isEdit: true, editForm: item , source: source}}">
			                    <pg-icon name="bianji" class="text-color btn_icon font_48"></pg-icon>
			                    <span class="title text-color font_28">编辑</span>
			                </router-link>
							<pg-button class="pg-btn del text-color font_28" @click="del(item.distributorAddressID)">
								<pg-icon name="shanchu" class="text-color font_48"></pg-icon>
								<span class="title text-color font_28">删除</span>
							</pg-button>
						</div>
					</div>
				</li>
			</ul>
			<router-link class="addAddress white-color primary-bg-color font_28" :to="{path: '/addAddress',query: { isEdit: false, source: source }}">添加收货地址</router-link>
	    </pg-main>
	    <pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>
    </pg-aside>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../../assets/css/variables';
	.address {
		.address_item {
			margin-bottom: 10/@rate;
			background-color: #fff;
			.address_content {
				border-bottom-width: 1/@rate;
				border-bottom-style: solid;
				padding: 40/@rate 30/@rate;
				.linkMan {
					font-size: 0;
					margin-bottom: 30/@rate;
					.name {
						display: inline-block;
						width: 50%;
						text-align: left;
					}
					.phone {
						display: inline-block;
						width: 50%;
						text-align: right;
					}
				}
				.place {
					text-align: left;
					.scd {
						display: inline-block;
						margin-right: 20/@rate;
					}
				}
			}
			.address_option {
				padding: 30/@rate;
				font-size: 0;
				.option_left {
					display: inline-block;
					width: 50%;
					text-align: left;
					.zhengquetishi_icon {
						margin-right: 10/@rate;
						vertical-align: middle;
					}
					.zhengquetishi {
						display: inline-block;
						border-width: 1/@rate;
						border-style: solid;
						width: 40/@rate;
						height: 40/@rate;
						border-radius: 100%;
						margin-right: 10/@rate;
						vertical-align: middle;
					}
					.title {
						display: inline-block;
						vertical-align: middle;
					}
				}
				.option_right {
					display: inline-block;
					width: 50%;
					text-align: right;
					.edit {
						display: inline-block;
						.btn_icon {
							margin-right: 10/@rate;
						}
					}
					.del {
						display: inline-block;
						margin-left: 20/@rate;
					}
				}
			}
		}
	}
	.addAddress {
		display: inline-block;
		width: 100%;
		height: 110/@rate;
		line-height: 110/@rate;
	}
	.pg-btn {
		&.default {
			min-width: 0;
			padding: 0;
			height: 30/@rate;
			line-height: 30/@rate;
		}
	}
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>