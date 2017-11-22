//升级审核
import { team as ajax } from 'services'

export default {
    data() {
        return {
            teamList:[//默认的下拉列表
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
            //提示框信息
            confirm: {
                show: false
            },
            //搜索内容
            query:{ 
                condition :{
                    flag: -1,//状态-1（全部），0（待审核），97（已拒绝），100（已完成）
                    key: "",//搜索文本 
                },
                pageSize: 10,
                page: 1              
            },
            //更改状态参数
            queryState:{
                id: "",//分销商申请ID 
                auditState: true //审核状态,true:通过,false:拒绝 ,
            },
            busy: false,//分页展示
            upgradeList:[],//返回的升级审核数据
            isShow:false, //是否显示截图
            cheImg: '',//截图地址
            upCustomerID: '',//上级id 用来获取上级付款二维码
        }
    },
    mounted() {

    },
    watch:{
        //监听状态 请求列表
        "query.condition.flag" (){
            this.query.page = 1
            this.upgradeList.length = 0 //清空返回升级记录
            this.getSelectUpdateGradeApplyList()
        },
    },
    methods: {
        //搜索
        search(val){           
            this.query.condition.key = val
            this.query.page = 1
            this.upgradeList.length = 0 //清空返回升级记录
            this.getSelectUpdateGradeApplyList()
        },
        //同意
        agreeUpgrade(item){
            this.queryState.id = item.distributorUpgradeApplyID //分销商申请ID
            this.queryState.auditState = true //
            this.isShow = false
            this.confirm = {
                title: '提示',
                content: '确定要同意吗？',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                show: true
            }
          this.$refs.confirm.open().then(() => {
                 this.upState() //调用操作函数
                 this.$refs.confirm.close()
          })
        },
        //拒绝
        declineUpgrade(item){
            this.queryState.id = item.distributorUpgradeApplyID //分销商申请ID
            this.queryState.auditState = false
            this.isShow = false             
            this.confirm = {
                title: '提示',
                content: '确定要拒绝吗？',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                show: true
            }

            this.$refs.confirm.open().then(() => {
                 this.upState() //调用操作函数
                 this.$refs.confirm.close()
            })

        },
        //查看截图
        checkImg(n){
            delete this.confirm.title //删除显示提示的title
            delete this.confirm.content //删除显示提示的content
            delete this.confirm.confirmButtonText //删除显示提示的confirmButtonText
            delete this.confirm.cancelButtonText //删除显示提示的cancelButtonText
            this.confirm.show = true 
            this.isShow = true
            this.upCustomerID = n.upCustomerID  //上级id
            this.getSelectCustomerReceiptRQCode()  

            this.$refs.confirm.open()            
        },
        //分页展示
        loadmore() {
            this.busy = true
            this.getSelectUpdateGradeApplyList()
        },
        //升级审核列表
        getSelectUpdateGradeApplyList(){
            ajax.selectUpdateGradeApplyList(this.query).then((result)=>{
                console.log(result)
                if (result.dataList.length > 0) {
                    this.upgradeList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.upgradeList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.upgradeList.push(...result.dataList)
                }

            })
        },
        //上级审核 操作
        upState(){

            ajax.superiorAuditUpgrade(this.queryState).then((result)=>{
                console.log(result)
                this.query.page = 1
                this.upgradeList.length = 0 //清空返回升级记录  
                this.getSelectUpdateGradeApplyList()            
                this.util.msg.success('审核成功')
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