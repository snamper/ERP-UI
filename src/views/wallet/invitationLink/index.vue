<template>
	<pg-main top="0" base>
		<div class="invitation">
			<pg-img :src="imgSrc" class="qr"></pg-img>
		</div>
    </pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.invitation {
		background-color: #fff;
		.qr {
			width: 446/@rate;
			height: 450/@rate;
			margin: 280/@rate 0;
			border: none;
			background: #ccc;//有图片之后去除
		}
	}
	
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>