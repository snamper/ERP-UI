// 我要订货相关
import ajax from '../fetch'

export default {
	/**
	 * [getGoodsList 查询条件]
	 * @param  {[type]} data [description]
	 * @return {[type]}      [description]
	 */
	getGoodsList(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Goods/SelectSellGoodsListPage',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},
	/**
	 * 获取商品的SKU
	 */
	getGoodsSKU(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Goods/GetGoodsSku?goodId=' + data,
			method: 'get',
			isShowFullLoading,
			auth
		})
	},
	/**
	 * 获取商品详情
	 * @param  {string}  goodsId           商品id
	 * @param  {string}  groupId           团队id
	 * @param  {Boolean} auth              是否需要登录
	 * @param  {Boolean} isShowFullLoading 是否显示加载动画
	 * @return {[type]}                    [description]
	 */
	getSellGoodsDetail(goodsId, groupId, auth = true, isShowFullLoading = false) {
		return ajax({
			url: '/Goods/GetSellGoodsDetail?goodsId=' + goodsId + '&groupId=' + groupId,
			method: 'get',
			isShowFullLoading,
			auth
		})
	},
	/**
	 * 添加商品收藏
	 */
	addGoodsCollect(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Collect/AddGoods',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	},
	/**
	 * 取消商品收藏
	 */
	cancelGoodsCollect(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Collect/CancelGoods',
			method: 'post',
			isShowFullLoading,
			auth,
			body: data
		})
	}
}