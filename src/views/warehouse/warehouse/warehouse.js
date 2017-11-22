import {warehouse as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
	data() {
		return {
			noData: false,
			warehouseList: [],//云仓列表数据
			distributorGroupID: 'af31722b-b4e5-480b-876d-19c4fa425eba',//模拟假团队id
			confirm: {
				title: '提示',
				content: '该功能用于代理商库存箱盒转换（1箱=XX盒），操作不可逆，请谨慎使用',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				//show: false
			},
			currentWarehouse: {
				qty: 0,
			},//控制操作之后库存数量的变化
			currentTitleFlag: true,//控制弹出框更改数量操作时的title
			//库存数量操作(加减库存和箱盒转换)
			form: {
			  barcodeID: "",
			  distributorGroupID: "",
			  qty: 1,
			  merchantID: "",
			  customerID: "",
			  userName: ""
			},
			inventoryForm: {
				barcodeID: "",
				distributorGroupID: "",
				qty: 0,
				customBC: '',
				goodsName:'',
			},//传递给下个页面的对象
			//查询云仓列表传递的参数
			query: {
				distributorGroupID: '',
				key: ''
			},
		}
	},
    computed: {
        ...mapGetters([
            'teamList',//所有团队数据
            'currentTeam'//默认团队数据
        ])
    },
	mounted() {
		//console.log(this.currentTeam)
		this.queryList()
	},
	methods: {
		//搜索
        search(val) {
            console.log(val)
            this.query.key = val 
            this.queryList()
        },
        //弹出弹出框
		showConfirm(item, flag) {
			this.currentWarehouse = item
			this.form.distributorGroupID = this.currentTeam.distributorGroupID //moni
			this.form.barcodeID = item.barcodeID
			if(flag == 1) {
				this.confirm.content = '该功能用于代理商库存箱盒转换（1箱='+item.packQty+'盒），操作不可逆，请谨慎使用。'
				this.currentTitleFlag = true
			}
			if(flag == 2) {
				this.confirm.content = '该功能用于代理零售扣减库存，操作不可逆，请谨慎使用。'
				this.currentTitleFlag = false
			}
			this.click()
		},
		//弹出框控制按钮
		click() {
			this.$refs.confirm.open().then(() => {
				console.log('确定按钮触发')
				if(this.currentTitleFlag == true) {
					this.changeBarcodeUnitconvert()
				}else {
					this.changeBarcodeDeductionStockQty()
				}				
				this.$refs.confirm.close()
				this.util.msg.success('设置成功!')
			})
		},
		// // 弹出框-取消
		// closeConfirm() {
		// 		this.confirm.show = false
		// },
		// // 弹出框-确定
		// submitConfirm() {
		// 	this.confirm.show = false
		// 	if(this.currentTitleFlag == true) {
		// 		this.changeBarcodeUnitconvert()
		// 	}else {
		// 		this.changeBarcodeDeductionStockQty()
		// 	}
		// 	this.util.msg.success('设置成功!')
		// },
		changeInputNumber(val) {
			console.log(val)
			this.form.qty = val
		},
		//查询云仓列表
		queryList() {
			this.query.distributorGroupID = this.currentTeam.distributorGroupID
			ajax.selectCustomerStock(this.query).then((result) => {
				console.log(result)
				this.warehouseList = result
				this.noData = this.warehouseList.length > 0
			})
		},
		//扣减库存
		changeBarcodeDeductionStockQty() {
			//console.log('aiaiai')
			//console.log(this.form)
			ajax.barcodeDeductionStockQty(this.form).then((result) => {
				this.queryList()
				this.currentWarehouse.qty = 1
			})
		},
		//箱盒转换库存
		changeBarcodeUnitconvert() {
			//console.log('woaiaiai')
			//console.log(this.form)
			ajax.barcodeUnitconvert(this.form).then((result) => {
				this.queryList()
				this.currentWarehouse.qty = 1 //将输入框的初始值值为1
			})
		},
		//传到订单流水页面的东西
		gotoWareWater(item) {
			this.inventoryForm.barcodeID = item.barcodeID
			this.inventoryForm.distributorGroupID = this.currentTeam.distributorGroupID
			this.inventoryForm.qty = item.qty
			this.inventoryForm.customBC = item.customBC
			this.inventoryForm.goodsName = item.goodsName
			this.$router.push({
				path: '/warewater',
				query: this.inventoryForm
			})
		}
	}
}
/*

data() { return { busy: false } }
methods: {
    loadmore() {
        this.busy = true
        ajax.....(this.query).then((result) => {
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
            esle {
                this.busy = true
            }
        })
    }
}*/

		// /**
		//  * 滚动条加载分页数据
		//  */
		// loadmore() {
		// 	this.busy = true
		// 	this.getGoodsList()
		// },

		// /**
		//  * 获取商品列表
		//  */
		// getGoodsList() {
		// 	ajax.getGoodsList(this.query).then((result) => {
		// 		// console.log(result)

		// 		const list = result.dataList
		// 		list.forEach((item) => {
		// 			item.sku = null
		// 		})

		// 		this.goodsList.push(...list) 
		// 		if (result.dataList.length > 0) {
		// 			this.page++

		// 			if (result.total <= this.goodsList.length) {
	 //                    this.busy = true
	 //                }
	 //                else {
	 //                    this.busy = false
	 //                }

		// 		} else {
		// 			this.busy = true
		// 		}
		// 	})
		// }