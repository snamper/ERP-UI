<template>
    <pg-main top="-88">
        <div class="bg">
            <img v-if="companyInfo.loginBackImage == null" src="../../../assets/images/bg.png">
            <pg-img v-else :src="companyInfo.loginBackImage"></pg-img>
            <div class="login-bg-color"></div>
        </div>
        <img v-if="companyInfo.loginLogo == null" class="logo" src="../../../assets/images/logo.png">
        <pg-img class="logo" v-else :src="companyInfo.loginLogo"></pg-img>
        
        <form class="pg-form border big white-color">
            <div class="item login-border-color">
                <pg-icon name="zhanghao"></pg-icon>
                <input type="text" class="white-color" placeholder="代理商账号" v-model="form.login">
            </div>
            <div class="item login-border-color">
                <pg-icon name="mima"></pg-icon>
                <input type="password" class="white-color" placeholder="代理商密码" v-model="form.password">
            </div>
            <div class="item">
                <pg-button class="primary-bg-color white-color btn-login" size="big" circle @click="login">登录</pg-button>
            </div>
        </form>
        <div class="foot">
        <router-link class="forgetpass white-color font_28" :to="{path: '/auth?callback=password'}">忘记密码</router-link>
            <div class="tip white-color">
                <div class="title font_24"><span class="line bg-color"></span><span class="txt">提示</span><span class="line bg-color"></span></div>
                <span class="text font_24">默认账号为您的“微信号”</span>
            </div>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .bg {
        z-index: -1;
        position: absolute;
        left: 0;
        top: -128/@rate;
        width: 100%;
        bottom: 0;
        div {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.6;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .logo {
        margin-top: 120/@rate;
        width: 270/@rate;
        height: 150/@rate;
    }
    .btn-login {
        margin-top: 80/@rate;
    }
    .forgetpass {
        display: block;
        text-align: right;
        margin-top: 40/@rate;
        margin-right: 25/@rate;
    }
    .foot {
        padding: 0 90/@rate;
        .tip {
            .title {
                margin: 60/@rate 50/@rate 40/@rate 50/@rate;
                height: 24/@rate;
                line-height: 24/@rate;
                span {
                    display: inline-block;
                }
                .txt {
                    width: 19.9%;
                }
                .line {
                    display: inline-block;
                    width: 40%;
                    height: 1px;
                    vertical-align: middle;
                    opacity: 0.6;
                }
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