import {announcement as ajax} from 'services'

export default {
    data() {
        return {
            noData: false,
            query: {
                pageSize: 15,
                page: 1,
            },
            busy: false,
            announcementList: [],
        }
    },
    mounted() {
        this.queryAnnouncementList()
    },
    //自定义过滤器用来截取字符串长度
    filters: {
        substrdan(val,strat,end) {
            return val.substring(strat,end)
        }
    },
    methods: {
        //直属下级列表查询
        queryAnnouncementList() {
            ajax.selectMsgPageList(this.query).then((result) => {
                console.log(result)
                //this.statisticsPersonalList = result.dataList
                //this.statisticsPersonalList.push(...result.dataList)
                if (result.dataList.length > 0) {
                    this.announcementList.push(...result.dataList)
                    this.page++
                    if (result.total <= this.announcementList.length) {
                        this.busy = true
                    }
                    else {
                        this.busy = false
                    }
                }
                else {
                    this.busy = true
                }
                this.noData = this.announcementList.length > 0

            })
        },
        //滚动条加载分页数据
        loadmore() {
            this.busy = true
            this.queryAnnouncementList()
        },
    }
}