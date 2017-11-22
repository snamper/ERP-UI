<template>
    <div class="pg-search bg-color">
        <div class="box bg-color-base">
            <pg-icon name="sousuo" class="icon primary-color font_42"></pg-icon>
            <input type="text" class="text-color font_28" :placeholder="placeholder || '搜索'" v-model="keywords" @keyup.enter="search">
        </div>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-search {
        padding: 24/@rate 30/@rate;
        .box {
            position: relative;
            height: 74/@rate;
            border-radius: 74/2/@rate;
            line-height: 74/@rate;
            text-align: left;
            padding: 0 20/@rate;
            box-sizing: border-box;
            .icon {
                position: absolute;
                left: 20/@rate;
            }
            input {
                height: 74/@rate;
                width: 100%;
                padding-left: 50/@rate;
                padding-right: 10/@rate;
            }
        }
    }
</style>

<script type="text/babel">
	import search from './search'

	export default {
		...search
	}
</script>