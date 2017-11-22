/**
 * 订单详情
 */
import { mapGetters, mapActions } from 'vuex'
import { order as ajax, basic, account } from 'services'
import wx from 'weixin-js-sdk'

export default {
    data() {
        return {
            flag: -1,
            type: '',
            details: {},
            deliveryList: [], // 快递列表
            form: {
                distributorOrderID: '', // 订单id
                merchantDeliveryID: '', // 快递id
                deliverySheetID: '' // 快递单号
            },
            isScanCode: false, // 是否扫码
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.form.distributorOrderID = this.$route.query.id
            this.flag = this.$route.query.flag || -1
            if (this.$route.query.type) {
                this.selectDeliveryList()
                this.type = this.$route.query.type
            }
            this.getOrderDetail()
            this.getWechatConfig()
        }
        else {
            this.$router.go(-1)
        }
    },
    computed: {
        ...mapGetters([
            'wechatConfig'
        ])
    },
    methods: {
        ...mapActions([
            'setWechatConfig'
        ]),
        // 初始化微信配置
        initWechatConfig() {
            wx.config({
                ...this.wechatConfig,
                jsApiList: ['scanQRCode']
            })
        },
        // 获取微信配置
        getWechatConfig() {
            if (this.util.isWechat()) {
                if (this.util.isEmptyObject(this.wechatConfig)) {
                    account.wxJsSdk(encodeURIComponent(location.href.split('#')[0])).then((result) => {
                        this.setWechatConfig(result)
                        this.initWechatConfig()
                    })
                }
                else {
                    this.initWechatConfig()
                }
            }
        },
        // 获取订单详情
        getOrderDetail() {
            ajax.getOrderDetail(this.form.distributorOrderID).then((result) => {
                this.details = result
                const code = []
                this.details.listOrderItemList.forEach((item) => {
                    for (let i = 0; i < item.qty; i++) {
                        code.push(item.listQrCode[i] ? item.listQrCode[i] : '')
                    }
                    item.code = code
                })
            })
        },
        // 加载快递列表
        selectDeliveryList() {
            basic.selectDeliveryList().then((result) => {
                this.deliveryList = result
            })
        },
        // 发货
        sendGoodsFromDistributor() {
            if (this.util.isEmpty(this.form.merchantDeliveryID)) {
                this.util.msg.error('请选择快递公司')
                return
            }
            if (this.util.isEmpty(this.form.deliverySheetID)) {
                this.util.msg.error('请输入快递单号')
                return
            }
            ajax.sendGoodsFromDistributor(this.form).then(() => {
                this.util.msg.success('发货成功')
                setTimeout(() => {
                    this.flag = 100
                    this.type = ''
                    this.getOrderDetail()
                }, 1500)
            })
        },
        // 一维码打开扫码
        scanCode() {
            if (!this.util.isWechat()) {
                this.util.msg.error('请在微信环境中使用此功能')
                return
            }
            if (this.util.isEmptyObject(this.wechatConfig)) {
                this.util.msg.error('微信配置获取错误')
                return
            }
            let self = this
            wx.scanQRCode({
                needResult: 1,
                scanType: ['qrCode', 'barCode'],
                success(res) {
                    self.isScanCode = true
                    const resultStr = String(res.resultStr)
                    self.distributorScan(resultStr)
                }
            })
        },
        // 扫码完成
        distributorScan(code) {
            ajax.distributorScan({
                distributorOrderID: this.form.distributorOrderID,
                code: code
            }).then((result) => {
                this.util.msg.success('关联成功')
                if (this.isScanCode) {
                    this.getOrderDetail()
                    this.isScanCode = false
                }
            })
        },
        // 快递单号扫码
        deliverySheetScan() {
            if (!this.util.isWechat()) {
                this.util.msg.error('请在微信环境中使用此功能')
                return
            }
            if (this.util.isEmptyObject(this.wechatConfig)) {
                this.util.msg.error('微信配置获取错误')
                return
            }

            let self = this
            wx.scanQRCode({
                needResult: 1,
                scanType: ['qrCode', 'barCode'],
                success(res) {
                    const resultStr = String(res.resultStr)
                    const sheetCode = resultStr.split(',')
                    self.form.deliverySheetID = sheetCode ? sheetCode[1] : resultStr
                }
            })
        },
        status() {
            if (this.flag == -1) {
                return '等待付款'
            }
            else if (this.flag == 1) {
                return '等待上级发货'
            }
            else if (this.flag == 100) {
                return '已发货'
            }
            else if (this.flag == 110) {
                return '已完成'
            }
            else {
                return '已取消'
            }
        }
    }
}