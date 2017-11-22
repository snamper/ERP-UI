//我要升级
import { team as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            query:{
                groupId: "",//团队ID
                upCustomerID: "",//新上级ID
                upCustomerGradeID: "",//选择升级等级ID
                fileUrl: "",//凭证路径
                note: "",//备注
                userName :"",//           
            },
            //获取上级信息
            form:{
                upCustomerGradeId: "",//要升级的等级ID
                distributorGroupID: "",//团队ID
            },            
            customerGradeList: [],//等级下拉列表数据
            upCustomerInfoObject: {},//新上级信息
        }
    },
    computed: {
        ...mapGetters([
            'teamList',//所有团队数据
            'currentTeam'//默认团队数据
        ])
    },
    mounted() {
        console.log(this.teamList)
        this.query.groupId = this.currentTeam.distributorGroupID  //团队id
        this.getBasCustomerGradeList()  //获取下拉等级

    },
    methods: {
        //清空表单
        resetform(){
            this.query = {
                groupId: "",//团队ID
                upCustomerID: "",//新上级ID
                upCustomerGradeID: "",//选择升级等级ID
                fileUrl: "",//凭证路径
                note: "",//备注
                customerID: "" // 当前代理商ID
            }
            this.upCustomerInfoObject = {} //清空获取的上级信息
        },
        //代理商提交升级申请（微信端我的团队）
        addAudit(){
            if (this.util.isEmpty(this.query.upCustomerGradeID)) {
                this.util.msg.error('请选择等级')
                return
            } 
            if (this.util.isEmpty(this.query.fileUrl)) {
                this.util.msg.error('请上传打款凭证')
                return
            } 
            console.log(this.query)
            ajax.upDistributorGradeApply(this.query).then((result)=>{
                this.util.msg.success('申请成功')
                this.resetform() //清空表单
            })
        },
        //获取等级下拉
        getBasCustomerGradeList(){
            ajax.selectUpGradeList(this.query.groupId).then((result)=>{
                this.customerGradeList = result
            })
        },
        //获取上级信息
        getSelectUpCustomerDetail(){
            this.form.upCustomerGradeId = this.query.upCustomerGradeID //等级id
            this.form.distributorGroupID = this.query.groupId  //团队id
            ajax.selectUpCustomerDetail(this.form).then((result)=>{
                this.upCustomerInfoObject = result //新上级信息
                console.log(result)
                this.query.upCustomerID = this.upCustomerInfoObject.customerID  //新上级ID

            })
        },        
        //选择团队获取等级
        updateTeam(){

            if(this.query.upCustomerGradeID == ""){
                this.upCustomerInfoObject = {} //清空获取的上级信息
                return 
            }
            this.getSelectUpCustomerDetail() //获取上级信息
                      
        },
        // 图片上传成功
        uploadSuccess(val) {
            this.query.fileUrl = val //上传凭证imgurl
        },
    }
}