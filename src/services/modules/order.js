// 订单
import ajax from '../fetch'

export default {
    /**
     * 获取订单列表
     * @param  {object}  data              [description]
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    getDistributorListPage(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/SelectDistributorListPage',
            method: 'post',
            auth,
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 获取订单详情
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    getOrderDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/GetOrderDetail?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 取消单个订单
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    cancelOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/CancelOrder?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 上传付款凭证
     * @param  {object}  data              [description]
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    uploadPayImg(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/UploadPayImg',
            method: 'post',
            auth,
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 订单跟踪
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    orderFollow(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/OrderFollow?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 发货
     * @param  {object}  data              [description]
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    sendGoodsFromDistributor(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/SendGoodsFromDistributor',
            method: 'post',
            auth,
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 分销商确认收款
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    confirmPayByDistributor(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/ConfirmPayByDistributor?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 分销商批量确认收款
     * @param  {Array}  ids               订单ID集合
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    multipleConfirmPayByDistributor(ids, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/MultipleConfirmPayByDistributor',
            method: 'post',
            auth,
            isShowFullLoading,
            body: ids
        })
    },
    /**
     * 查看收款二维码
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    getPayQRcode(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/GetPayQRcode?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 向上级提交订单（转由上级发货）
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    submitOrderToParent(id, payImg, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/SubmitOrderToParent?id=' + id,
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                distributorOrderID: id,
                payImgUrl: payImg
            }
        })
    },
    /**
     * 删除订单
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    deleteOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/DeleteOrder?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 确认收货
     * @param  {string}  id                订单ID
     * @param  {Boolean} auth              是否需要登录
     * @param  {Boolean} isShowFullLoading 是否显示加载动画
     * @return {[type]}                    [description]
     */
    receiveOrder(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/ReceiveGoods?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 分销商扫码
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    distributorScan(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Order/DistributorScan',
            method: 'post',
            auth,
            isShowFullLoading,
            body: data
        })
    }
}