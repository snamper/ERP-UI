<template>
	<pg-main top="0" class="goods-detail" base>
        <div class="banner">
            <swiper :options="swiperOption">
                <pg-swiper :list="details.subImages"></pg-swiper>
            </swiper>
        </div>
        <div class="info bg-color">
            <span class="title title-color font_28">{{details.name}}</span>
            <span class="price primary-color font_28">￥{{details.price}}</span>
            <!-- <span class="size text-color font_22">规格</span> -->
        </div>
        <div class="content bg-color">
            <span class="title title-color font_28">图文详情</span>
            <div class="intro" v-html="details.content"></div>
        </div>
    </pg-main>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~assets/css/variables';
    .goods-detail {
        .banner {
            width: 100%;
            height: 540/@rate;
        }
        .info {
            text-align: left;
            padding: 30/@rate;
            span {
                display: block;
            }
            .price {
                padding: 25/@rate 0;
            }
        }
        .content {
            margin-top: 10/@rate;
            padding: 30/@rate 0;
            .title {
                display: block;
            }
            .intro {
                text-align: left;
                margin-top: 50/@rate;
                line-height: 1.5;
            }
        }
    }

</style>

<script type="text/babel">
	import goodsdetails from './goodsDetails'

	export default {
		...goodsdetails
	}
</script>