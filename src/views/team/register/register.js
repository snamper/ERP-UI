//审核注册
import { team as ajax } from 'services'

export default {
    data() {
        return {
            teamList:[
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
            //提示框 信息
            confirm: {
                title: '提示',
                content: '接下来的操作，你确定吗？',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
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
            queryState:{
                id: "",//分销商申请ID
                auditState: true // 审核状态,true:通过,false:拒绝 
            },
            busy: false,//分页展示   
            registerList:[],//返回的注册审核数据         
        }
    },
    mounted() {

    },
    watch:{
        //监听状态 请求列表
        "query.condition.flag"(){
            this.query.page = 1
            this.registerList.length = 0 //清空返回升级记录
            this.getSelectDistributorApplyList()            
        },

    },
    methods: {
        //搜索
        search(val){
            this.query.condition.key = val
            this.query.page = 1
            this.registerList.length = 0 //清空返回升级记录
            this.getSelectDistributorApplyList()
        },
        //同意
        agreeUpgrade(item){
            this.queryState.id = item.distributorApplyID
            this.queryState.auditState = true 
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
            this.queryState.id = item.distributorApplyID
            this.queryState.auditState = false  
            this.confirm = {
                title: '提示',
                content: '确定要拒绝吗？',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                show: true
            }
            console.log(this.queryState)
            this.$refs.confirm.open().then(() => {
                 this.upState() //调用操作函数
                 this.$refs.confirm.close()
            })            
        },
        //分页
        loadmore() {
            this.busy = true
            this.getSelectDistributorApplyList()
        },
        //查询审核注册列表接口
        getSelectDistributorApplyList(){
            ajax.selectDistributorApplyList(this.query).then((result)=>{
                console.log(result)
                if (result.dataList.length > 0) {
                    this.registerList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.registerList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.registerList.push(...result.dataList)
                }
            })
        },
        //修改注册审核状态
        upState(){
            ajax.superiorAuditRegister(this.queryState).then((result)=>{
                this.util.msg.success('审核成功')
                this.query.page = 1
                this.registerList.length = 0 //清空返回升级记录
                this.getSelectDistributorApplyList()
            })
        },

    }
}