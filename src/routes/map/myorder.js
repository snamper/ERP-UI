/**
 * 我的订单 下级订单
 */
const MyOrder = resolve => require(['views/myOrder/list/index.vue'], resolve) // 我的订单列表
const SubOrder = resolve => require(['views/subOrder/list/index.vue'], resolve) // 下级订单列表
const Detail = resolve => require(['views/myOrder/detail/index.vue'], resolve) // 订单详情
export default [
    {
        path: '/myorder',
        name: 'myorder',
        component: MyOrder,
        meta: {
            title: '我的订单',
            auth: true,
            back: '/home',
            navButton: {
                path: '/home',
                icon: 'zhuye'
            }
        }
    },
    {
        path: '/suborder',
        name: 'suborder',
        component: SubOrder,
        meta: {
            title: '下级订单',
            auth: true,
            back: '/home',
            navButton: {
                path: '/home',
                icon: 'zhuye'
            }
        }
    },
    {
        path: '/orderDetail',
        name: 'orderDetail',
        component: Detail,
        meta: {
            title: '订单详情',
            auth: true,
            navButton: {
                path: '/home',
                icon: 'zhuye'
            }
        }
    }
]