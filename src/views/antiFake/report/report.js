import {antiFake as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			type:'',//类型
			detail:{
				content:'',
				name:''
			},//文章详情
			qrCodeID:'',//二维码id
		}
	},
    computed: {
        // ...mapGetters([
        //     'teamList',//所有团队数据
        //     'currentTeam'//默认团队数据
        // ])
    },
	mounted() {
		//console.log(this.currentTeam)
		this.qrCodeID = this.$route.query.qrCodeID
		this.getArticel()
	},
	methods: {
		//搜索
        getArticel(){
			ajax.queryGoodsQualityRept(this.qrCodeID)
				.then(result=>{
					this.detail = result
				})
		}
        
	}
}