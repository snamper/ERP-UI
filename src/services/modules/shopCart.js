// 购物车相关
import ajax from '../fetch'

export default {
	/**
	 * 保存购物车
	 */
	saveCart(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Cart/SaveCart',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},
	/**
	 * 获取购物车总数量
	 */
	getCartGoodsQty(groupId, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Cart/GetCartGoodsQty?groupId=' + groupId,
			method: 'get',
			isShowFullLoading,
			auth
		})
	},
	/**
	 * 获取购物车分页列表
	 */
	getCartPageList(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Cart/GetCartPageList',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},
	/**
	 * 删除购物车商品
	 */
	deleteCartGoods(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Cart/DeleteCartGoods',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},
	/**
	 * 获取购物车结算金额信息
	 */
	getSettlementAmountInfo(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Cart/GetSettlementAmountInfo',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},

	/**
	 * 获取默认地址
	 */
	getDefaultAddress(auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Customer/GetDefaultAddress',
			method: 'get',
			isShowFullLoading,
			auth
		})
	},

	/**
	 * 购物车提交
	 */
	createOrder(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Order/CreateOrder',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	}
}