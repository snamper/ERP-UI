const warehouse = resolve => require(['views/warehouse/warehouse/warehouse.vue'], resolve) // 云仓首页
const warewater = resolve => require(['views/warehouse/warewater/warewater.vue'], resolve) // 库存流水


export default [
	{
		path: '/warehouse',
		name: 'warehouse',
		component: warehouse,
        meta: {
            title: '云仓',
            auth: true
        }

	},	
	{
		path: '/warewater',
		name: 'warewater',
		component: warewater,
        meta: {
            title: '库存流水',
            auth: true
        }

	},	
]