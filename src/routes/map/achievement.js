const achievement = resolve => require(['views/achievement/achievement/achievement.vue'], resolve) // 业绩查询
const nextagent = resolve => require(['views/achievement/nextagent/nextagent.vue'], resolve) // 直属下级代理
const recomment = resolve => require(['views/achievement/recomment/recomment.vue'], resolve) // 推荐的代理
const detailachievement = resolve => require(['views/achievement/detailachievement/detailachievement.vue'], resolve) // 业绩明细


export default [
	{
		path: '/achievement',
		name: 'achievement',
		component: achievement,
        meta: {
            title: '业绩查询',
            auth: true
        }

	},
	{
		path: '/nextagent',
		name: 'nextagent',
		component: nextagent,
        meta: {
            title: '直属下级代理',
            auth: true
        }

	},
	{
		path: '/recomment',
		name: 'recomment',
		component: recomment,
        meta: {
            title: '推荐的代理',
            auth: true
        }
	},
	{
		path: '/detailachievement',
		name: 'detailachievement',
		component: detailachievement,
        meta: {
            title: '业绩明细',
            auth: true
        }
	},			
]