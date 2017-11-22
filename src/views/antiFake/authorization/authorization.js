import {antiFake as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			type:'',//类型
			imgUrl:'',//图片地址
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
			ajax.queryWarrantByCustomerId(this.qrCodeID)
				.then(result=>{
					this.imgUrl = `data:image/jpeg;base64,${result}`
				})
		}
        
	}
}