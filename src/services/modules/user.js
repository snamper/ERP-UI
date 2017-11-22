// 用户相关
import ajax from '../fetch'

export default {
    /**
     * 获取登陆者信息
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getAccount(auth = true) {
        return ajax({
            url: '/Account/GetAccount',
            method: 'get',
            auth
        })
    },
    /**
     * 获取分销客户详情
     * @param  {string}  id   分销客户id
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getDistributionAccount(id, auth = true) {
        return ajax({
            url: '/Customer/GetDistributionAccount?DistributorLinkID=' + id,
            method: 'get',
            auth
        })
    },
    /**
     * 查询当前登陆用户未读消息
     * @param  {[type]}  id   [description]
     */
    selectMsgUnReadList(isShowFullLoading = true) {
        return ajax({
            url: '/Message/SelectMsgUnReadList',
            method: 'get',
            auth: true,
            isShowFullLoading
        })
    },

    /**
     * 获取用户财务信息和需要充值审核的数据
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getCustomerFinanceInfo(id, auth = true) {
        return ajax({
            url: '/Finance/GetCustomerFinanceInfo?id=' + id,
            method: 'get',
            auth
        })
    },
    /**
     * 获取待返佣金
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getWaitReturnCommissionList(id, auth = true) {
        return ajax({
            url: '/Commission/GetWaitReturnCommissionList?groupId=' + id,
            method: 'get',
            auth
        })
    }
}