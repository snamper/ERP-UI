import {mapGetters, mapActions} from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			groupId: '',//团队id
			page: 1,//页数
			pageSize: 10,//每页条数
			detailPageList: [],//提现记录
		}
	},
	computed: {
        ...mapGetters([
            'customer',
            'currentTeam',
        ])
    },
	mounted() {
		// 获取团队id
		this.groupId = this.currentTeam.distributorGroupID
		console.log(this.groupId)
	},
	methods: {
		// 滚动-获取提现记录
		loadmore() {
	        this.busy = true
	        ajax.getDetailPageList(this.groupId, this.page, this.pageSize).then((result) => {
	            if (result.dataList.length > 0) {
	                this.detailPageList.push(...result.dataList)
	                this.page++
	                if (result.total <= this.detailPageList.length) {
	                    this.busy = true
	                }
	                else {
	                    this.busy = false
	                }
	            }
	            else {
	                this.busy = true
	            }
	        })
    	},
	}
}