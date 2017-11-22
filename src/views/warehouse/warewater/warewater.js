import {warehouse as ajax} from 'services'

export default {
	data() {
		return {
			noData: false,
			inventoryForm: {},//接受上个页面穿过来的对象
			inventoryList: [],//页面绑定数据
			
		}
	},
	mounted() {
		this.inventoryForm = this.$route.query //接受上个页面穿过来的对象
		console.log(this.inventoryForm)
		this.queryInventoryBookList()
	},
	methods: {
        search(val){
            console.log(val)
        },	
        queryInventoryBookList() {
        	ajax.selectDistributorInventoryBookList(this.inventoryForm).then((result) => {
        		console.log('wuxin')
        		console.log(result)
        		this.inventoryList = result
        		this.noData = this.inventoryList.length > 0
        	})
        }	
	}
}