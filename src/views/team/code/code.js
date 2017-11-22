//查看二维码
import { team as ajax } from 'services'

export default {
    data() {
        return {
            //路由值
            codeList:{
                codeImg:'',
                groupName:'',
                desc:''
            },
            hour : null ,//小时
            minute : null ,//分钟
            second : null ,//秒  
            timeText: "",//时间文本  
            timeNum: null,//转换的秒
            hourNum: 2,//传过来的时间
            setitimer:null,//倒计时函数

        }
    },
    mounted() {
        this.codeList = this.$route.query
        this.hourNum = this.$route.query.hour

    //  小时 1*60*60 = 秒        
    // 分钟 1*60 = 秒
    // 秒 1*1000 = 毫秒
    // 1小时1分30秒 =（ 1*60*60 + 1*60 + 30）*1000
        this.timeNum = new Date().getTime() + this.hourNum * 60 * 60 * 1000//1*60*60*1000距离结束的时间
            
        this.setitimer = setInterval(()=>{  //每秒调用一次          
            this.timer()
        },1000)
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
        declineUpgrade(){
            this.$router.push('/promotionTeam')


        },
    }
}