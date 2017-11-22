import { mapActions, mapGetters } from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			returnCommissionList: [],//待返佣金列表
			payCommissionList: [],//待付佣金列表
            auditCount: 0,//待审核总数
            returnTotalAmount: 0,//总的待返佣金数
            payTotalAmount: 0,//总的待付佣金数
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
	   // 获取待返佣金列表
        this.getWaitReturnCommissionList()
        // 获取待付佣金列表
        this.getWaitPayCommissionList()
        // 获取提现待审核总数
        this.getWithdrawalWaitAuditCount()
	},
	methods: {
        ...mapActions([
            'setCustomer',//设置分销商
        ]),
        // 获取待返佣金列表
        getWaitReturnCommissionList() {
        	ajax.getWaitReturnCommissionList(this.currentTeam.distributorGroupID).then((result) => {
        		this.returnCommissionList = result
                // 获取总的待返佣金数
                result.forEach((item) => {
                    this.returnTotalAmount += item.amount
                })
        	})
        },
        // 获取待付佣金列表
        getWaitPayCommissionList() {
        	ajax.getWaitPayCommissionList(this.currentTeam.distributorGroupID).then((result) => {
        		this.payCommissionList = result
                // 获取总的待付佣金数
                result.forEach((item) => {
                    this.payTotalAmount += item.amount
                })
        	})
        	
        },
        // 获取提现待审核总数
        getWithdrawalWaitAuditCount() {
            ajax.getWithdrawalWaitAuditCount(this.currentTeam.distributorGroupID).then((result) => {
                this.auditCount = result
            })
        },
        // 跳转到待返佣金
        gotoReturnCommission(item) {
            // 写vuex
            this.setCustomer(item)
            // 跳转
            this.$router.push({
                path: '/returnCommissionDetail',
                qeury: {
                    customer: item, 
                }
            })
        },
        // 跳转到待返佣金
        gotopayCommission(item) {
            // 写vuex
            this.setCustomer(item)
            // 跳转
            this.$router.push({
                path: '/payCommissionDetail',
                qeury: {
                    customer: item, 
                }
            })
        },
        // 跳转到提现
        gotoWithdrawCash(item) {
            // 写vuex
            this.setCustomer(item)
            // 跳转
            this.$router.push({
                path: '/withdrawCash',
                qeury: {
                    customer: item, 
                }
            })
        }
	},
}