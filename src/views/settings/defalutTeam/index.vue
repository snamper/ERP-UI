<template>
	<pg-main top="0" base>
		<ul class="team">
			<li class="team_item" v-for="item in teamList">
				<div class="team_content disable-border-color">
					<pg-img :src="item.mainImageUrl" class="image border-radius"></pg-img>
					<div class="team_info">
						<div class="name title-color font_28">{{ item.groupName }}</div>
						<div class="grade text-color font_22">等级:&nbsp;&nbsp;{{ item.gradeName }}</div>
					</div>
				</div>
				<div class="team_option">
					<pg-button class="pg-btn text-color font_28" v-if="item.isDefault === 1">
						<pg-icon name="zhengquetishi" class="zhengquetishi_icon primary-color font_60"></pg-icon>
						<span class="title primary-color font_28">默认团队</span>
					</pg-button>
					<pg-button class="pg-btn text-color font_28" @click="defaultTeam(item.distributorLinkID)" v-else>
						<div class="zhengquetishi text-border-color font_48"></div>
						<span class="title text-color font_28">默认团队</span>
					</pg-button>
				</div>
			</li>
		</ul>
	</pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '../../../assets/css/variables';
	.team {
		.team_item {
			margin-bottom: 10/@rate;
			background-color: #fff;
			.team_content {
				border-bottom-width: 1/@rate;
				border-bottom-style: solid;
				padding: 24/@rate 30/@rate;
				text-align: left;
				font-size: 0;
				.image {
					width: 120/@rate;
					height: 120/@rate;
					vertical-align: top;
				}
				.team_info {
					display: inline-block;
					vertical-align: top;
					margin-left: 20/@rate;
					.name {
						margin-bottom: 20/@rate;
					}
				}
			}
		}
		.team_option {
			text-align: left;
			font-size: 0;
			padding: 30/@rate;
			.zhengquetishi_icon {
				margin-right: 20/@rate;
				vertical-align: middle;
			}
			.zhengquetishi {
				display: inline-block;
				border-width: 1/@rate;
				border-style: solid;
				width: 44/@rate;
				height: 44/@rate;
				border-radius: 100%;
				margin-right: 10/@rate;
				vertical-align: middle;
			}
		}
	}
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>