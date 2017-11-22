//充值审核
import {mapGetters, mapActions} from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			// 对话框选项
			confirm: {
				title: '提示',
				content: '',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			},
			options: [
				{
					text: '全部',
					value: -1
				},
				{
					text: '待审核',
					value: 0
				},
				{
					text: '已拒绝',
					value: 97
				},
				{
					text: '已完成',
					value: 100
				},
			],
			//查询条件
			query: {
				 condition: {
				    distributorGroupID: "",
				    flag: -1,
				    keyWord: ""
				  },
				pageSize: 10,
				page: 1
			},
			//改变状态条件
			queryState: {
				listID: [],
				status: 0
			},
			rechargeList: [],//审核列表数据
			cheImg: "",//二维码链接
			isShowCode:false,
			financeObj: {},//获取用户财务信息和需要充值审核的数据
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
		this.search() //默认执行搜索
		this.getFinanceInfo()  //获取用户财务信息和需要充值审核的数据
	},
	watch: {
		"query.condition.flag"() {
			this.search()
		},
	},
	methods: {
		//搜索
		search(val){
            this.query.page = 1
            this.rechargeList.length = 0 //清空返回升级记录			
			this.query.condition.keyWord = val //搜索内容
			this.getSelectPayApplyListPageForDistributor() //请求审核列表
		},
		//同意拒绝
		audit(num,item){
			this.isShowCode = true
			if(num){
	            this.queryState.listID.push(item.distributorPayApplyID) //当前条数的审核id
	            this.queryState.status = 1  //状态1=启用，申请通过 0=禁用，申请拒绝
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
			}else {
	            this.queryState.listID.push(item.distributorPayApplyID) //当前条数的审核id
	            this.queryState.status = 0 //状态1=启用，申请通过 0=禁用，申请拒绝
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
			}
		},
		//请求审核列表
		getSelectPayApplyListPageForDistributor(){

			ajax.selectPayApplyListPageForDistributor(this.query).then((result)=>{
                console.log(result)
                if (result.dataList.length > 0) {
                    this.rechargeList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.rechargeList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.rechargeList.push(...result.dataList)
                }
			})
		},
        //获取用户财务信息和需要充值审核的数据
        getFinanceInfo(){
            ajax.getCustomerFinanceInfo(this.currentTeam.distributorLinkID).then((result)=>{
                this.financeObj = result
            })
        },		
		//修改审核充值状态
		upState(){
			ajax.auditPayApply(this.queryState).then((result)=>{
                this.util.msg.success('审核成功')
                this.query.page = 1 
                this.rechargeList.length = 0 //清空返回升级记录
                this.getSelectPayApplyListPageForDistributor() //重新请求审核列表
			})
		},
		//查看二维码
		chackCode(item){
			console.log(item)
            delete this.confirm.title //删除显示提示的title
            delete this.confirm.content //删除显示提示的content
            delete this.confirm.confirmButtonText //删除显示提示的confirmButtonText
            delete this.confirm.cancelButtonText //删除显示提示的cancelButtonText
            this.isShowCode = true
            this.confirm.show = true 			
			this.cheImg = item.payUrl  //二维码链接
			this.$refs.confirm.open()  
		},
		//弹出可审余额注释
		checkValue(){
            
            delete this.confirm.confirmButtonText //删除显示提示的confirmButtonText
            delete this.confirm.cancelButtonText //删除显示提示的cancelButtonText
            this.confirm.title = "提示"
            this.confirm.content = "这是可审余额" 
            this.isShowCode = false
            this.confirm.show = true 			
			this.$refs.confirm.open()  			
		}
	}
} 