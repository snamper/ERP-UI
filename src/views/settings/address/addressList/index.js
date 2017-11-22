import {mapGetters, mapActions} from 'vuex'
import {settings as ajax} from 'services'

export default {
	data() {
		return {
			confirm: {
				title: '提示',
				content: '你确定删除该地址?',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			},
			busy: false,//分页滚动
			page: 1,//页数
			pageSize: 10,//每页条数
			list: [],//地址列表
			query: {},//列表查询条件
			source: '', // 来源，用来区分是否是从订单中进来的操作
		}
	},
	mounted() {
		// 记录来源
		this.source = this.$route.query.source

	},
	methods: {
		// 滚动
		loadmore() {
	        this.busy = true
	        ajax.getAddress(this.query, this.page, this.pageSize).then((result) => {
	            if (result.dataList.length > 0) {
	                this.list.push(...result.dataList)
	                this.page++
	                if (result.total <= this.list.length) {
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
		// 设置默认地址
		defaultAddresss(id) {
			ajax.updateIsDefault(id).then(() => {
				this.util.msg.success('设置默认地址成功!')
				// 刷新页面
    			this.list.forEach((item) => {
    				if (item.distributorAddressID === id) {
    					item.isDefault = 1
    				}
    				else {
    					item.isDefault = 0
    				}
    			})
			})
		},
		// 删除地址
		del(id) {
			this.$refs.confirm.open().then(() => {
				ajax.delAddress(id).then(() => {
					this.util.msg.success('删除地址成功!')
					// 关闭确认框
					 this.$refs.confirm.close()
					// 刷新页面
	    			this.list.forEach((item,index) => {
	    				if (item.distributorAddressID === id) {
	    					this.list.splice(index, 1)
	    				}
	    			})
				})
          	})
		},
		/**
		 * 方法用于订单中选择地址
		 */
		selectAddress(address) {
			if (this.source === 'order') {
				this.$router.push({
					path: '/confirmorder',
					query: {
						address: address
					}
				})
			}
		}
	}
}