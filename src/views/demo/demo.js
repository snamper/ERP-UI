export default {
	data() {
		return {
            selectList: [ // 下拉选择框数据
                {
                    value: 1,
                    label: 'A'
                },
                {
                    value: 2,
                    label: 'B'
                },
                {
                    value: 3,
                    label: 'C'
                }
            ],
            stateInfo: '00000000-0000-0000-0000-000000010006',
            cityInfo: '00000000-0000-0000-0000-000000010076',
            districtInfo: '00000000-0000-0000-0000-000000010693',
            selectValue: '2', // 下拉选择框默认选中
            radio: 'A', // 单选默认选中
            onlyRadio: '', // 单个单选按钮
            checkbox: false, // 多选按钮
            checkboxList: ['1', '2'], // 多选按钮组
            confirm: { // 弹出框配置
                title: '提示',
                content: '这就是内容，你确定吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            },
            number: 2,
            defaultPageBtns: [
                {
                    buttonText: '我的订单',
                    buttonPath: '/myorder'
                },
                {
                    buttonText: '下级订单',
                    buttonPath: '/suborder'
                }
            ]
		}
	},
    watch: {
        number() {
            console.log(this.number)
        }
    },
	mounted() {
        const list = [
            {
                a: 'abc',
                b: '1'

            },
            {
                a: 'cde',
                b: '2'
            },
            {
                a: 'f',
                b: '3'
            },
            {
                a: 'ag',
                b: '4'
            }
        ]

        let keywords = {
            a: 'a',
            b: ''
        }
        this.searArrayByKey(list, keywords)
	},
	methods: {
        // 检索数据的内容并返回对应的数组
        searArrayByKey(arr, keyObj) {
            let result = []
            arr.forEach((item) => {
                let isMate = true
                for (let k in keyObj) {
                    if (item[k].indexOf(keyObj[k].replace(/^\s*|\s*$/g, "")) != -1) {
                        if (isMate) {
                            isMate = true
                        }
                    }
                    else {
                        isMate = false
                    }
                }
                if (isMate) {
                    result.push(item)
                    isMate = false
                }
            })
        },
        // 提示框
        hud(val) {
            if (val == 'loading') {
                this.util.msg.loading()
                setTimeout(() => {
                    this.util.msg.close()
                }, 2000)
            }
            else if (val == 'success') {
                this.util.msg.success('正确')
            }
            else if (val == 'error') {
                this.util.msg.error('错误')
            }
            else {
                this.util.msg.close()
            }
        },
        // 弹出框
        openConfirm() {
            this.$refs.confirm.open().then(() => {
                console.log('确定')
                this.$refs.confirm.close()
            })
        },
        // 省市区选择
        regionChange(region) {
            console.log(region)
            this.stateInfo = region.state
            this.cityInfo = region.city
            this.districtInfo = region.district
        },
        // 单选按钮选中事件
        changeOnlyRadio(val) {
            console.log(this.onlyRadio)
        },
        // 单选按钮组选中事件
        changeRadio(val) {
            console.log(val)
        },
        // 多选按钮组响应事件
        checkboxChange(val) {
            console.log(val)
        },
        // 图片上传成功
        uploadSuccess(val) {
            console.log(val)
        },
        inputNumberChange(number) {
            console.log('change' + number)
        }
	}
}