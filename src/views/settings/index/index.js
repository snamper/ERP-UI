/**
 * 设置主页
 */
import cookie from 'js-cookie'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            confirm: { // 弹出框配置
                title: '提示',
                content: '确定退出登录吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
        }
    },
    methods: {
        ...mapActions([
            'removeAuth',
            'removeTeamCache'
        ]),
        // 退出登录
        logOut() {
            this.$refs.confirm.open().then(() => {
                this.$refs.confirm.close()
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                    cookie.remove('login')
                    this.removeAuth()
                    this.removeTeamCache()
                    this.$router.push('/login')
                }, 1000)
            })
        }
    }
}