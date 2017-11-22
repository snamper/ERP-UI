<template>
    <pg-aside>
        <pg-main top="0" base>
            <div class="banner" v-if="companyInfo.carouselImages!=null&&companyInfo.carouselImages.length>0">
                <swiper :options="swiperOption">
                    <swiper-slide  v-for="swiper in companyInfo.carouselImages">
                        <em v-if="swiper.basTextID != null" >
                            <a :href="swiper.url" v-if="swiper.url !=''"><pg-img :src="swiper.imageUrl"></pg-img></a>
                            <router-link v-else :to="{path:'/swiper',query:{'content':swiper.content}}"><pg-img :src="swiper.imageUrl"></pg-img></router-link>
                        </em>
                        <em v-else>
                            <pg-img :src="swiper.newPath"></pg-img>
                        </em>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <div class="account primary-bg-color clearfix">
                <div class="user bg-color border-radius">
                    <div class="avatar">
                        <div class="avatar_img primary-bg-color">
                            <pg-img :src="customerInfo.headImgUrl" v-if="customerInfo.headImgUrl"></pg-img>
                            <img v-else src="../../assets/images/default_avatar.png">
                        </div>
                        <div class="avatar_name title-color font_28">
                            {{customerInfo.name}}
                        </div>
                    </div>
                    <ul class="info">
                        <li @click="showMyBrand">
                            <pg-icon name="qiehuan" class="primary-color font_42"></pg-icon>
                            <span class="title title-color font_28">{{currentTeam.groupName}}</span>
                        </li>
                        <li>
                            <pg-icon name="dianjitishi" class="primary-color font_42"></pg-icon>
                            <span class="title title-color font_28">{{customerInfo.gradeName}}</span>
                        </li>
                        <li>
                            <pg-icon name="chakan" class="primary-color font_42"></pg-icon>
                            <span class="title title-color font_28">上级：{{customerInfo.parentName}}</span>
                        </li>
                    </ul>
                    <div class="upgrade">
                    </div>
                </div>
                <!-- 充值模式 -->
                <div class="recharge" v-if="currentTeam.isRechargeMode">
                    <div class="clearfix com bg-color border-radius">
                        <div class="left">
                            <div class="title-color font_28">余额</div>
                            <div class="amount warning-color font_24">{{balanceMoney}}</div>
                        </div>
                        <div class="right">
                            <router-link class="success-bg-color white-color font_28 border-radius" :to="{path: '/balance'}">充值</router-link>
                        </div>
                    </div>
                    <div class="clearfix com bg-color border-radius">
                        <div class="left">
                            <div class="title-color font_28">佣金</div>
                            <div class="amount warning-color font_24">{{commission}}</div>
                        </div>
                        <div class="right">
                            <router-link class="commission title-border-color title-color font_28 border-radius" :to="{path: '/commission'}">提现</router-link>
                        </div>
                    </div>
                </div>
                <!-- 不充值模式 -->
                <div class="money bg-color border-radius" v-else>
                    <div class="title-color font_28">佣金</div>
                    <div class="amount warning-color font_24">{{commission}}</div>
                    <router-link class="success-bg-color white-color font_28 border-radius" :to="{path: '/commission'}">提现</router-link>
                </div>
            </div>
            </div>
            <div class="msg clearfix bg-color">
                <pg-icon name="tongzhi" class="icon font_42" :class="[msgUnReadList.length > 0 ? 'primary-color' : 'text-color']"></pg-icon>
                <span class="title text-color font_24"  v-if="msgUnReadList.length == 1">{{msgUnReadList[0].subject}}</span>
                <span class="title text-color font_24" v-else>{{msgUnReadList.length}}&nbsp;条未读消息</span>
                <router-link class="more primary-color font_24" :to="{path: '/announcement'}">更多</router-link>
            </div>
            <ul class="menu clearfix">
                <li v-for="menu in menuList">
                    <router-link class="bg-color border-radius" :to="{path: menu.url}">
                        <pg-icon :name="menu.icon" class="primary-color font_60"></pg-icon>
                        <span class="title text-color font_28">{{menu.name}}</span>
                    </router-link>
                </li>
            </ul>
        </pg-main>
        <pg-confirm ref="confirm">
            <ul class="team-list">
                <li class="disable-border-color" v-for="item in teamList">
                    <img class="cover">
                    <span class="title font_30 title-color">{{item.groupName}}</span>
                    <pg-radio class="radio" :label="item" v-model="currentTeamModel"></pg-radio>
                </li>
            </ul>
        </pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .banner {
        width: 100%;
        height: 270/@rate;
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
        .recharge {
            float: right;
            width: 268/@rate;
            height: 230/@rate;
            .amount {
                height: 48/@rate;
                line-height: 48/@rate;
            }
            .com {
                width: 268/@rate;
                height: 110/@rate;
                padding: 15/@rate;
                &:last-child {
                    margin-top: 10/@rate;
                }
                .left {
                    float: left;
                    div {
                        width: 103/@rate;
                        height: 50/@rate;
                        line-height: 50/@rate;
                        &:last-child {
                            height: 30/@rate;
                            line-height: 30/@rate;
                        }
                    }
                }
                .right {
                    float: right;
                }
            }
            a {
                display: block;
                width: 120/@rate;
                height: 50/@rate;
                line-height: 50/@rate;
                margin-top: 15/@rate;
                &.commission {
                    border-style: solid;
                    border-width: 1px;
                }
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
        padding: 20/@rate 0;
        margin-left: 10/@rate;
        li {
            float: left;
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
    import home from './home'
    export default {
        ...home
    }
</script>