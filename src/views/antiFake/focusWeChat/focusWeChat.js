//查看二维码
import { antiFake as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
           config:{}//配置内容

        }
    },
    computed: {
        ...mapGetters([
            'companyInfo',
        ])
    },
    mounted() {
       this.queryConfig()
    },
    methods: {
        
        //时间倒计时
        timer(){
                this.ts = this.timeNum - new Date().getTime()
                this.hour = parseInt(this.ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数  
                this.minute = parseInt(this.ts / 1000 / 60 % 60, 10);//计算剩余的分钟数  
                this.second = parseInt(this.ts / 1000 % 60, 10);//计算剩余的秒数  
                this.timeText =  this.checkTime(this.hour) + ":" + this.checkTime(this.minute) + ":" + this.checkTime(this.second)
                if(this.hour == 0 && this.minute == 0 && this.second == 0) {
                    clearInterval(this.setitimer)
                    this.timeText = "已过期"                    
                }    
        },
        //转换时间格式
        checkTime(i){    
           if (i < 10) {    
               i = "0" + i;    
            }    
           return i;    
        },
        //继续生成
        queryConfig(){
            ajax.queryConfig()
                .then(resut=>{
                    this.config = result;
                })


        },
    }
}