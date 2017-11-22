// 基础数据
import ajax from '../fetch'

export default {
    /**
     * 省市区
     * @param  {object} data [description]
     * @return {[type]}      [description]
     */
    selectRegionList(data) {
        return ajax({
            url: '/Basic/SelectRegionList',
            method: 'post',
            body: data
        })
    },
    /**
     * 获取快递列表
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    selectDeliveryList(auth = true) {
        return ajax({
            url: '/Order/SelectDeliveryList',
            method: 'get',
            auth
        })
    },
    /**
     * 获取公司信息
     */
    queryCompanyInfo() {
        return ajax({
            url: '/BasResourceConfig/GetCompanyInfoByDomain',
            method: 'get',
        })
    }
}