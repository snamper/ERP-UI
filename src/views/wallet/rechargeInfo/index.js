import {mapGetters, mapActions} from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			query: {
				condition: {
				    distributorGroupID: "",
				},
				pageSize: 10,
				page: 1		
			},
			rechargeList: [],//提现记录
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
		this.query.condition.distributorGroupID = this.currentTeam.distributorGroupID
		console.log(this.groupId)
	},
	methods: {
		// 滚动-获取提现记录
		loadmore() {
	        this.busy = true
	        ajax.selectPayApplyListPageForMySel(this.query).then((result) => {
	        	console.log(result)
	            if (result.dataList.length > 0) {
	                this.rechargeList.push(...result.dataList)
	                this.query.page++
	                if (result.total <= this.rechargeList.length) {
	                    this.busy = true
	                }
	                else {
	                    this.busy = false
	                }
	            }
	            else {
	                this.busy = true
	                this.rechargeList.push(...result.dataList)
	            }
	        })
    	},
	}
}