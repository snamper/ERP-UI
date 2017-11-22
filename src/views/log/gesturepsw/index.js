/**
 * 手势密码
 */

import PatternLock from '../../../static/patternLock'
import cookie from 'js-cookie'
import { account as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            lock: null, // 手势密码对象
            tip: '请绘制手势密码',
            isError: false, // 是否有错,
            hasHandPassword: true, // 是否设置了手势密码，默认为true
            handPassword: '', // 手势密码
            againPassword: false, // 第二次输入手势密码
            account: '' // 账户信息
        }
    },
    methods: {
        ...mapActions([
            'setAuth'
        ]),
        // 手势密码验证
        checkingLock(pattern) {
            if (this.hasHandPassword) {
                // 设置了手势密码
                this.handPassword = pattern
                this.handPasswordLogin()
            }
            else {
                // 没有设置手势密码
                if (this.againPassword) {
                    // 第二次输入手势密码
                    if (this.handPassword == pattern) {
                        // 两次绘制密码一致
                        this.lock.success()
                        this.isError = false
                        this.setHandPassword()
                    }
                    else {
                        // 两次绘制密码不一致
                        this.lock.error()
                        this.againPassword = false
                        this.handPassword = ''
                        this.tip = '两次密码不一致，请重新设置'
                        this.isError = true
                    }
                }
                else {
                    // 第一次输入手势密码
                    this.lock.reset()
                    this.againPassword = true
                    this.handPassword = pattern
                    this.tip = '请确认手势密码'
                    this.isError = false
                }
            }
        },
        // 设置手势密码
        setHandPassword() {
            ajax.setHandPassword({
                scrambleString: this.account.scrambleString,
                password: this.handPassword
            }).then((result) => {
                this.account.hasHandPassword = true
                cookie.set('login', this.account)
                this.handPasswordLogin()
            })
        },
        // 忘记手势密码
        forgotPassword() {
            cookie.remove('login')
            this.$router.push('/auth?callback=gesture')
        },
        // 手势密码登录
        handPasswordLogin() {
            ajax.auth({
                username: this.account.login,
                password: this.handPassword,
                grant_type: 'password',
                scope: 'APP'
            }).then((result) => {
                this.setAuth(result.access_token)
                this.$router.push('/home')
            })
        }
    },
    mounted() {
        this.account = JSON.parse(cookie.get('login'))
        // 判断是否是修改手势密码
        if (this.$route.query.type && this.$route.query.type == 'update') {
            this.hasHandPassword = false
        }
        else {
            this.hasHandPassword = this.account.hasHandPassword
        }

        // 重置身份验证码
        if (this.$route.query.scrambleString) {
            this.account.scrambleString = this.$route.query.scrambleString
        }

        if (this.hasHandPassword) {
            this.tip = '请绘制手势密码'
        }
        else {
            this.tip = '请设置手势密码'
        }

        const that = this
        this.lock = new PatternLock('.patternContainer', {
            radius: 34,
            // allowRepeat: true,
            onDraw: function(pattern) {
                that.checkingLock(pattern)
            }
        })
    },
}