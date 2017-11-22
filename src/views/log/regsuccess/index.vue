<template>
	<pg-main top="0">
		<!-- 暂无数据 -->
		<pg-default-page class="padding-bottom" icon="zhengquetishi" tip="您好，您的帐号注册成功!" :btns="btns"></pg-default-page>
		<div class="tip font_28 text-color +-">
			<div>帐号：{{ name }}</div>
			<div>密码：手机号码后6位！</div>
		</div>
	</pg-main>
</template>

<style type="textsheet/less" lang="less" scoped>
	@import '~assets/css/variables';

	.tip {
		text-align: left;
		padding: 60/@rate 0 0 210/@rate;

		div {
			padding:10/@rate 0;
		}
	}

	.padding-bottom {
		padding-bottom: 0;
	}

</style>

<script type="text/babel">
	import regSuccess from './index'

	export default {
		...regSuccess
	}

</script>