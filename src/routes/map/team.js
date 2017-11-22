const team = resolve => require(['views/team/team.vue'], resolve) // 我的团队
const promotionTeam = resolve => require(['views/team/promotion/promotion.vue'], resolve) // 推广新人
const registerTeam = resolve => require(['views/team/register/register.vue'], resolve) // 我的团队
const auditTeam = resolve => require(['views/team/audit/audit.vue'], resolve) // 我要升级
const upgradeTeam = resolve => require(['views/team/upgrade/upgrade.vue'], resolve) // 升级审核
const subordinateTeam = resolve => require(['views/team/subordinate/subordinate.vue'], resolve) // 升级审核
const codeTeam = resolve => require(['views/team/code/code.vue'], resolve) // 二维码
const recordTeam = resolve => require(['views/team/record/record.vue'], resolve) // 升级记录
const authorizationTeam = resolve => require(['views/team/authorization/authorization.vue'], resolve) // 我的授权书

export default [
	{
		path: '/team',
		name: 'team',
		component: team,
        meta: {
            title: '我的团队',
            auth: true
        }

	},
	{
		path: '/promotionTeam',
		name: 'promotionTeam',
		component: promotionTeam,
        meta: {
            title: '推广新人',
            auth: true
        }
	},
	{
		path: '/registerTeam',
		name: 'registerTeam',
		component: registerTeam,
        meta: {
            title: '审核代理',
            auth: true
        }
	},
	{
		path: '/auditTeam',
		name: 'auditTeam',
		component: auditTeam,
        meta: {
            title: '我要升级',
            auth: true
        }
	},
	{
		path: '/upgradeTeam',
		name: 'upgradeTeam',
		component: upgradeTeam,
        meta: {
            title: '升级审核',
            auth: true
        }
	},
	{
		path: '/subordinateTeam',
		name: 'subordinateTeam',
		component: subordinateTeam,
        meta: {
            title: '我的下级',
            auth: true
        }
	},
	{
		path: '/codeTeam',
		name: 'codeTeam',
		component: codeTeam,
        meta: {
            title: '查看二维码',
            auth: true
        }
	},
	{
		path: '/recordTeam',
		name: 'recordTeam',
		component: recordTeam,
        meta: {
            title: '升级记录',
            auth: true
        }
	},
	{
		path: '/authorizationTeam',
		name: 'authorizationTeam',
		component: authorizationTeam,
        meta: {
            title: '我的授权书',
            auth: true
        }
	},		
]