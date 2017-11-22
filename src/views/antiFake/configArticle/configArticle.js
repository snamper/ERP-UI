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
			merchantCode:'',//商家编码
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
		this.type = this.$route.query.type
		this.merchantCode = this.$route.query.merchantCode
		this.getArticel()
	},
	methods: {
		//搜索
        getArticel(){
			ajax.queryArticle({"condition": {"merchantCode": this.merchantCode, "articleType": this.type,"status": 1},"pageSize": 1000,"page": 1})
				.then(result=>{
					this.detail = result
				})
		}
        
	}
}