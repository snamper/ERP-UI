import { mapGetters, mapActions } from 'vuex'
import { shop as ajax } from '../../../services'

export default{
	data() {
		return {
			// 是否显示SKU
			isShowSKU: false,

			// 是否在加载
			busy: false,

			// 查询条件
			query: {
				// 商品查询条件
				condition: {
					distributorGroupID: '',  // 分销团队ID
					name: '', // 商品名/商品货号
					isCollect: false // 是否收藏,订货:false,收藏:true
				},
				// 页大小
				pageSize: 10,
				// 页码
				page: 1,
			},
			
			// 商品列表
			goodsList: [],
			// SKU列表
			currentSku: {
				// 分销团队ID
				distributorGroupID: '',
				// 商品ID
				goodsId: '',
				// 商品图片
				img: '',
				// 商品价格
				price: '',
				// SKU相关
				list: {

				}
			}
		}
	},
	/**
	 * 组件安装完成
	 */
	mounted() {
		// 初始化参数
		this.query.condition.distributorGroupID = this.currentTeam.distributorGroupID

		// 给SKU组件初始化当前团队ID
		this.currentSku.distributorGroupID = this.currentTeam.distributorGroupID

		// 获取购物车数量
		this.getCartCount(this.currentTeam.distributorGroupID)
	},
	/**
	 * 属性计算
	 */
	computed: {
		...mapGetters([
				'currentTeam', // 当前团队
				'cartCount' // 购物车数量
			])
	},
	/**
	 * 方法定义
	 */
	methods: {
		...mapActions([
                'setMaskShow', // 控制遮罩层
                'getCartCount', // 获取购物车总数量
            ]),
		/**
		 *  搜索
		 */
		search(goodsName) {
			this.query.condition.name = goodsName
			this.query.page = 0
			this.goodsList = []
			this.loadmore()
		},
		/**
		 * 更新数据
		 */
		refresh() {
			this.goodsList = []
			this.loadmore()
		},
		/**
		 * 跳转购物车
		 */
		toCart() {
			this.$router.push({
				path: '/shopcartlist'
			})
		},
		/**
		 * 显示SKU
		 */
		showSKU(good) {
			// 处理参数
			this.currentSku.goodsId = good.goodsID
			this.currentSku.img = good.imgUrl
			this.currentSku.price = good.sellPrice

			// 先判断商品中是否已经存在SKU
			if (good.sku === null) {
				ajax.getGoodsSKU(good.goodsID).then((result) => {
					// 定义一个局部变量
					var data = result
					// 将结果接进行处理，提前做好后续SKU选择时的判断是否可选择操作,去掉重复
					var colorValue = []
					result.colors.forEach((item) => {
						item.isShow = false
						item.isSel = false
						// 去重复
						if (colorValue.length === 0) {
							colorValue.push(item)
						} else {
							var isExists = false
							colorValue.forEach((c) => {
								if (c.value === item.value) {
									isExists = true
								}
							})
							if (isExists === false) {
								colorValue.push(item)
							}
						}
					})
					data.colors = colorValue

					var sizeValue = []
					result.sizes.forEach((item) => {
						item.isShow = false
						item.isSel = false
						// 去重复
						if (sizeValue.length === 0) {
							sizeValue.push(item)
						} else {
							var isExists = false
							sizeValue.forEach((c) => {
								if (c.value === item.value) {
									isExists = true
								}
							})
							if (isExists === false) {
								sizeValue.push(item)
							}
						}
					})
					data.sizes = sizeValue

					// 循环商品列表，进行补全sku信息
					for(var item of this.goodsList) {
						if (item.goodsID === good.goodsID) {
							item.sku = data
							break
						}
					}

					// 给组件绑定数据
					this.currentSku.list = data

					// 显示SKU
					this.isShowSKU = true
					this.setMaskShow(this.isShowSKU)
				})
			} else {
				// 给组件绑定数据
				this.currentSku.list = good.sku
				this.currentSku.list.colors.forEach((item) => {
					item.isSel = false
				})
				this.currentSku.list.sizes.forEach((item) => {
					item.isSel = false
				})

				// 显示sku组件
				this.isShowSKU = true
				this.setMaskShow(this.isShowSKU)
			}
		},
		/**
		 * 关闭SKU
		 */
		closeSKU() {
			this.isShowSKU = false
			this.setMaskShow(this.isShowSKU)
		},

		/**
		 * 滚动条加载分页数据
		 */
		loadmore() {
			this.busy = true
			this.getGoodsList()
		},

		/**
		 * 获取商品列表
		 */
		getGoodsList() {
			ajax.getGoodsList(this.query).then((result) => {
				const list = result.dataList
				list.forEach((item) => {
					item.sku = null
				})

				this.goodsList.push(...list) 
				if (result.dataList.length > 0) {
					this.query.page++

					if (result.total <= this.goodsList.length) {
	                    this.busy = true
	                }
	                else {
	                    this.busy = false
	                }

				} else {
					this.busy = true
				}
			})
		},
		/**
		 * 添加商品收藏
		 */
		addGoodsCollect(good) {
			ajax.addGoodsCollect({
				id: good.goodsID
			}).then((result) => {
				good.distributorGoodsCollectionD = result
				// this.refresh()
				this.util.msg.success('收藏成功')
			})
		},
		/**
		 * 取消商品收藏
		 */
		cancelGoodsCollect(good) {
			ajax.cancelGoodsCollect({
				id: good.distributorGoodsCollectionD
			}).then((result) => {
				good.distributorGoodsCollectionD = null
				// this.refresh()
				this.util.msg.success('取消成功')
			})
		},
		/**
		 * 跳转到商品详情
		 */
		toGoodsDetail(good) {
			this.$router.push({
				path: '/goodsdetail',
				query: {
					goodsId: good.goodsID
				}
			})
		}
	}
}