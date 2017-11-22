<template>
    <pg-main>
        <form class="pg-form border big">
            <div class="item disable-border-color">
                <pg-icon class="disable-color" name="zhanghao"></pg-icon>
                <input type="text" class="title-color" placeholder="输入代理商账号" v-model="form.login">
            </div>
            <div class="item disable-border-color">
                <pg-icon class="disable-color" name="dianhua"></pg-icon>
                <input type="text" class="title-color" placeholder="输入注册所留手机" v-model="form.mobile">
            </div>
            <div class="item right disable-border-color">
                <input type="text" class="title-color" placeholder="输入短信验证码" v-model="form.code">
                <pg-button class="white-color primary-bg-color" :disabled="disabled" @click="sendSMS">发送验证码</pg-button>
            </div>
            <div class="item">
                <pg-button class="white-color primary-bg-color" size="big" @click="submit">提交</pg-button>
            </div>
        </form>
    </pg-main>
</template>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>