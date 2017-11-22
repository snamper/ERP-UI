import {mapGetters, mapActions} from 'vuex'
import { wallet as ajax } from 'services'

export default {
	data() {
		return {
			imgSrc: '',//二维码图片
			groupId: '',//团队ID
			drawalInfo: {},//提现信息
			note: '',//备注
			confirm: {
				title: '提示',
				content: '你确定要提交提现申请?',
				confirmButtonText: '确定',
				cancelButtonText: '取消',
			},
		}
	},
	computed: {
        ...mapGetters([
            'customer',
            'currentTeam',
        ])
    },
	mounted() {
		//获取团队的id和分销商信息
		this.groupId = this.currentTeam.distributorGroupID
		this.customer = this.customer
		console.log(this.customer)
		// 获取提现信息
		this.getWithdrawalInfo()
	},
	methods: {
		// 获取提现信息
		getWithdrawalInfo() {
			if (this.customer.customerId == null || this.customer.customerId === '') {
				this.customer.customerId = ''
			}
			ajax.getWithdrawalInfo(this.groupId, this.customer.customerId).then((result) => {
				this.drawalInfo = result
			})
		},
		// 提交提现申请
		submit() {
			this.$refs.confirm.open().then(() => {
				ajax.applyWithdrawal({
					customerId: this.customer.customerId,
					groupId: this.groupId,
					amount: this.drawalInfo.amount,
					note: this.note
				}).then(() => {
					this.util.msg.success('提交提现申请成功!')
					this.$refs.confirm.close()
				}).catch((error) => {
					this.util.msg.warning(error)
				})
			})
		},
		// 跳转到提现记录
		gotoCashRegister() {
            // 跳转
            this.$router.push({
                path: '/cashRegister', 
            })
		}
	}
}