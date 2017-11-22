import * as types from '../mutationTypes'
import { shopCart as ajax } from '../../services'

export default {
	/**
	 * 获取购物车总数量
	 */
	getCartCount: ({commit}, groupId) => {

		ajax.getCartGoodsQty(groupId).then((result) => {

			commit(types.SHOPCART_GET_COUNT, result ? result : 0)
		})
	},
	/**
	 * 设置购物车中选择的商品
	 */
	setCartList: ({commit}, list) => {
		commit(types.SHOPCART_SET_LIST, list)
	}
}