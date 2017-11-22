const antiFake = resolve => require(['views/antiFake/index/antiFake.vue'], resolve) // 辩伪首页
const focusWeChat = resolve => require(['views/antiFake/focusWeChat/focusWeChat.vue'], resolve) // 微信关注
const focusProducts = resolve => require(['views/antiFake/focusProducts/focusProducts.vue'], resolve) // 防伪查询
const queryAgency = resolve => require(['views/antiFake/queryAgency/queryAgency.vue'], resolve) // 代理商查询
const anfiCompanyIn = resolve => require(['views/antiFake/configArticle/configArticle.vue'], resolve) // 公司介绍
const configPruct = resolve => require(['views/antiFake/configArticle/configArticle.vue'], resolve) // 产品介绍
const anfiNotice = resolve => require(['views/antiFake/configArticle/configArticle.vue'], resolve) // 最新公告
const report = resolve => require(['views/antiFake/report/report.vue'], resolve) // 质检报告
const productIntroduction = resolve => require(['views/antiFake/productInfo/productInfo.vue'], resolve) // 产品详情
const authorization = resolve => require(['views/antiFake/authorization/authorization.vue'], resolve) // 授权书

export default [
    {
		path: '/a',
		name: 'antiFake',
		component: antiFake,
        meta: {
            title: '辩伪首页',
            auth: false
        }
	},
    {
		path: '/wechat',
		name: 'focusWeChat',
		component: focusWeChat,
        meta: {
            title: '微信关注',
            auth: false
        }
	},
    {
		path: '/debate',
		name: 'focusProducts',
		component: focusProducts,
        meta: {
            title: '防伪查询',
            auth: false
        }
	},
    {
		path: '/queryagency',
		name: 'queryAgency',
		component: queryAgency,
        meta: {
            title: '代理查询',
            auth: false
        }
	},
    {
		path: '/company',
		name: 'anfiCompanyIn',
		component: anfiCompanyIn,
        meta: {
            title: '公司介绍',
            auth: false
        }
	},
    {
		path: '/product',
		name: 'configPruct',
		component: configPruct,
        meta: {
            title: '产品介绍',
            auth: false
        }
	},
    {
		path: '/notice',
		name: 'anfiNotice',
		component: anfiNotice,
        meta: {
            title: '最新公告',
            auth: false
        }
    },
    {
		path: '/report',
		name: 'report',
		component: report,
        meta: {
            title: '质检报告',
            auth: false
        }
    },

    {
		path: '/productIntroduction',
		name: 'productIntroduction',
		component: productIntroduction,
        meta: {
            title: '产品详情',
            auth: false
        }
    },
    {
		path: '/authorization',
		name: 'authorization',
		component: authorization,
        meta: {
            title: '授权书',
            auth: false
        }
	},
]
