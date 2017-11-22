import { mapActions, mapGetters } from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
            //提交充值参数
            query: {
                value: "",//申请金额 
                distributorGroupID: "",//团队id
                url: "" ,//打款截图
                note: "",//备注信息
            },
            parentInfo:{},//上级信息
            financeObj: {},
		}
	},
	computed: {
        ...mapGetters([
            'teamList',
            'currentTeam',
            'customer',
        ])
    },
	mounted() {
        console.log(this.currentTeam)
        console.log(this.teamList)
        console.log(this.customer)

        this.query.distributorGroupID = this.currentTeam.distributorGroupID //团队id

        this.getInfo() //获取上级信息及二维码
        this.getFinanceInfo()

	},
	methods: {
        //获取用户财务信息和需要充值审核的数据
        getFinanceInfo(){
            ajax.getCustomerFinanceInfo(this.currentTeam.distributorLinkID).then((result)=>{
                this.financeObj = result
                console.log(result)
            })
        },

        // 图片上传成功
        uploadSuccess(val) {
            this.query.url = val //上传凭证imgurl
            console.log(val)
        },
        //清空表单
        resetQuery(){

            this.query = {
                value: "",//申请金额 
                distributorGroupID: "",//团队id
                url: "" ,//打款截图
                note: "",//备注信息
            }
            this.query.distributorGroupID = this.currentTeam.distributorGroupID //团队id
        },
        //获取上级信息及二维码
        getInfo(){
            ajax.getOrderParentInfo(this.currentTeam.distributorLinkID).then((result)=>{
                console.log(result)
                this.parentInfo = result
            })
        },
        //提交充值
        submit() {

            if (this.util.isEmpty(this.query.value)) {
                this.util.msg.error('请输入充值金额 ')
                return
            }
            if (this.query.value <= 0) {
                this.util.msg.error('请输入正确的充值金额 ')
                return
            } 
            if (this.util.isEmpty(this.query.url)) {
                this.util.msg.error('请上传打款截图')
                return
            } 

            // if (this.util.isEmpty(this.query.url)) {
            //     this.util.msg.error('充值前清河上级沟通好')
            //     return
            // } 
            ajax.payApply(this.query).then((result)=>{
                console.log(result)
                this.util.msg.success('充值成功')
                this.resetQuery()
            })
        },
        //跳转到充值记录页面
        toRechargeInfo() {
            this.$router.push({
                path:"/rechargeInfo"
            })
        },
	},
}