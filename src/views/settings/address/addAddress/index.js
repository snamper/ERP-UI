import {mapGetters, mapActions} from 'vuex'
import {settings as ajax} from 'services'

export default {
	data() {
		return {
			stateInfo: '',//省的初始值
			cityInfo: '',//市的初始值
			districtInfo: '',//区的初始值
			isEdit: false,//是否是编辑
			initForm: { //新增/编辑表单
				distributorAddressID: '',//地址id
				linkMan: '',//收货人
				mobile: '',//联系电话
				state: '',//省
				city: '',//市
				district: '',//区
				address: '',//详情地址
				isDefault: 0,//是否默认
			},
			form: {},//编辑是的初始数据
			source: '', // 记录来源
		}
	},
	mounted() {
		// 记录来源
		this.source = this.$route.query.source

		// 获取初始数据
		this.getInitData()
	},
	watch: {
		// 编辑时初始化省市区

	},
	methods: {
		// 获取初始数据
		getInitData() {
			// 获取操作类型
			this.isEdit = this.$route.query.isEdit
			// 获取编辑时的初始数据
			if (this.isEdit) {
				this.form = this.$route.query.editForm
				// 初始化省市区
				this.stateInfo = this.form.state
				this.cityInfo = this.form.city
				this.districtInfo = this.form.district
			}
			// 新增
			else {
				this.form = this.initForm
			}
		},
		// 保存按钮
		saveAddress() {
			// 判断用户输入
			for( let pro in this.form) {
				switch(pro) {
					case 'linkMan' : if (this.form[pro] === '') {
										this.util.msg.error('请输入收货人的姓名!')
									 	return
									}
					case 'mobile' : if (this.form[pro] === '') {
										this.util.msg.error('请输入联系电话!')
									 	return
									}
					case 'state' :  if (this.form[pro] === '') {
										this.util.msg.error('请输入省份!')
									 	return
									}
					case 'city' :   if (this.form[pro] === '') {
										this.util.msg.error('请输入所在市!')
									 	return
									}
					case 'district' : if (this.form[pro] === '') {
										this.util.msg.error('请输入所在的区!')
									 	return
									   }
					case 'address' : if (this.form[pro] === '') {
										this.util.msg.error('请输入详细地址!')
									 	return
									 }
					default : break					 		 
				}
			}
			ajax.updateAddress(this.form).then(() => {
				this.$router.push({
					path: '/addressList',
					query: {
						source: this.source
					}
				})
			})
		},
		// 省市区选择到的值
		change(val) {
			this.form.state = val.state
			this.form.city = val.city
			this.form.district = val.district
		}
	}
}