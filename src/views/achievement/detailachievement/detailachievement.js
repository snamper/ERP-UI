import {achievement as ajax} from 'services'

export default {
    data() {
        return {
            noData: false,
            query: {
                condition: {
                    distributorGroupID : '',
                    customerID: '',
                    isTime: 0,
                },
                pageSize: 15,
                page: 1,
            },
            performanceDetail: [],//所有的业绩查询数据
            datas: {},
            title: {
                name: '下级业绩',
                performance: '100',//业绩
                scale: 10//升级比例 
            },//页头标题
        }
    },
    mounted() {
        //this.datas = this.$route.query
        //console.log(this.datas)
        //this.queryPerformanceDetailed()
        this.controlQuery()
    },
    methods: {
        controlQuery() {
            this.datas = this.$route.query
            console.log(this.datas)
            this.query.condition.distributorGroupID = this.$route.query.distributorGroupID
            this.query.condition.customerID = this.$route.query.customerID
            //this.$route.query.isTime == 10-本人本月业绩；11本人上月业绩；20下级本月业绩。。。。
            if(this.$route.query.isTime == 10) {
                this.query.condition.isTime = 0
                this.title.name = '本月个人业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceDetailed()
            }
            if(this.$route.query.isTime == 11) {
                this.query.condition.isTime = 1
                this.title.name = '上月个人业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceDetailed()
            }
            if(this.$route.query.isTime == 20) {
                this.query.condition.isTime = 0
                this.title.name = '本月直属下级业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceGradeDetailed()
            }
            if(this.$route.query.isTime == 21) {
                this.query.condition.isTime = 1
                this.title.name = '上月直属下级业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceGradeDetailed()
            }
            if(this.$route.query.isTime == 30) {
                this.query.condition.isTime = 0
                this.title.name = '本月直属下二级业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceSubordinateDetailed()
            }
            if(this.$route.query.isTime == 31) {
                this.query.condition.isTime = 1
                this.title.name = '上月直属下二级业绩：'
                this.title.performance = this.$route.query.performance
                this.title.scale = this.$route.query.scale
                this.queryPerformanceSubordinateDetailed()
            }
        },
        //查询个人业绩明细
        queryPerformanceDetailed() {
            console.log(this.query)
            ajax.selectPerformanceDetailed(this.query).then((result) => {
                console.log(result)
                this.performanceDetail = result.dataList
                this.noData = this.performanceDetail.length > 0
            })
        },
        //下级业绩明细查询
        queryPerformanceGradeDetailed() {
            console.log(this.query)
            ajax.selectPerformanceGradeDetailed(this.query).then((result) => {
                console.log(result)
                this.performanceDetail = result.dataList
                this.noData = this.performanceDetail.length > 0
            })
        },
        //下下级业绩明细查询
        queryPerformanceSubordinateDetailed() {
            console.log(this.query)
            ajax.selectPerformanceSubordinateDetailed(this.query).then((result) => {
                console.log(result)
                this.performanceDetail = result.dataList
                this.noData = this.performanceDetail.length > 0
            })
        },
    }
}