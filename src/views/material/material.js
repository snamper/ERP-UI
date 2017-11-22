//首页
import { material as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            isShow: false,
            page: 1,
            pageSize: 10,
            query: {
                materialTagID: null,
                distributorGroupID: '',
                merchantID: ''
            },
            materialList: [],
            tapImg: '',
            busy: false,
            noData: false
        }
    },
    computed: {
        ...mapGetters([
            'currentTeam',
            'customerInfo',
            'companyInfo'
        ])
    },
    mounted() {
        this.query.distributorGroupID = this.currentTeam.distributorGroupID
        this.query.merchantID = this.customerInfo.merchantID
        this.getMaterialStockList()
    },
    methods: {
        getMaterialStockList() {
            this.busy = true
            ajax.getMaterialStockList(this.page, this.pageSize, this.query).then((result) => {
                if (result.dataList.length > 0) {
                    this.materialList.push(...result.dataList)
                    this.page++
                    if (result.total <= this.materialList.length) {
                        this.busy = true
                    }
                    else {
                        this.busy = false
                    }
                }
                else {
                    this.busy = true
                }
                this.noData = this.materialList.length > 0 ? false : true
            })
        },
        showHdImg(file) {
            this.tapImg = file
            this.isShow = true
        },
        hideHdImg() {
            this.isShow = false
        }
    }
}