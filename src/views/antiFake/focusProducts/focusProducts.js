//查看二维码
import { antiFake as ajax } from 'services'

export default {
    data() {
        return {
            detail:{},//防伪详情
            detectCode:'',
            merchantCode:'',
        }
    },
    mounted() {
        this.merchantCode = this.$route.query.merchantCode;
        console.info(this.merchantCode)
    },
    methods: {
        //查询详细信息
        queryDetailByCode(){
            ajax.queryDetailByCode({IsUpdateCheck:1, detectCode:this.detectCode, merchantCode:this.merchantCode})
                .then(result=>{
                    this.detail = result;
                })
        }
    }
}