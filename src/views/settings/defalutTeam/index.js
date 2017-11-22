import { settings as ajax } from 'services'

export default {
	data() {
		return {
			teamList: [],//团队列表
		}
	},
	mounted() {
		// 获取团队列表
		this.selectValidGroupsByCustomerID()
	},
	methods: {
		// 获取团队列表
		selectValidGroupsByCustomerID() {
			ajax.selectValidGroupsByCustomerID().then((result) => {
				this.teamList = result
			})
		},
		// 设置默认团队
		defaultTeam(id) {
			ajax.updateGroupIsDefault(id).then(() => {
				this.util.msg.success('设置默认团队成功!')
				// 刷新页面
				this.selectValidGroupsByCustomerID()
			})
		},
	}
}