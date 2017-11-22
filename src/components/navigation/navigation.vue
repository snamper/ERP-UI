<template>
    <div class="navigation primary-bg-color" 
         :class="[
            maskShow ? 'filter' : 'none_filter'
         ]"
        v-show="isShow">
        <a class="back" href="javascript:void(0)" v-if="upNav !== '/' && backPath !== '/'" @click="back">
            <pg-icon name="fanhui" class="white-color font_38"></pg-icon>
        </a>
        <span class="title white-color font_38">{{title}}</span>
        <pg-icon name="zhuye" class="home white-color font_42" @click="goHome" v-if="showHomeButton"></pg-icon>
        <pg-icon :name="navButton.icon" class="btn white-color font_42" @click="goPath" v-if="navButton.icon"></pg-icon>
        <router-link class="btn white-color font_36" :to="{path: navButton.path}" v-if="navButton.label && !navButton.icon">{{navButton.label}}</router-link>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .navigation {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 88/@rate;
        line-height: 88/@rate;
        .back {
            position: absolute;
            left: 25/@rate;
            top: 0;
            width: 88/@rate;
            height: 88/@rate;
            text-align: left;
        }
        .home {
            position: absolute;
            right: 30/@rate;
        }
        .btn {
            position: absolute;
            right: 30/@rate;
        }
    }
</style>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'PgNav',
        data() {
            return {
                title: '',
                upNav: '',
                showHomeButton: false,
                navButton: {},
                backPath: '',
                isShow: true
            }
        },
        watch: {
            '$route'(to, from) {
                this.title = to.meta.title || ''
                this.upNav = from.path
                this.showHomeButton = to.meta.showHomeButton || false
                this.navButton = to.meta.navButton || {}
                this.backPath = to.meta.back || ''
                if (to.path == '/login' || to.path == '/gesture') {
                    this.isShow = false
                }
                else {
                    this.isShow = true
                }

                this.setMaskShow(false)
            }
        },
        computed: {
            ...mapGetters([
                'maskShow', // 全局遮罩层控制
            ])
        },
        methods: {
            ...mapActions([
                    'setMaskShow'
                ]),
            back() {
                if (this.backPath != '') {
                    this.$router.push(this.backPath)
                }
                else {
                    this.$router.go(-1)
                }
            },
            goHome() {
                this.$router.push('/home')
            },
            goPath() {
                this.$router.push(this.navButton.path)
            }
        }
    }
</script>