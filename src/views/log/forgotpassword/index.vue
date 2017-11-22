<template>
    <pg-main>
        <form class="pg-form border big">
            <div class="item disable-border-color">
                <input type="password" class="title-color" placeholder="输入新密码" v-model="form.password">
            </div>
            <div class="item disable-border-color">
                <input type="password" class="title-color" placeholder="再次输入新密码" v-model="againPassword">
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