import { mapActions, mapGetters } from 'vuex'

export default {
	name: "PgOrders",
    props: {
        list: Array,
        flag: Number,
        type: String
    },
    computed: {
        ...mapGetters([
            'currentTeam',
            'merchantConfig'
        ])
    },
    methods: {
        // 取消订单
        cancelOrder(id) {
            this.$emit('cancelOrder', id)
        },
        // 查看付款二维码
        getPayQRcode(id) {
            this.$emit('getPayQRcode', id)
        },
        // 图片上传成功回调
        uploadSuccess(id, file) {
            this.$emit('uploadPayImg', id, file)
        },
        // 删除订单
        deleteOrder(id) {
            this.$emit('deleteOrder', id)
        },
        // 确认收货
        receiveOrder(id) {
            this.$emit('receiveOrder', id)
        },
        // 确认收款
        confirmPayByDistributor(id) {
            this.$emit('confirmPayByDistributor', id)
        },
        // 批量确认收款
        multipleConfirmPayByDistributor() {
            this.$emit('multipleConfirmPayByDistributor')
        },
        // 查看付款截图
        checkPayImg(url) {
            this.$emit('checkPayImg', url)
        },
        // 发货
        sendGoods(id) {
            this.$router.push('/orderDetail?flag='+this.flag+'&id='+id+'&type=send')
        },
        // 提交上级
        submitOrderToParent(id) {
            this.$emit('submitOrderToParent', id)
        },
        status() {
            if (this.type == 'my') {
                if (this.flag == -1) {
                    return '待付款'
                }
                else if (this.flag == 1) {
                    return '待上级发货'
                }
                else if (this.flag == 100) {
                    return '已发货'
                }
                else if (this.flag == 110) {
                    return '已完成'
                }
                else {
                    return '已取消'
                }
            }
            else {
                if (this.flag == -1) {
                    return '待审核'
                }
                else if (this.flag == 1) {
                    return '待发货'
                }
                else if (this.flag == 100) {
                    return '已发货'
                }
                else if (this.flag == 110) {
                    return '已完成'
                }
                else {
                    return '已取消'
                }
            }
        }
    }
}