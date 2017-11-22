const shopCartList = resolve => require(['views/shopcart/list/shopCartList.vue'], resolve) // 购物车列表
const confirmOrder = resolve => require(['views/shopcart/confirmorder/confirmOrder.vue'], resolve) // 订单确认页面
const orderSuccess = resolve => require(['views/shopcart/ordersuccess/orderSuccess.vue'], resolve) // 订单成功

export default [
	{
		path: '/shopcartlist',
		name: 'shopcartlist',
		component: shopCartList,
		meta: {
			title: '购物车',
			auth: true
		}
	},
	{
		path: '/confirmorder',
		name: 'confirmorder',
		component: confirmOrder,
		meta: {
			title: '订单确认',
			auth: true
		}
	},
	{
		path: '/ordersuccess',
		name: 'ordersuccess',
		component: orderSuccess,
		meta: {
			title: '订单成功',
			auth: true,
			back: '/home'
		}
	}
]