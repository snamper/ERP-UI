import {mapGetters, mapActions} from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			// 月份列表
			months: [],
			month: {},//选择的月份时间范围
			returnCommissionDetail: [],//待返佣金明细
			busy: false,//分页滚动
			page: 1,//页数
			pageSize: 10,//每页条数
			query: { //查寻条件
				targetId: '',//目标分销商ID
				groupId: '',//团队ID 
				searchTimeRange: {  //时间范围
					editTimeBegin: '',//开始时间
					editTimeEnd: '',//结束时间
				}
			},
		}
	},
	computed: {
        ...mapGetters([
            'customer',
            'currentTeam',
        ])
    },
	mounted() {
		// 获取月份-下拉框
		this.getMonths()
		// 获取由路由带来的数据
		this.getInitData()
	},
	methods: {
		// 获取月份-下拉框
		getMonths() {
			let date = new Date()
			let year = date.getFullYear()
			let month = date.getMonth()
			let isLeapyear = false
			let	editTimeBegin = ''
			let	editTimeEnd = ''
			for( let i=1; i<=12; i++) {
				if (month === 0) { ///后退，如果是前一年，这从12月开始
					month = 12
					year = year-1
				}
				// 判断是否是闰年
				isLeapyear = this.leapyear(year)
				switch(month) {
					case 1 :
					case 3 :
					case 5 :
					case 7 :
					case 8 :
					case 10 :
					case 12 : editTimeBegin = year+'-'+month+'-01 00:00:00'
							  editTimeEnd = year+'-'+month+'-31 23:59:59'
							  break
					case 4 :
					case 6 :
					case 9 :
					case 11 : editTimeBegin = year+'-'+month+'-01 00:00:00'
							  editTimeEnd = year+'-'+month+'-30 23:59:59'
							  break
					case 2 : if (isLeapyear) {
								editTimeBegin = year+'-'+month+'-01 00:00:00'
							  	editTimeEnd = year+'-'+month+'-29 23:59:59'
							 }
							 else {
							 	editTimeBegin = year+'-'+month+'-01 00:00:00'
							  	editTimeEnd = year+'-'+month+'-28 23:59:59'
							 }
							 break
				}
				this.months.push({
					text: year+'年'+month+'月',
					value: {
						editTimeBegin: editTimeBegin,
						editTimeEnd: editTimeEnd
					}
				})
				// 下拉框初始值
				if (i === 1) {
					this.month = {
						editTimeBegin: editTimeBegin,
						editTimeEnd: editTimeEnd
					}
				}
				month--
			}
		},
		// 判断是否是闰年
		leapyear(year) {
		    if((year % 400 === 0) || ((year % 100 !== 0)) && (year % 4 === 0)) {
		        return true 
		    }
		    else {
		        return false
		    }
		},
		// 下拉框月份改变时
		monthChange() {
			this.query.searchTimeRange = this.month
			this.getWaitReturnCommissionDetailPageList()
		},
		// 滚动
		loadmore() {
	        this.busy = true
	        ajax.getWaitReturnCommissionDetailPageList(this.query, this.page, this.pageSize).then((result) => {
	            if (result.dataList.length > 0) {
	                this.returnCommissionDetail.push(...result.dataList)
	                this.page++
	                if (result.total <= this.returnCommissionDetail.length) {
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
		// 获取初始数据
		getInitData() {
			this.query.groupId = this.currentTeam.distributorGroupID
			this.query.searchTimeRange = this.month
			this.query.targetId = this.customer.customerId
		},
		// 获取待返佣金明细
		getWaitReturnCommissionDetailPageList() {
			this.page = 1
			ajax.getWaitReturnCommissionDetailPageList(this.query, this.page, this.pageSize).then((result) => {
    			this.returnCommissionDetail = []
    			this.returnCommissionDetail.push(...result.dataList)
			})
		},
		// 跳转到提现
		gotoWithdrawCash() {
			this.$router.push({
                path: '/withdrawCash',
            })
		}
	}
}