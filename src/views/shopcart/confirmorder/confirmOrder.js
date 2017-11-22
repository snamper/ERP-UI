import { mapGetters, mapActions } from 'vuex'
import { shopCart as ajax } from '../../../services'

export default {
	data() {
		return {
			// 收货地址
			address: {},
			// 商品列表
			goodsList: [],
			// 几件商品
			goodsCoutn: 0,
			// 总价格
			totalPrice: 0,

			// 订单信息
			orderInfo: {
				groupId: '', // 团队ID
				state: '', // 省份
				city: '', // 城市
				district: '', // 区 
				address: '', // 详细地址
				phone: '', // 手机号码
				mobile: '', // 收货人移动电话
				linkMan: '', // 联系人 
				note: '', // 备注
				cartItemIds: [] // 购物车商品项ID集合
			},

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
		// 设置当前团队ID
		this.orderInfo.groupId = this.currentTeam.distributorGroupID

		// 默认收货地址
		if (this.$route.query.address) {
			var ad = this.$route.query.address
			this.address = {
				state: ad.stateName,
				city: ad.cityName,
				district: ad.districtName,
				address: ad.address,
				linkTel: ad.linkTel,
				mobile: ad.mobile,
				linkMan: ad.linkMan
			}

		} else {
			this.getDefaultAddress()
		}

		// 将购物车中选择的商品加载到订单确认页面
		// this.goodsList.push(...this.$route.query.goods)
		this.goodsList.push(...this.cartList)

		// 汇总信息
		this.goodsList.forEach((item) => {
			this.goodsCoutn += parseInt(item.qty)
			this.totalPrice += (item.sellPrice * item.qty)
			this.orderInfo.cartItemIds.push(item.id)
		})
	},
	watch: {

	},
	computed: {
		...mapGetters([
				'currentTeam', // 当前团队
				'cartList', // 当前选择的购物车商品
			])
	},
	methods: {
		/**
		 * 获取默认地址
		 */
		getDefaultAddress() {
		 	ajax.getDefaultAddress().then((result) => {
		 		this.address = result
		 	})
		},
		/**
		 * 跳转到选择地址
		 */
		toSelectAddress() {
			this.$router.push({
				path: '/addressList',
				query: {
					source: 'order'
				}
			})
		},
		/**
		 * 订单提交
		 */
		createOrder() {
			// 确认提示框
			this.$refs.confirm.open().then(() => {
				// 关闭确定提示框
				this.$refs.confirm.close()
				// 判断是否有地址信息
				if (!this.address) {
					this.util.msg.error('请选择收货地址')
					return
				}

				// 数据处理
				if (!this.address.state) {
					this.util.msg.error('没有选择省份')
					return
				}
				this.orderInfo.state = this.address.state
				if (!this.address.city) {
					this.util.msg.error('请选择城市')
					return
				}
				this.orderInfo.city = this.address.city
				if (!this.address.district) {
					this.util.msg.error('请选择区/县')
					return
				}
				this.orderInfo.district = this.address.district
				if (!this.address.address) {
					this.util.msg.error('没有详细地址')
					return
				}
				this.orderInfo.address = this.address.address
				// if (!this.address.linkTel) {
				// 	this.util.msg.error('没有收货电话')
				// 	return
				// }
				this.orderInfo.phone = this.address.linkTel
				if (!this.address.mobile) {
					this.util.msg.error('没有手机号码')
					return
				}
				this.orderInfo.mobile = this.address.mobile
				if (!this.address.linkMan) {
					this.util.msg.error('没有收货人')
					return
				}
				this.orderInfo.linkMan = this.address.linkMan

				// 订单提交
				ajax.createOrder(this.orderInfo).then((result) => {
					// this.util.msg.success('订单提交成功')
					this.$router.push({
						path: '/ordersuccess'
					})
				})
			})
		}
	}
}