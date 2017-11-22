import { mapActions, mapGetters } from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
            //提示信息
            confirm: {
                title: '提示',
                content: '',
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            },
            //月份列表
            months: [],
            month: "",
            //查询条件
            query: {
                condition: {
                    distributorGroupID: "", //团队id
                    searchTimeRange: { //时间范围
                        editTimeBegin: "",
                        editTimeEnd: ""
                    }
                },
                pageSize: 10,
                page: 1
            },
            expenditure: "",//支出
            income: "",//收入
            balanceList: [],//流水
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
        console.log(this.currentTeam)
        console.log(this.customer)
        this.getMonths() //获取月份-下拉框
        this.getFinanceInfo() //获取用户财务信息和需要充值审核的数据
        this.query.condition.distributorGroupID = this.currentTeam.distributorGroupID //团队id
        // 获取月份-下拉框
        console.log(this.month)
        this.query.condition.searchTimeRange = this.month // 时间范围
	},
    watch: {
        "month"(){       
            this.query.page = 1
            this.balanceList.length = 0 //清空返回升级记录                 
            this.getSelectAccountBookList()
        },
    },
	methods: {
        //流水明细
        getSelectAccountBookList(){
            console.log(this.query)
            ajax.selectAccountBookList(this.query).then((result)=>{
                console.log(result)
                this.expenditure = result.totalPay  //支出
                this.income = result.totalInCome  //收入
                if (result.dataList.length > 0) {
                    this.balanceList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.balanceList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.balanceList.push(...result.dataList)
                }
            })
        },
        //获取用户财务信息和需要充值审核的数据
        getFinanceInfo(){
            ajax.getCustomerFinanceInfo(this.currentTeam.distributorLinkID).then((result)=>{
                this.financeObj = result
            })
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
        },
        // 获取月份-下拉框
        getMonths() {
            let date = new Date()
            let year = date.getFullYear()
            let month = date.getMonth()
            let isLeapyear = false
            let editTimeBegin = ''
            let editTimeEnd = ''
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

	},
}