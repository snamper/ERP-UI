// 防伪溯源
import ajax from '../fetch'

export default {
	/*
	**查询防伪码关联商品详情代码
	*/
	queryDetailByCode(data, isShowFullLoading=true){
        return ajax({
            url: '/QRCode/GetQRCodeGoodsInfo',
            method: 'post',
            body:data,
            isShowFullLoading
        })
	},
    /*
    **查询根据关键字查询代理商家
    */
    queryCustomerByKey(key, isShowFullLoading = true){
        return ajax({
            url: '/Customer/GetCustomerInfoByKey?key='+key,
            method: 'get',
            isShowFullLoading
        })
    },

    /**
     * 查询文章
     * @param {*参数} data 
     * @param {*} auth 
     * @param {*} isShowFullLoading 
     */
    queryArticle(data,isShowFullLoading = true) {
        return ajax({
            url: '/BasArticle/SelectArticleByMerchantCode',
            method: 'post',
            body:data,
            isShowFullLoading
        })
    },
    /**
     * 获取资源配置
     * @param {*} data 
     * @param {*} auth 
     * @param {*} isShowFullLoading 
     */
    queryConfig(isShowFullLoading = true) {
        return ajax({
            url: '/BasResourceConfig/GetResourceConfigList',
            method: 'get',
            isShowFullLoading
        })
    },
     /**
     * 获取产品介绍
     * @param {*} data 
     * @param {*} auth 
     * @param {*} isShowFullLoading 
     */
    queryGoodInfo(id, isShowFullLoading = true) {
        return ajax({
            url: '/QRCode/GetGoodsInfoContent?id='+id,
            method: 'get',
            isShowFullLoading
        })
    },
    /**
     * 获取质检报告
     * @param {*} data 
     * @param {*} auth 
     * @param {*} isShowFullLoading 
     */
    queryGoodsQualityRept(id, isShowFullLoading = true) {
        return ajax({
            url: '/QRCode/GetGoodsQualityRept?id='+id,
            method: 'get',
            isShowFullLoading
        })
    },
    /**
     * 通过二维码id获取授权书
     * @param {*} data 
     * @param {*} auth 
     * @param {*} isShowFullLoading 
     */
    queryWarrantByCustomerId(id, isShowFullLoading = true) {
        return ajax({
            url: '/QRCode/GetWarrantByCustomerId?id='+id,
            method: 'get',
            isShowFullLoading
        })
    }
}