// 账户相关
import ajax from '../fetch'
import { rootPath } from '../fetch/config'

export default {
    /**
     * auth2.0验证，用于手势密码登录
     * @param  {[type]}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    auth(data, isShowFullLoading = true) {
        return ajax({
            url: '/token',
            formJson: false,
            method: 'post',
            isShowFullLoading,
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            path: rootPath.substring(0, rootPath.length - 4)
        })
    },
    /**
     * 账号密码登录
     * @param  {object} data [description]
     * @return {[type]}      [description]
     */
    login(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/UserLogin',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 设置手势密码
     * @param {object}  data              [description]
     * @param {Boolean} isShowFullLoading [description]
     */
    setHandPassword(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/SetHandPassword',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 发送短信验证码
     * @param  {object}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    sendSMS(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/SendVerificationCode',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 身份验证
     * @param  {object}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    validateIdentity(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/ValidateIdentity',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 修改密码
     * @param  {object}  data              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    resetPassword(data, isShowFullLoading = true) {
        return ajax({
            url: '/Account/ResetPassword',
            method: 'post',
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 获取菜单
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getMobileMenu(auth = true) {
        return ajax({
            url: '/Account/GetMobileMenu?status=1',
            method: 'get',
            auth
        })
    },
    /**
     * 获取logo
     */
    getLogo(type, auth = true,isShowFullLoading = true) {
        return ajax({
            url: '/BasResourceConfig/GetMerchantLogo?type='+type,
            method: 'get',
            isShowFullLoading,
        })
    },
    /**
     * 根据商家编号查询商家的全局配置信息
     * @param  {[type]} code [description]
     * @return {[type]}      [description]
     */
    getMerchantConfig(merchatID, auth = true) {
        return ajax({
            url: '/Account/GetSysGlobalConfigByMerchantID?id=' + merchatID,
            method: 'get',
            auth
        })
    },
    /**
     * 获取微信openid
     * @param  {[type]} url        跳转url
     * @param  {[type]} merchantID 商家id
     * @param  {[type]} customerID 分销商id
     * @return {[type]}            [description]
     */
    wxAuth(url, merchantID, customerID, isShowFullLoading = true) {
        return ajax({
            url: '/WxAuth/openid?url=' + url + '&merchantId=' + merchantID + '&customerId=' + customerID,
            method: 'get',
            isShowFullLoading
        })
    },
    /**
     * 获取微信JsSdk配置
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    wxJsSdk(url, auth = true) {
        return ajax({
            url: '/WxAuth/GetJsSdk?url=' + url,
            method: 'get',
            auth
        })
    }
}