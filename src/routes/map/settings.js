const Settings = resolve => require(['views/settings/index/index.vue'], resolve) // 设置主页
const AddressList = resolve => require(['views/settings/address/addressList/index.vue'], resolve) // 地址列表
const AddAddress = resolve => require(['views/settings/address/addAddress/index.vue'], resolve) // 佣金
const UserInfo = resolve => require(['views/settings/userInfo/userInfo.vue'], resolve) // 个人信息设置
const DefalutTeam = resolve => require(['views/settings/defalutTeam/index.vue'], resolve) // 默认团队管理
const collect = resolve => require(['views/settings/collect/index.vue'], resolve) // 我的收藏

export default [
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        meta: {
            title: '设置',
            auth: true,
            navButton: {
                path: '/home',
                icon: 'zhuye'
            }
        }
    },
    {
        path: '/addressList',
        name: 'addressList',
        component: AddressList,
        meta: {
            title: '管理收货地址',
            auth: true
        }
    },
    {
        path: '/addAddress',
        name: 'addAddress',
        component: AddAddress,
        meta: {
            title: '添加收货地址',
            auth: true
        }
    },
    {
        path: '/userInfo',
        name: 'userInfo',
        component: UserInfo,
        meta: {
            title: '个人信息设置',
            auth: true
        }
    },
    {
        path: '/defalutTeam',
        name: 'defalutTeam',
        component: DefalutTeam,
        meta: {
            title: '默认团队管理',
            auth: true
        }
    },
    {
        path: '/collect',
        name: 'collect',
        component: collect,
        meta: {
            title: '我的收藏',
            auth: true
        }
    }
]