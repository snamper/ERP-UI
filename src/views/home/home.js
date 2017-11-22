//首页
import { user as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            currentTeamModel: {}, // 当前选中的团队
            //当前登陆用户未读消息
            msgUnReadList: [],
            balanceMoney: 0, // 当前余额
            commission: 0, // 待返佣金
            swiperOption: { // banner滚动配置
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            }
        }
    },
    computed: {
        ...mapGetters([
            'teamList',
            'currentTeam',
            'customerInfo',
            'menuList',
            'merchantConfig',
            'companyInfo',
        ])
    },
    watch: {
        currentTeamModel() {
            this.changeCurrentTeam(this.currentTeamModel)
            this.getDistributionAccount(this.currentTeamModel.distributorLinkID)
            this.getCustomerFinanceInfo()
            this.getWaitReturnCommissionList()
        },
        teamList() {
            if (this.currentTeam.distributorGroupID) {
                return
            }
            this.teamList.forEach((item) => {
                if (item.isDefault === 1) {
                    this.changeCurrentTeam(item)
                    this.currentTeamModel = this.currentTeam
                }
            })

            if (!this.currentTeamModel.groupName) {
                if (this.teamList.length > 0) {
                    this.changeCurrentTeam(this.teamList[0])
                    this.currentTeamModel = this.currentTeam
                }
            }
        }
    },
    mounted() {
        // 获取菜单
        this.getMobileMenu()
        // 获取团队列表
        this.getTeamList()
        //查询当前登陆用户未读消息
        this.queryMsgUnReadList()
        // 余额
        this.getCustomerFinanceInfo()
        // 佣金
        this.getWaitReturnCommissionList()
        // 公司信息
        this.queryCompanyInfo()
    },
    methods: {
        ...mapActions([
            'getTeamList',
            'changeCurrentTeam',
            'setCustomerInfo',
            'getMobileMenu',
            'getMerchatConfig',
            'queryCompanyInfo'
        ]),
        // 获取分销客户详情
        getDistributionAccount(id) {
            ajax.getDistributionAccount(id).then((result) => {
                this.setCustomerInfo(result)
                // 商家全局配置
                this.getMerchatConfig()
            })
        },
        // 显示我的团队
        showMyBrand() {
            this.$refs.confirm.open()
        },
        // 查询当前登陆用户未读消息
        queryMsgUnReadList() {
            ajax.selectMsgUnReadList(false).then((result) => {
                this.msgUnReadList = result
            })
        },
        // 获取用户余额
        getCustomerFinanceInfo() {
            if (this.currentTeam.distributorLinkID) {
                ajax.getCustomerFinanceInfo(this.currentTeam.distributorLinkID).then((result) => {
                    this.balanceMoney = result.orderBalanceMoney
                })
            }
        },
        // 获取待返佣金
        getWaitReturnCommissionList() {
            if (this.currentTeam.distributorGroupID) {
                ajax.getWaitReturnCommissionList(this.currentTeam.distributorGroupID).then((result) => {
                    result.forEach((item) => {
                        this.commission += item.amount
                    })
                })
            }
        }
    }
}