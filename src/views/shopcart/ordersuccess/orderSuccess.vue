<template>
	<pg-main top="0">
		<!-- 暂无数据 -->
		<pg-default-page icon="zhengquetishi" tip="您已下单成功！" :btns="btns"></pg-default-page>
	</pg-main>
</template>

<style type="textsheet/less" lang="less" scoped>
	@import '../../../assets/css/variables.less';
	

</style>

<script type="text/babel">
	import orderSuccess from './orderSuccess'

	export default {
		...orderSuccess
	}

</script>