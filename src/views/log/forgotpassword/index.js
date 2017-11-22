/**
 * 修改密码
 */

import { account as ajax } from 'services'
import cookie from 'js-cookie'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            disabled: true,
            form: {
                scrambleString: '',
                password: ''
            },
            againPassword: '' // 确认密码
        }
    },
    mounted() {
        if (this.$route.query.scrambleString) {
            this.form.scrambleString = this.$route.query.scrambleString
        }
        else {
            this.$router.go(-1)
        }
    },
    methods: {
        ...mapActions([
            'removeAuth'
        ]),
        // 提交
        submit() {
            if (this.util.isEmpty(this.form.password)) {
                this.util.msg.error('请输入新密码')
                return
            }
            if (this.util.isEmpty(this.againPassword)) {
                this.util.msg.error('请再次输入新密码')
                return
            }
            if (this.form.password != this.againPassword) {
                this.util.msg.error('两次密码输入不一致')
                return
            }
            ajax.resetPassword(this.form).then((result) => {
                cookie.remove('login')
                this.removeAuth()
                this.util.msg.success('密码修改成功')
                this.$router.push('/login')
            })
        }
    }
}