import {settings as ajax} from 'services'
import {mapGetters, mapActions} from 'vuex'

export default {
    data() {
        return {
            detailForm: {},
            //保存时提交的表单数据
            form: {
                customerID: "",
                mobile: "",
                wechat: "",//微信好
                qrCodeImg: "",                
            },
        }
    },
    mounted() {
        console.log(this.customerInfo)
        //数据初始化
        // this.form.name = this.customerInfo.name
        // this.form.certNo = this.customerInfo.certNo
        // this.form.customerID = this.customerInfo.customerID
        // this.form.mobile = this.customerInfo.mobile
        // this.form.wechat = this.customerInfo.wechat
        // this.form.qrCodeImg = this.customerInfo.qrCodeImg
        //console.log(this.customerInfo)
        //console.log(this.currentTeam)
        this.getDistributionDetail()
    },
    computed: {
        ...mapGetters([
            'customerInfo',//个人信息详情
            'teamList',//所有团队数据
            'currentTeam'//默认团队数据
        ])
    },
    methods: {
        ...mapActions([
            'setCustomerInfo'
        ]),
        //修改保存个人信息
    	save() {
            this.form.customerID = this.detailForm.customerID
            this.form.mobile = this.detailForm.mobile
            this.form.wechat = this.detailForm.wechat
            this.form.qrCodeImg = this.detailForm.qrCodeImg
    		ajax.updateCustomerWx(this.form).then((result) => {
                this.getDistributionDetail()
                this.util.msg.success('保存成功!')
    			
    		})
    	},
        // 获取分销客户详情
        getDistributionDetail() {
            ajax.getDistributionAccount(this.customerInfo.customerID).then((result) => {
                //this.setCustomerInfo(result)
                this.detailForm = result
            })

        },
        // 图片上传成功
        uploadSuccess(val) {
            console.log(val)
            this.detailForm.qrCodeImg = val
        },
    }
}