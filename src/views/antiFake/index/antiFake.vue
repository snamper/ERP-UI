<template>
    <pg-aside>
        <pg-main top="-88" base>
            <div class="banner">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="item in detail.imageUrls" >
                        <pg-img :src="item" alt=""></pg-img>
                    </swiper-slide>
                
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <ul class="menu">
                <li >
                    <router-link class="bg-color border-radius" :to="{path:'/wechat'}" >
                        <pg-icon name='weixin1' class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">微信关注</span>
                    </router-link>
                </li>
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/queryagency'}" >
                        <pg-icon name="sousuo1" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">代理查询</span>
                    </router-link>
                </li>
                <!-- <li >
                    <router-link class="bg-color border-radius " :to="{path:'/company',query:{'type':6,'merchantCode':merchantCode}}" >
                        <pg-icon name="Report" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">公司介绍</span>
                    </router-link>
                </li>
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/product',query:{'type':7,'merchantCode':merchantCode}}" >
                        <pg-icon name="Report" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">产品介绍</span>
                    </router-link>
                </li> -->
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/debate',query:{'merchantCode':merchantCode}}" >
                        <pg-icon name="zhengpin" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">防伪查询</span>
                    </router-link>
                </li>
                
                
                <!-- <li >
                    <router-link class="bg-color border-radius " :to="{path:'/notice',query:{'type':8,'merchantCode':merchantCode}}" >
                        <pg-icon name="Report" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">最新公告</span>
                    </router-link>
                </li> -->
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/report', query:{'qrCodeID':detail.qrCodeID}}">
                        <pg-icon name="sousuo1" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">质检报告</span>
                    </router-link>
                </li>
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/productIntroduction', query:{'qrCodeID':detail.qrCodeID}}">
                        <pg-icon name="sousuo1" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">产品详情</span>
                    </router-link>
                </li>
                <li >
                    <router-link class="bg-color border-radius " :to="{path:'/authorization',query:{'qrCodeID':detail.qrCodeID}}">
                        <pg-icon name="sousuo1" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">授权书</span>
                    </router-link>
                </li>
            </ul>
        </pg-main>
        <!--<pg-confirm ref="confirm">
            <ul class="team-list">
                <li class="disable-border-color" v-for="item in teamList">
                    <img class="cover">
                    <span class="title font_30 title-color">{{item.groupName}}</span>
                    <pg-radio class="radio" :label="item" v-model="currentTeamModel"></pg-radio>
                </li>
            </ul>
        </pg-confirm>-->
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .banner {
        width: 100%;
        height: 270/@rate;
        margin-top: 88/@rate;
    }
    .account {
        padding: 20/@rate;
        .user {
            float: left;
            width: 432/@rate;
            height: 230/@rate;
            .avatar {
                display: inline-block;
                padding: 40/@rate 20/@rate;
                float: left;
                &_img {
                    width: 105/@rate;
                    height: 105/@rate;
                    border-radius: 100%;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                &_name {
                    margin-top: 20/@rate;
                    width: 105/@rate;
                }
            }
            .info {
                float: right;
                width: 287/@rate;
                display: inline-block;
                padding: 34/@rate 20/@rate;
                li {
                    text-align: left;
                    height: 54/@rate;
                    line-height: 54/@rate;
                    span {
                        line-height: 54/@rate;
                        vertical-align: top;
                        white-space: nowrap;
                        display: inline-block;
                        width: 180/@rate;
                        overflow: hidden;
                    }
                }
            }
        }
        .money {
            float: right;
            width: 268/@rate;
            height: 230/@rate;
            padding: 42/@rate 0;
            .amount {
                height: 48/@rate;
                line-height: 48/@rate;
            }
            a {
                display: block;
                width: 160/@rate;
                height: 70/@rate;
                line-height: 70/@rate;
                margin: 0 auto;
            }
        }
    }
    .msg {
        padding: 0 30/@rate;
        text-align: left;
        height: 72/@rate;
        line-height: 72/@rate;
        .icon {
            float: left;
        }
        .title {
            display: inline-block;
            margin: 0 15/@rate;
        }
        .more {
            float: right;
        }
    }
    .menu {
        padding: 20/@rate 10/@rate;
        margin-left: -10/@rate;
        li {
            display: inline-block;
            width: 230/@rate;
            margin-left: 10/@rate;
            margin-bottom: 10/@rate;
            a {
                display: block;
                padding: 55/@rate 0;
                .title {
                    padding-top: 20/@rate;
                    display: block;

                }
            }
        }
    }
    .team-list {
        li {
            position: relative;
            text-align: left;
            padding: 20/@rate;
            &:not(:last-child) {
                border-bottom-width: 1px;
                border-bottom-style: solid;
            }
            .cover {
                width: 80/@rate;
                height: 80/@rate;
                text-align: left;
            }
            .title {
                height: 80/@rate;
                line-height: 80/@rate;
                display: inline-block;
                vertical-align: top;
                margin-left: 40/@rate;
            }
            .radio {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>

<script type="text/babel">
    import antiFake from './antiFake'
    export default {
        ...antiFake
    }
</script>