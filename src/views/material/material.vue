<template>
    <pg-aside>
        <pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="50" v-infinite-scroll="getMaterialStockList">
            <div class="material bg-color line-border-color" v-for="item in materialList" v-if="!noData">
                <div class="avatar bg-color-base">
                    <pg-img class="logo" :src="companyInfo.loginLogo"></pg-img>
                </div>
                <span class="name font_28 primary-color">{{item.name}}</span>
                <span class="time font_22 text-color">{{item.editTime}}</span>
                <span class="description font_26 title-color">{{item.description}}</span>
                <ul class="imgs clearfix" v-if="item.fileType == 0">
                    <li v-for="file in item.imageUrls" @click="showHdImg(file)">
                        <pg-img :src="file"></pg-img>
                    </li>
                </ul>
                <ul class="files" v-else>
                    <li v-for="file in item.imageUrls">
                        <pg-icon class="text-color" name="sucaiku"></pg-icon>
                        <span class="filename text-color">{{file.substring(file.lastIndexOf('\/')+1)}}</span>
                        <a class="primary-color" :href="util.hostUrl() + file" target="_blank" v-if="!util.isWechat()">下载</a>
                    </li>
                </ul>
            </div>
            <pg-default-page 
                icon="sucaiku" 
                tip="目前没有素材" 
                v-if="noData">
            </pg-default-page>
        </pg-main>
        <transition name="opacity">
            <div class="confirm" @click="hideHdImg" v-show="isShow">
                <div class="confirm_bg"></div>
                <pg-img :src="tapImg"></pg-img>
            </div>
        </transition>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .confirm {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .confirm_bg {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: #000;
        }
        img {
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .material {
        position: relative;
        padding: 30/@rate 25/@rate;
        text-align: left;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        overflow-x: hidden;
        .avatar {
            position: absolute;
            width: 100/@rate;
            height: 100/@rate;
            border-radius: 100%;
            overflow: hidden;
            img {
                width: 100%;
            }
        }
        .name, .time {
            display: block;
            margin-left: 120/@rate;
            overflow: hidden;
            height: 50/@rate;
            line-height: 50/@rate;
        }
        .description {
            display: block;
            padding: 20/@rate 0;
            line-height: 1.4;
        }
        .imgs {
            margin-left: -5/@rate;
            li {
                cursor: pointer;
                float: left;
                width: 230/@rate;
                height: 230/@rate;
                overflow: hidden;
                margin-left: 5/@rate;
                img {
                    width: 100%;
                }
            }
        }
        .files {
            li {
                height: 60/@rate;
                line-height: 60/@rate;
            }
        }
    }
    .opacity-enter-active {
        animation: opacityin .35s;
    }
    .opacity-leave-active {
        animation: opacityout .35s;
    }
    @keyframes opacityin {
        0% { opacity: 0 }
        100% { opacity: 1 }
    }
    @keyframes opacityout {
        0% { opacity: 1 }
        100% { opacity: 0 }
    }
</style>

<script type="text/babel">
    import material from './material'
    export default {
        ...material
    }
</script>