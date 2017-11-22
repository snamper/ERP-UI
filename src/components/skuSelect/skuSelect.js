import { mapGetters, mapActions } from 'vuex'
import { shopCart as ajax } from '../../services'

export default {
	name:'PgSkuSelect',
	data(){
		return {
			// 是否已经选择
			isSel: false,
			// 选择的规格1
			color: null,
			// 选择的规格2
			size: null,
			// 购物车数量
			number: 0
		}
	},
	props: {
		isShowSKU: Boolean,
		skulist: Object
	},
	mounted() {
	},
	/**
	 * 属性计算
	 */
	computed: {
		
	},
	/**
	 * 属性监控
	 */
	watch: {
		isShowSKU() {
			if (!this.isShowSKU) {
				this.isSel = false
				this.color = null
				this.size = null
				this.number = 0
			}
		}
	},
	/**
	 * 方法定义
	 */
	methods: {
		...mapActions([
				'getCartCount', // 获取购物车总数量
			]),
		/**
		 * SKU关闭
		 */
		closeSKU() {
			this.$emit('closeSKU')
		},
		/**
		 * 规格1选择
		 */
		colorSelect(color) {
			// 设置当前选择
			this.color = color
			this.isSel = true

			// 当前设置为选择，其他的取消选择
			this.skulist.list.colors.forEach((item) => {
				if (item.value === color.value) {
					item.isSel = true
				} else {
					item.isSel = false
				}
			})

			// 控制规格2是否可操作
			// 1、先去skus中查询规格2的id，并记录下来
			var sku2s = ''
			this.skulist.list.skus.forEach((item) => {
				if (this.color.value === item.colorId) {
					sku2s += ',' + item.sizeId
				}
			})

			// 2、根据记录的id，设置规格2中可以操作项
			this.skulist.list.sizes.forEach((item) => {
				// 规格1重新选择之后，规格2进行重置
				item.isSel = false
				if (sku2s.indexOf(item.value) >= 0) {
					item.isShow = true
				} else {
					item.isShow = false
				}
			})
		},
		/**
		 * 规格2选择
		 */
		sizeSelect(size) {
			if (size.isShow) {
				this.size = size
				this.isSel = true

				// 当前设置为选择，其他的取消选择
				this.skulist.list.sizes.forEach((item) => {
					if (item.value === size.value) {
						item.isSel = true
					} else {
						item.isSel = false
					}
				})

			} else {
				//this.util.msg.success('请先选择上面的规格')
			}
		},
		/**
		 * 数量
		 */
		numberChange(val) {
			this.number = val
		},
		/**
		 * 添加购物车
		 */
		addCart() {
			if (!this.color || !this.size) {
				this.util.msg.error('请选择规格')
				return
			}
			// 参数定义，初始化
			const data = {
				id: '', // 购物车ID
				groupId: this.skulist.distributorGroupID, // 团队ID
				goodsId: this.skulist.goodsId, // 商品ID 
				barcodeId: '', // 条码ID
				qty: this.number // 数量
			}
			// 根据选择的SKU信息，查找skuID
			for(var item of this.skulist.list.skus) {
				if (this.color.value === item.colorId && this.size.value === item.sizeId) {
					data.barcodeId = item.barcodeId
					break
				}
			}

			// 验证选择的数据是否正确
			if (data.barcodeId === '') {
				this.util.msg.error('SKU 选择不正确')
			} else {
				// 保存到购物车.
				ajax.saveCart(data).then((result) => {
					// 操作提示
					this.util.msg.success('添加购物车成功')

					// 更新购物车数量
					this.getCartCount(this.skulist.distributorGroupID)

					// 关闭
					this.closeSKU()
				})
			}
		}
	}
}