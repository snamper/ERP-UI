/**
 * 注册类型确认
 */
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            //路由过来的值
            routerForm:{
            },

        }
    },
    mounted(){
        this.routerForm = this.$route.query//团队id  
        this.infoTeam(this.routerForm)      
    },
    methods: {
        //保存注册携带的（团队id 档案id ...）
        ...mapActions([
            'infoTeam',
        ]),
        // 去注册
        register() {
            this.$router.push({
            	path: '/reg'
            })
        },
        //添加授权
        addAuthorization(){
            this.$router.push({
                path: '/auth',
                query:{
                    callback:"addauth"
                }
            })
        },
    }
}