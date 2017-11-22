<template>
    <swiper :options="swiperOption">
<!--         <swiper-slide>
            <img src="../../assets/images/res_banner.jpg">
        </swiper-slide>
        <swiper-slide>
            <img src="../../assets/images/res_banner_2.jpg">
        </swiper-slide> -->
        <swiper-slide v-for="item in list">
            <pg-img :src="item"></pg-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script type="text/babel">
    export default {
        name: 'PgSwiper',
        props: {
            list: Array
        },
        data() {
            return {
                swiperOption: { // banner滚动配置
                    autoplay: 2000,
                    loop: true,
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                }
            }
        }
    }
</script>