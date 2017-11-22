// 云仓
import ajax from '../fetch'

export default {
	/**
	 * 查询代理商库存（云仓）	+serarch
	 * @param  {[type]}  id   [description]
	 */
	selectCustomerStock(data, auth = true, isShowFullLoading = true) {
		return ajax({
			url: '/Inventory/SelectCustomerStock',
			method: 'post',
			auth,
			isShowFullLoading,
			body: data
		})
	},
	// /**
	//  * 查询代理商库存（云仓）	
	//  * @param  {[type]}  id   [description]
	//  */
	// selectCustomerStock(id, auth = true, isShowFullLoading = true) {
	// 	return ajax({
	// 		url: '/Inventory/SelectCustomerStock?distributorGroupID=' + id,
	// 		method: 'post',
	// 		auth,
	// 		isShowFullLoading
	// 	})
	// },
	/*
	**箱盒转换（云仓)
	*/
	barcodeUnitconvert(data, auth = true){
        return ajax({
            url: '/Inventory/BarcodeUnitconvert',
            method: 'post',
            body: data,
            auth
        })
	},
	/*
	**扣减库存（云仓）
	*/
	barcodeDeductionStockQty(data, auth = true){
        return ajax({
            url: '/Inventory/BarcodeDeductionStockQty',
            method: 'post',
            body: data,
            auth
        })
	},
	/*
	**查询库存流水（云仓）
	*/
	selectDistributorInventoryBookList(data, auth = true, isShowFullLoading = true){
        return ajax({
            url: '/Inventory/SelectDistributorInventoryBookList',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
	},
}

