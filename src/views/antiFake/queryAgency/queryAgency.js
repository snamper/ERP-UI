//推广新人
import { antiFake as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'


export default {
    data() {
        return {
            key:'',//关键字
            content:{},//内容  
            contentShow:false,//是否显示内容
        }
    },
    computed: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        // ...mapGetters([
        //     'teamList', //团队数据
        //     'currentTeam' ,//默认团队            
        // ])
    },
    mounted() {
        
    },
    methods: {
       
        //生成二维码
        query(){
            if (this.util.isEmpty(this.key)) {
                this.util.msg.error('请输入关键字')
                return
            }  

            ajax.queryCustomerByKey(this.key).then((result)=>{
                if(result == null){
                    this.util.msg.error('查询不到数据')
                    this.contentShow = false
                }else {
                    this.content = result
                    this.contentShow = true
                }
            })         
        },
              
    }
}