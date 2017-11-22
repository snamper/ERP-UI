<template>
	<pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="pageSize" v-infinite-scroll="loadmore">
		<div class="banner">
			<span class="banner_item font_28">操作时间</span>
			<span class="banner_item font_28">金额</span>
			<span class="banner_item font_28">状态</span>
		</div>
		<div class="register disable-border-color" v-for="item in rechargeList">
			<span class="register_item font_28 text-color">{{ item.applyTime }}</span>
			<span class="register_item font_28 text-color">{{ item.value }}</span>
			<span class="register_item font_28 text-color" v-if="item.flag === 0">待审核</span>
			<span class="register_item font_28 text-color" v-if="item.flag === 95">撤销</span>
			<span class="register_item font_28 warning-color" v-if="item.flag === 97">拒绝</span>
			<span class="register_item font_28 success-color" v-if="item.flag === 100">同意</span>
		</div>
		<div v-if="rechargeList.length == 0">
                <pg-default-page  icon="wodeqianbao"  tip="暂无数据" >
                </pg-default-page>  
		</div>		
    </pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.banner {
		font-size: 0;
		padding: 38/@rate 0;
		background: #fff;
		margin-bottom: 20/@rate;
		.banner_item {
			width: 33.33%;
			display: inline-block;
		}
	}
	.register {
		padding: 30/@rate 0;
		border-bottom-width: 1/@rate;
		border-bottom-style: solid;	
		font-size: 0;
		background-color: #fff;
		.register_item {
			width: 33.33%;
			display: inline-block;
		}
	}
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>