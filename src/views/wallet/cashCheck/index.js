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
					text: '申请',
					value: 0
				},
				// {
				// 	text: '撤销',
				// 	value: 95
				// },
				{
					text: '已拒绝',
					value: 97
				},
				{
					text: '已完成',
					value: 100
				},
			],//下拉框
			group: '',//团队,
			groupStatus: -1,//团队状态
			page: 1,//页数
			pageSize: 10,//每页条数
			auditPageList: [],//审核列表
			query: {  //查询审核列表的条件
				groupId: '',
				flag: -1
			},
		}
	},
	mounted() {
		// 下拉框开始时的值
		this.team = '1'
		// 获取团队信息
		this.group = this.$route.query.group
		this.query.groupId = this.group.distributorGroupID
	},
	methods: {
		// 审核提现
		audit(id, type) {
                 // 拒绝退款
				if (type === 0) {
					this.confirm.content = '你确定拒绝该提现申请?'
					this.$refs.confirm.open().then(() => {
						ajax.superiorAuditWithdrawCash({
							id: id,
							auditState: false
						}).then(() => {
							this.util.msg.success('已拒绝提现!')
							this.$refs.confirm.close()
							// 刷新页面
			    			this.auditPageList.forEach((item) => {
			    				if (item.distributorGetApplyID === id) {
			    					item.flag = 97
			    				}
			    			})
						})
					})
				}
				// 同意退款
				else {
					this.confirm.content = '你确定同意该提现申请?'
					this.$refs.confirm.open().then(() => {
						ajax.superiorAuditWithdrawCash({
							id: id,
							auditState: true
						}).then(() => {
							this.util.msg.success('已同意提现!')
							this.$refs.confirm.close()
							// 刷新页面
			    			this.auditPageList.forEach((item) => {
			    				if (item.distributorGetApplyID === id) {
			    					item.flag = 100
			    				}
			    			})
						})
					})
				}
		},
		// 滚动
		loadmore() {
	        this.busy = true
	        ajax.getWithdrawalAuditPageList(this.query, this.page, this.pageSize).then((result) => {
	            if (result.dataList.length > 0) {
	                this.auditPageList.push(...result.dataList)
	                this.page++
	                if (result.total <= this.auditPageList.length) {
	                    this.busy = true
	                }
	                else {
	                    this.busy = false
	                }
	            }
	            else {
	                this.busy = true
	            }
	        })
    	},
		// 团队状态的改变
		statusChange() {
			this.query.flag = this.groupStatus
			this.page = 1
			this.getWithdrawalAuditPageList()
		},
		// 获取提现审核列表
		getWithdrawalAuditPageList() {
			ajax.getWithdrawalAuditPageList(this.query, this.page, this.pageSize).then((result) => {
				this.auditPageList = []
				this.auditPageList.push(...result.dataList)
			})
		},
	}
}