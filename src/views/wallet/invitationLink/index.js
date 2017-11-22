import {mapGetters, mapActions} from 'vuex'

export default {
	data() {
		return {
			imgSrc: ''
		}
	},
	mounted() {
		// 获取二维码图片路径
		this.imgSrc = this.$route.query.imgSrc
	},
	methods: {
		
	}
}