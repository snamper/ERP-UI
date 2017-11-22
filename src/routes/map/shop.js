const goodsList = resolve => require(['views/shop/list/goodsList.vue'], resolve) // 订货列表页面
const goodsDetail = resolve => require(['views/shop/details/goodsDetails.vue'], resolve) // 商品详情页面

export default [
	{
		path: '/goodslist',
		name: 'goodslist',
		component: goodsList,
		meta: {
			title: '我要订货',
			auth: true
		}
	},
	{
		path: '/goodsdetail',
		name: 'goodsdetail',
		component: goodsDetail,
		meta: {
			title: '商品详情',
			auth: true
		}
	}
]