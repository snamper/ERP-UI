/**
 * 身份验证
 */

import { account as ajax } from 'services'

export default {
    data() {
        return {
            disabled: true, // 发送验证码按钮默认禁止
            form: {
                login: '', // 登录账户
                mobile: '', // 手机号码
                code: '' // 验证码
            },
            redirect: '' // 验证成功之后跳转的地址
        }
    },
    mounted() {
        if (this.$route.query.callback) {
            this.redirect = this.$route.query.callback
        }
        else {
            this.$router.go(-1)
        }
    },
    watch: {
        'form.mobile'() {
            this.disabled = !this.util.checkMobile(this.form.mobile)
        }
    },
    methods: {
        // 发送验证码
        sendSMS() {
            if (this.util.isEmpty(this.form.login)) {
                this.util.msg.error('请输入代理商账号')
                return
            }
            if (this.util.isEmpty(this.form.mobile)) {
                this.util.msg.error('请输入注册所留手机')
                return
            }
            if (!this.util.checkMobile(this.form.mobile)) {
                this.util.msg.error('手机号码格式错误')
                return
            }
            if (this.disabled) {
                return
            }

            ajax.sendSMS(this.form).then((result) => {
                this.util.msg.success('验证码已发送，请注意查收')
            })
        },
        // 提交
        submit() {
            if (this.util.isEmpty(this.form.code)) {
                this.util.msg.error('请输入短信验证码')
                return
            }
            ajax.validateIdentity(this.form).then((result) => {
                this.$router.push({
                    name: this.redirect,
                    query: {
                        type: 'update',
                        scrambleString: result
                    }
                })
            })
        }
    }
}