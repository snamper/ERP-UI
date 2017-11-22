import { mapGetters, mapActions } from 'vuex'
import { shopCart as ajax } from '../../../services'

export default {
	data() {
		return {
			// 查询没有数据
			noData: false,
			// 是否在加载
			busy: false,
			// 查询条件
			query: {
				// 商品查询条件(查询条件,分销团队ID)
				condition: '',
				// 页大小
				pageSize: 10,
				// 页码
				page: 1,
			},
			// 购物车列表
			cartList:[],
			// 是否全选
			isAllSel: false,
			// 总价格
			totalPrice: 0,
			// 是否编辑购物车
			isEdit: false,
			// 弹出框配置
			confirm: {
                title: '提示',
                content: '确定进行提交？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
		}
	},
	mounted() {
		// 初始化参数
		this.query.condition = this.currentTeam.distributorGroupID

		// this.getCartPageList()
	},
	computed: {
		...mapGetters([
				'currentTeam', // 当前团队
				'cartCount' // 购物车数量
			])
	},
	watch: {
		/**
		 * 监控全选/取消全选
		 */
		isAllSel(isAllSel) {
			// 还原总价格
			this.totalPrice = 0

			// 循环处理
			this.cartList.forEach((item) => {
				// 给所有列指定选择/不选择
				item.isSel = isAllSel

				// 判断是否为选择,如果是则算总价
				if (isAllSel) {
					this.totalPrice += parseFloat(item.sellPrice * item.qty) 
				}
			})
		}
	},
	methods: {
		...mapActions([
				'setMaskShow', // 控制遮罩层
                'getCartCount', // 获取购物车总数量
                'setCartList', // 设置选择的商品
			]),
		/**
		 * 滚动加载分页
		 */
		loadmore() {
			this.getCartPageList()
		},
		/**
		 * 更新数据
		 */
		refresh() {
			this.cartList= []
			this.getCartPageList()
		},
		/**
		 * 编辑/完成 切换
		 */
		editCart(isEdit) {
			this.isEdit = isEdit
		},
		/**
		 * 删除购物车
		 */
		delCart() {
			var data = []
			// 数据处理
			this.cartList.forEach((item) => {
				// 判断是否为选择,如果是则算总价
				if (item.isSel) {
					data.push(item.id)
				}
			})

			// 判断是否有数据可以删除
			if (data.length === 0) {
				this.util.msg.error('请选择需要删除的商品')
				return
			}

			// 删除购物车
			// 弹出框配置
			this.confirm = {
                title: '提示',
                content: '确认删除选中的商品？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
			this.$refs.confirm.open().then(() => {
				// 关闭确定提示框
				this.$refs.confirm.close()
				ajax.deleteCartGoods(data).then((result) => {
					this.util.msg.success('删除成功')
					this.refresh()
				})
			})
		},
		/**
		 * 购物车选中
		 */
		cartSel(isSel) {
			// 还原总价格
			this.totalPrice = 0

			// 选择的数量
			var selNum = 0

			// 循环处理
			this.cartList.forEach((item) => {
				// 判断是否为选择,如果是则算总价
				if (item.isSel) {
					selNum += 1
					this.totalPrice += parseFloat(item.sellPrice * item.qty)
				}
			})

			this.isAllSel = selNum === this.cartList.length ? true : false
		},
		/**
		 * 购物车库存数量变化
		 */
		qtyChange(num, id) {
			for(var item of this.cartList) {
				if (item.id === id) {
					// 修改之后将值赋值
					item.qty = num

					// 找到了调整库存的数据行，进行调用数据库接口
					ajax.saveCart({
						id: id, // 购物车ID
						groupId: this.currentTeam.distributorGroupID, // 团队ID
						goodsId: item.goodsId, // 商品ID
						barcodeId: item.barcodeId, // 条码ID
						qty: num // 数量
					}).then((result) => {
						// 操作成功之后，从新计算
						this.cartSel()
					})
					break
				}
			}
		},
		/**
		 * 获取购物车列表
		 */
		getCartPageList() {
			ajax.getCartPageList(this.query).then((result) => {
				// 循环结果，增加是否选择字段
				result.dataList.forEach((item) => {
					item.isSel = false
				})

				this.cartList.push(...result.dataList) 
				if (result.dataList.length > 0) {
					this.page++

					if (result.total <= this.cartList.length) {
	                    this.busy = true
	                }
	                else {
	                    this.busy = false
	                }

				} else {
					this.busy = true
				}

				// 判断是否有数据
				this.noData = this.cartList.length > 0 ? true : false
			})
		},
		/**
		 * 提交购物车
		 */
		submitCart() {
			// 参数处理
			var data = []
			this.cartList.forEach((item) => {
				if (item.isSel) {
					data.push(item)
				}
			})

			if (data.length === 0) {
				this.util.msg.error('请先选择需要下单的商品!')
				return
			}

			// 提交订单确认
			this.confirm = {
                title: '提示',
                content: '确定进行提交？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            }
			this.$refs.confirm.open().then(() => {
				// 关闭确定提示框
				this.$refs.confirm.close()

				this.setCartList(data)

				// 提交到订单确认页面
				this.$router.push({
					path: '/confirmorder'
				})
			})
		}
	}
}