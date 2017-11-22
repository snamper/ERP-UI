export default {
	data() {
		return {
			btns: [
				{
					buttonText: '跳转到登录页面',
					buttonPath: '/login'
				},
			],
			name: ''
		}
	},
	mounted() {
		this.name = this.$route.query.name
	},
	muthods: {
		
	}	
}