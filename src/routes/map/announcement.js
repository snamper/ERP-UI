const announcement = resolve => require(['views/announcement/announcement/announcement.vue'], resolve) // 公告列表
const announcementdetail = resolve => require(['views/announcement/announcementdetail/announcementdetail.vue'], resolve) // 公告详情



export default [
	{
		path: '/announcement',
		name: 'announcement',
		component: announcement,
        meta: {
            title: '公告',
            auth: true
        }

	},
	{
		path: '/announcementdetail',
		name: 'announcementdetail',
		component: announcementdetail,
        meta: {
            title: '公告详情',
            auth: true
        }

	}		
]