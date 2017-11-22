/**
 * 注册
 */
import { team as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            //注册参数
            query: {
                distributorLinkID: "",//推荐人档案ID，推荐人的档案-根据档案ID没有得到团队ID和推荐人的客户ID ,
                customerGradeID: "",//等级id
                wechat: "",//微信号 
                name: "", //真实姓名 
                mobile: "",//手机号 
                certNo: "",//身份证
                state: '',
                city: '',
                district: '',
                passWord: ""//密码，修改的时候传空则保留原先密码 
            },
            customerGradeList:[],//等级下拉数据
            isShow: true,//显示隐藏
        }
    },
    computed: {
        ...mapGetters([
            'infoTeam', //注册携带的（团队id 档案id ...）
        ])
    },
    mounted(){
        this.query.distributorLinkID = this.infoTeam.DistributorLinkID //档案id
        this.query.customerGradeID = this.infoTeam.CustomerGradeID // 等级id

        if (this.util.isEmpty(this.query.customerGradeID) || this.query.customerGradeID === '00000000-0000-0000-0000-000000000000') {
            this.isShow = false
            this.basCustomerGradeList() //请求下拉等级
        } else {
            this.isShow = true
        }
        
    },
    methods: {
        //获取等级下拉
        basCustomerGradeList(){
            ajax.getBasCustomerGradeList(this.infoTeam.DistributorGroupID).then((result)=>{
                this.customerGradeList = result
            })
        },
        //上传二维码
        uploadSuccess(val){
            this.query.qrCodeImg = val
        },
        //填写完成并提交
        addUpdateCustomer(){
            if (this.util.isEmpty(this.query.customerGradeID)) {
                this.util.msg.error('请选择等级')
                return
            } 
            if (this.util.isEmpty(this.query.name)) {
                this.util.msg.error('请填写您的真实姓名')
                return
            }
            if (this.util.isEmpty(this.query.wechat)) {
                this.util.msg.error('请填写您的微信号')
                return
            }
            if(!(/^1[34578]\d{9}$/.test(this.query.mobile))){ 
                this.util.msg.error('请填写正确的手机号')
                return
            } 
            if(!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(this.query.certNo))) {
                this.util.msg.error('请填写合法的身份证号')  
                return               
            }

            if (this.util.isEmpty(this.query.state)) {
                this.util.msg.error('请选择地址')
                return
            }

            ajax.createDistributoinAccountFromIntror(this.query).then((result)=>{
                    this.$router.push({
                        path:'/regSuccess',
                        query:{
                            name: this.query.wechat,
                        }
                    })
                       
            })
        },
        // 省市区选择到的值
        change(val) {
            this.query.state = val.state
            this.query.city = val.city
            this.query.district = val.district
        }
    }
}