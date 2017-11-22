<template>
    <pg-aside>
        <pg-main top="0" base>
            <div class="header primary-bg-color">
                <div class="avatar bg-color-base">
                    <img src="../../../assets/images/default_avatar.png">
                </div>
            </div>
            <ul class="top-tab flex-ul bg-color">
                <li>
                    <router-link class="primary-color font_22" :to="{path: '/shopcartlist'}">
                        <pg-icon name="gouwuche" class="font_42"></pg-icon>
                        购物车
                    </router-link>
                </li>
                <li>
                    <router-link class="primary-color font_22" :to="{path: '/collect'}">
                        <pg-icon name="shoucang" class="font_42"></pg-icon>
                        收藏
                    </router-link>
                </li>
                <li>
                    <router-link class="primary-color font_22" :to="{path: '/defalutTeam'}">
                        <pg-icon name="wodetuandui" class="font_42"></pg-icon>
                        默认团队
                    </router-link>
                </li>
            </ul>
            <div class="pg-list bg-color">
                <div class="pg-list_item clearfix line-border-color">
                    <span class="pg-list_item_title font_28 title-color">个人信息设置</span>
                    <router-link class="pg-list_item_arrow text-color font_28" :to="{path: '/auth?callback=userInfo'}">修改</router-link>
                    <!-- <router-link class="pg-list_item_arrow text-color font_28" :to="{path: '/userInfo'}">修改</router-link> -->
                </div>
                <div class="pg-list_item clearfix line-border-color">
                    <span class="pg-list_item_title font_28 title-color">地址管理</span>
                    <router-link class="pg-list_item_arrow text-color font_28" :to="{path: '/addressList'}">管理</router-link>
                </div>
                <div class="pg-list_item clearfix line-border-color">
                    <span class="pg-list_item_title font_28 title-color">密码管理</span>
                    <router-link class="pg-list_item_arrow text-color font_28" :to="{path: '/auth?callback=password'}">修改</router-link>
                </div>
            </div>
            <pg-button class="warning-bg-color white-color no-radius" size="big" @click="logOut">退出登录</pg-button>
        </pg-main>
        <pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .header {
        padding: 41/@rate 0;
        .avatar {
            margin: 0 auto;
            width: 180/@rate;
            height: 180/@rate;
            border-radius: 100%;
            overflow: hidden;
            padding: 10/@rate;
            img {
                width: 100%;
            }
        }
    }
    .top-tab {
        padding: 22/@rate 0;
        i {
            display: block;
        }
    }
    .pg-list {
        margin-top: 20/@rate;
        &_item {
            padding: 30/@rate;
            border-bottom-style: solid;
            border-bottom-width: 1px;
            &_title {
                float: left;
            }
            &_arrow {
                float: right;
            }
        }
    }
    .pg-btn {
        margin-top: 80/@rate;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>