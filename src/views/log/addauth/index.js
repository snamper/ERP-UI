/**
 * 注册类型确认
 */
import { team as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            //添加授权参数
            query:{
                scrambleString: "",//经过身份认证后得到的标识码 
                distributorLinkID: "",//推荐人的档案ID 
                distributorGroupID: "",//用户目标团队ID
                customerGradeID: "" //用户目标等级
            },
            customerGradeList: [],//等级下拉数据
            isShow:true,//显示隐藏

        }
    },
    computed: {
        ...mapGetters([
            'infoTeam', //注册携带的（团队id 档案id ...）
        ])
    },
    mounted(){
        this.query.scrambleString = this.$route.query.scrambleString //手机号验证后的加密 key
        this.query.distributorLinkID = this.infoTeam.DistributorLinkID //档案id
        this.query.distributorGroupID = this.infoTeam.DistributorGroupID  //团队id
        this.query.customerGradeID = this.infoTeam.CustomerGradeID // 等级is


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
        //添加并注册
        addUpdateCustomer(){
            if (this.util.isEmpty(this.query.customerGradeID)) {
                this.util.msg.error('请选择等级')
                return
            }

            ajax.addLinkAuthorization(this.query).then((result)=>{
                    this.$router.push('/gesture')

            })
        },
    }
}