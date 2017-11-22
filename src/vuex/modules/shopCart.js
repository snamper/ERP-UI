import * as types from '../mutationTypes'

const state = {
	count: 0, // 购物车总数量
	cartGoods: [], // 购物车中勾选进行提交订单的商品
}

const mutations = {
	/**
	 * 查询购物车总数量
	 */
	[types.SHOPCART_GET_COUNT](state, count) {
		state.count = count
	},
	/**
	 * 设置选择的购物车商品
	 */
	[types.SHOPCART_SET_LIST](state, list) {
		state.cartGoods = list
	}
}

export default {
	state,
	mutations
}