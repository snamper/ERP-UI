// 公告
import ajax from '../fetch'

export default {
	/**
	 * 查询当前登陆用户未读消息
	 * @param  {[type]}  id   [description]
	 */
	selectMsgUnReadList(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Message/SelectMsgUnReadList',
			method: 'get',
			auth,
			isShowFullLoading,
			body: data
		})
	},
	/**
	 * 查询当前登陆用户消息分页列表
	 * @param  {[type]}  id   [description]
	 */
	selectMsgPageList(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Message/SelectMsgPageList',
			method: 'post',
			auth,
			isShowFullLoading,
			body: data
		})
	},
	/**
	 * 查询消息详情
	 * @param  {[type]}  id   [description]
	 */
	selectMsgDetail(id, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Message/SelectMsgDetail?id=' + id,
			method: 'get',
			auth,
			isShowFullLoading,
		})
	},
}

