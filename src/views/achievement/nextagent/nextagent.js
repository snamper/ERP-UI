import {achievement as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'

export default{
	data() {
		return {
			busy: false,//是否在滚动页面加载
            form: {
              condition: {
                distributorGroupID: "",
                customerID: ""
              },
              pageSize: 15,
              page: 1
            },	
            routeForm: {},//上个页面接受的东西暂存
            statisticsPersonalList: [],//查询出来的直属下级列表
            //传到直属下级页面的东西
            statisticsPersonalForm: {
                distributorGroupID: '',
                customerID: ''
            },	
            noData: false,	
		}
	},
    computed: {
        ...mapGetters([
            'teamList',//所有团队数据
            'currentTeam'//默认团队数据
        ])
    },
	mounted() {
		this.routeForm = this.$route.query 
		console.log(this.routeForm)
		this.queryStatisticsPersonal()
	},
	methods: {
		nextagrent(item) {
            this.statisticsPersonalForm.distributorGroupID = this.currentTeam.distributorGroupID
            this.statisticsPersonalForm.customerID = item.customerID
			this.$router.push({
				path: '/recomment',
				query: this.statisticsPersonalForm
			})
		},
		//直属下级列表查询
		queryStatisticsPersonal() {
			this.form.condition.distributorGroupID = this.routeForm.distributorGroupID
			this.form.condition.customerID = this.routeForm.customerID
			ajax.statisticsPersonal(this.form).then((result) => {
				//console.log(result)
				//this.statisticsPersonalList = result.dataList
				//this.statisticsPersonalList.push(...result.dataList)
            	if (result.dataList.length > 0) {
                    this.statisticsPersonalList = []
            	    this.statisticsPersonalList.push(...result.dataList)
            	    this.page++
            	    if (result.total <= this.statisticsPersonalList.length) {
            	        this.busy = true
            	    }
            	    else {
            	        this.busy = false
            	    }
            	}
            	else {
            	    this.busy = true
            	}
                this.noData = this.statisticsPersonalList.length > 0
			})
		},
		//滚动条加载分页数据
		loadmore() {
			this.busy = true
			this.queryStatisticsPersonal()
		},
        //跳转明细页面传的东西
        goDetail(item, flag) {
            var Performance = 0
            var Scale = 0
            if(flag == 10) {
                Performance = item.mePerformance 
                Scale = item.thisMonth 
            }
            if(flag == 11) {
                Performance = item.mePerformanceLast  
                Scale = item.lastMonth  
            }
            this.$router.push({
                path: '/detailachievement',
                query: {
                    distributorGroupID: item.distributorGroupID,
                    customerID: item.customerID,
                    performance: Performance,//业绩
                    scale: Scale,//百分比例
                    isTime: flag 

                }
            })
        }

	}
}