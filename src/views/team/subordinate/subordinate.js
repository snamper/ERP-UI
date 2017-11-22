//我的下级
import { team as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            //搜索参数
            query: {
                condition: {
                    distributorLinkID: "",//档案ID
                    flag: 1,//查询等级1（我的直属下级），2（下二级），3（下三级）
                    key: "" //模糊搜索内容
                   },
                pageSize: 10,
                page: 1
            },
            customerGradeList:[],//我的下级数据
        }
    },
    computed: {
        ...mapGetters([
            'subordinatesList', //我的下级
            'currentTeam', //默认团队
            'customerInfo' //当前代理商信息
        ])
    }, 
    mounted() {
            this.query.condition.flag = this.$route.query.code // 查询等级
            this.query.condition.distributorLinkID = this.currentTeam.distributorLinkID  //当前选中团队的档案id
    },
    methods: {
        //搜索
        search(val){
            this.query.condition.key = val 
            this.query.page = 1
            this.customerGradeList.length = 0 //清空返回升级记录            
            this.getSelectSubCustomersByLinkId()         
        },
        //分页
        loadmore() {
            this.busy = true
            this.getSelectSubCustomersByLinkId()
        },
        //获取下级详情
        getSelectSubCustomersByLinkId(){
           ajax.selectSubCustomersByLinkId(this.query).then((result)=>{
            console.log(result)
                if (result.dataList.length > 0) {
                    this.customerGradeList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.customerGradeList.length) {
                        this.busy = true
                    }else {
                        this.busy = false
                    }
                }else {
                    this.busy = true
                    this.customerGradeList.push(...result.dataList)
                }
           }) 
        },
        toAuthorization(item){
            this.$router.push({
                path: '/authorizationTeam',//路由地址
                query: {
                    customerID:item.customerID,//分销商id
                    distributorGroupID:item.distributorGroupID //团队id
                }
            })
        }
    }
}