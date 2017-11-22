import {achievement as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            noData: false,
            distributorGroupID: '70ED82B3-DD6A-4526-B701-17C440CEAEAE',//模拟假团队id
            personalFirstList: [],//查询个人业绩列表
            form: {
                condition: {
                    distributorGroupID: '',
                },
                page: 1,
                pageSize: 15,
            },
            statisticsPersonalForm: {
                distributorGroupID: '',
                customerID: ''
            },//传到直属下级页面的东西
        }
    },
    mounted() {
        this.queryPersonalFirst()
        //console.log(this.currentTeam)
    },
    computed: {
        ...mapGetters([
            'teamList',//所有团队数据
            'currentTeam'//默认团队数据
        ])
    },
    methods: {
    	nextagent(item) {
            this.statisticsPersonalForm.distributorGroupID = this.currentTeam.distributorGroupID
            this.statisticsPersonalForm.customerID = item.customerID
    		this.$router.push({
                path: '/nextagent',
                query: this.statisticsPersonalForm
            })
    	},
        //查询个人业绩列表
        queryPersonalFirst() {
            //this.form.distributorGroupID = this.distributorGroupID
            this.form.condition.distributorGroupID = this.currentTeam.distributorGroupID
            ajax.personalFirst(this.form).then((result) => {
                this.personalFirstList = result.dataList
                this.noData = this.personalFirstList.length > 0

            })
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
            if(flag == 20) {
                Performance = item.subPerformance  
                Scale = item.thisMonthOne  
            }
            if(flag == 21) {
                Performance = item.subPerformanceLast  
                Scale = item.lastMonthOne  
            }
            if(flag == 30) {
                Performance = item.subTwoPerformance  
                Scale = item.thisMonthTwo  
            }
            if(flag == 31) {
                Performance = item.subTwoPerformanceLast 
                Scale = item.lastMonthTwo  
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