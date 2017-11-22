// 我的团队
import ajax from '../fetch'

export default {
	/*
	**收货地址列表
	*/
	getAddress(condition, page, pageSize, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Customer/GetAddress',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                condition: condition,
                pageSize: pageSize,
                page: page
            }
        })
	},
    /*
    **设置默认地址 
    @params listID  地址id [describute]
    */
    updateIsDefault(distributorAddressID, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Customer/UpdateIsDefault',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                distributorAddressID: distributorAddressID
            }
        })
    },
    /*
    **新增和编辑默认地址 
    @params condition   [describute]
    */
    updateAddress(condition, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Customer/UpdateAddress',
            method: 'post',
            auth,
            isShowFullLoading,
            body: condition
        })
    },
    /*
    **删除收货地址 
    @params condition   [describute]
    */
    delAddress(id, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Customer/DelAddress',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                distributorAddressID: id
            }
        })
    },
    /**
     * 添加或修改分销客户(个人信息设置)
     */
    updateCustomerWx(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Customer/UpdateCustomerWx',
            method: 'post',
            auth,
            isShowFullLoading,
            body: data
        })
    },
    /**
     * 获取分销客户详情/根据客户ID返回客户详情CustomerID
     * @param  {string}  id   分销客户id
     * @param  {Boolean} auth 是否需要登录
     * @return {[type]}       [description]
     */
    getDistributionAccount(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Customer/GetCustomerInfo?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 获取团队列表
     * @return {[type]}       [description]
     */
    selectValidGroupsByCustomerID(auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Group/SelectValidGroupsByCustomerID',
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 设置默认团队
     * @return {[type]}   request  团队id  [description]
     */
    updateGroupIsDefault(request, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Group/UpdateIsDefault?request='+request,
            method: 'post',
            auth,
            isShowFullLoading,
        })
    }
}