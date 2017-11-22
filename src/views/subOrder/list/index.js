/**
 * 下级订单列表
 */
import { mapActions, mapGetters } from 'vuex'
import { order as ajax } from 'services'

export default {
    data() {
        return {
            query: {
                condition: {
                    keyWord: '',
                    orderStatus: -1,
                    distributorGroupID: '',
                    isMyOrder: false
                },
                pageSize: 10,
                page: 1
            },
            orderList: [],
            busy: false,
            noData: false,
            qrCode: '',
            showQRcode: false,
            showToParent: false,
            currentOrderId: '',
            payImg: '', // 上传的付款截图
            tabs: [
                {
                    label: '待付款',
                    value: -1
                },
                {
                    label: '待发货',
                    value: 1
                },
                {
                    label: '已发货',
                    value: 100
                },
                {
                    label: '已完成',
                    value: 110
                },
                {
                    label: '已取消',
                    value: 95
                }
            ],
            confirm: { // 弹出框配置
                title: '提示',
                content: '确定取消该订单吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
        }
    },
    computed: {
        ...mapGetters([
            'currentTeam'
        ])
    },
    mounted() {
        if (this.currentTeam.isRechargeMode) {
            this.tabs = [
                {
                    label: '待发货',
                    value: 1
                },
                {
                    label: '已发货',
                    value: 100
                },
                {
                    label: '已完成',
                    value: 110
                },
                {
                    label: '已取消',
                    value: 95
                }
            ]
        }
        this.query.condition.distributorGroupID = this.currentTeam.distributorGroupID
        this.query.condition.orderStatus = parseInt(this.$route.query.flag) || this.tabs[0].value
        
        this.getDistributorListPage()
    },
    watch: {
        '$route'() {
            this.query.page = 1
            this.orderList = []
            this.busy = false
            this.query.condition.orderStatus = parseInt(this.$route.query.flag || this.tabs[0].value)
            this.getDistributorListPage()
        }
    },
    methods: {
        // 获取订单列表
        getDistributorListPage() {
            this.busy = true
            ajax.getDistributorListPage(this.query).then((result) => {
                if (result.dataList.length > 0) {
                    this.orderList.push(...result.dataList)
                    this.query.page++
                    if (result.total <= this.orderList.length) {
                        this.busy = true
                    }
                    else {
                        this.busy = false
                    }
                }
                else {
                    this.busy = true
                }
                this.noData = this.orderList.length > 0
            })
        },
        // 订单状态切换
        tab(val) {
            this.$router.push('suborder?flag=' + val)
        },
        // 搜索
        search(keywords) {
            this.query.condition.keyWord = keywords
            this.query.page = 1
            this.orderList = []
            this.busy = false
            this.getDistributorListPage()
        },
        // 取消订单
        cancelOrder(id) {
            this.confirm = {
                title: '提示',
                content: '确定取消该订单？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
            this.$refs.confirm.open().then(() => {
                ajax.cancelOrder(id).then((result) => {
                    this.$refs.confirm.close()
                    this.util.msg.success('操作成功')
                    setTimeout(() => {
                        this.search()
                    })
                })
            })
        },
        // 确认收款
        confirmPayByDistributor(id) {
            this.confirm = {
                title: '提示',
                content: '确认收款吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
            this.$refs.confirm.open().then(() => {
                ajax.confirmPayByDistributor(id).then(() => {
                    this.$refs.confirm.close()
                    this.search()
                })
            })
        },
        // 批量确认收款
        multipleConfirmPayByDistributor() {
            const ids = []
            this.orderList.forEach((item) => {
                ids.push(item.distributorOrderID)
            })
            this.confirm = {
                title: '提示',
                content: '确认全部收款吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
            this.$refs.confirm.open().then(() => {
                ajax.multipleConfirmPayByDistributor(ids).then(() => {
                    this.$refs.confirm.close()
                    this.search()
                })
            })
        },
        // 查看付款截图
        checkPayImg(url) {
            this.confirm = {
                title: '付款截图'
            }
            this.qrCode = url
            this.showQRcode = true
            this.$refs.confirm.open().catch(() => {
                setTimeout(() => {
                    this.showQRcode = false
                }, 400)
            })
        },
        // 删除订单
        deleteOrder(id) {
            this.confirm = {
                title: '提示',
                content: '确定删除该订单？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
            this.$refs.confirm.open().then(() => {
                ajax.deleteOrder(id).then(() => {
                    this.$refs.confirm.close()
                    this.util.msg.success('操作成功')
                    setTimeout(() => {
                        this.search()
                    }, 500)
                })
            })
        },
        // 提交上级
        submitOrderToParent(id) {
            this.currentOrderId = id
            this.confirm = {
                title: '提交上级发货',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
            this.showQRcode = false
            this.showToParent = true
            this.$refs.confirm.open().then(() => {
                ajax.submitOrderToParent(id, this.payImg).then(() => {
                    this.$refs.confirm.close()
                    this.util.msg.success('提交上级成功')
                    setTimeout(() => {
                        this.search()
                    }, 500)
                })
            })
        },
        // 查看付款二维码
        getPayQRcode() {
            this.confirm = {
                title: '付款二维码'
            }
            this.showToParent = false
            this.$refs.confirm.open().catch(() => {
                setTimeout(() => {
                    this.showQRcode = false
                }, 400)
            })
            ajax.getPayQRcode(this.currentOrderId).then((result) => {
                this.showQRcode = true
                this.payQRcode = result
            })
        },
        // 上传付款凭证
        uploadPayImg(id, file) {
            this.payImg = file
            // ajax.uploadPayImg({
            //     distributorOrderID: id,
            //     url: file
            // }).then(() => {
            //     this.util.msg.success('上传成功')
            // })
        }
    }
}