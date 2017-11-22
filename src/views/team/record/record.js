//我的团队
import { team as ajax } from 'services'

export default {
    data() {
        return {
            teamList:[//下拉列表
                 {
                    flag: -1,
                    text: '全部'
                },           
                {
                    flag: 0,
                    text: '待审核'
                },
                {
                    flag: 1,
                    text: '已同意'
                },
                {
                    flag: 100,
                    text: '已完成'
                },
                {
                    flag: 97,
                    text: '已拒绝'
                }                              
            ],
            //搜索内容
            query:{
                condition:-1,//状态-1（全部），0（待审核），97（已拒绝），100（已完成）
                pageSize: 10,
                page: 1  
            },
            form: {
                fileUrl: "",//文件路径
                distributorUpgradeApplyID: "",//升级申请ID
            },
            //提示框信息
            confirm: {
                show: false
            },
            busy: false,//分页展示
            recordList: [],//返回升级记录
            isShow:false, //是否显示截图
            cheImg: '',//截图地址
            upCustomerID: '',//上级id 用来获取上级付款二维码

        }
    },
    mounted() {
        
    },
    methods: {
        //查看截图
        checkImg(n){
            this.confirm.show = true 
            this.isShow = true
            this.$refs.confirm.open() 
            this.upCustomerID = n.upCustomerID  //上级id
            this.getSelectCustomerReceiptRQCode()   
        },
        //切换升级审核状态
        upChangeState(flag){
            this.query.page = 1
            this.recordList.length = 0 //清空返回升级记录
            this.getSelectUpdateGradeApplyList()
        },
        //分页
        loadmore() {
            this.busy = true
            this.getSelectUpdateGradeApplyList()
        },
        //升级审核记录列表
        getSelectUpdateGradeApplyList(){
            ajax.selectUpgradeApplyRecordList(this.query).then((result)=>{
                console.log(result)
                if (result.dataList.length > 0) {
                    this.recordList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.recordList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.recordList.push(...result.dataList)
                }

            })
        },
        numIMG(n){
            this.form.distributorUpgradeApplyID = n.distributorUpgradeApplyID //升级申请ID

        },
        // 图片上传成功
        uploadSuccess(val) {
            this.form.fileUrl = val
            console.log(this.form)
            this.puSavePayCertificateForUpGrade()
        },
        //上传凭证
        puSavePayCertificateForUpGrade(){
            ajax.savePayCertificateForUpGrade(this.form).then((result)=>{
                this.util.msg.success('上传成功')
            })
        },
        //查询分销商二维码
        getSelectCustomerReceiptRQCode(){
            console.log(this.upCustomerID)
            ajax.selectCustomerReceiptRQCode(this.upCustomerID).then((result)=>{
                console.log(result)
                this.cheImg = result  //二维码img 链接
            })
        },
    }
}