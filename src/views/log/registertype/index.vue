<template>
    <pg-main top="0">
        <img class="banner" src="../../../assets/images/res_banner.jpg">
        <div class="content">
            <pg-button class="white-color primary-bg-color" size="big" @click="register">我是新注册</pg-button>
            <pg-button class="white-color primary-bg-color" size="big" @click="addAuthorization">我是增加授权</pg-button>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .banner {
        width: 100%;
    }
    .content {
        padding: 50/@rate 90/@rate;
        a {
            margin: 60/@rate 0;
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>