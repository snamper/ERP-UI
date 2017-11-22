//首页
import { menu } from '../../../data/menu.js' // 初始菜单
import { antiFake as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            detectCode:'',
            merchantCode:'',
            detail:{
                qrCodeID:'',//二维码ID ,
                merchantID :'',// 商家ID ,
                codeType : '',
                parentID : '',
                code :'',// 二维码数据 ,
                detectCode :'',// 防伪码 ,
                status: '',//状态 ,
                sheetType : '',//业务类型 ,
                sheetID : '',//业务单号 ,
                customerID : '',//分销商ID ,
                customerName:'',// 分销商名称 ,
                mobile:'',//  分销商联系电话 ,
                wechat :'',// 代理商微信 ,
                barcodeID:'',//skuID ,
                note :'',// 备注 ,
                detectCodeCheck : '',//防伪码查询次数 ,
                firstCheckTime :'',//第一次查询二维码时间 ,
                parentCode : '',//上级编码 ,
                goodsID : '',//商品ID ,
                goodsName :'',// 商品名称 ,
                basePrice :'',// 基本售价 ,
                imageUrls :'',// 商品图片列表
            },//详细信息
            swiperOption: { // banner滚动配置
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            }
        }
    },
    computed: {
        // ...mapGetters([
        //     'teamList',
        //     'currentTeam',
        //     'customerInfo'
        // ])
    },
    watch: {
    },
    mounted() {
        this.detectCode  = this.$route.query.n //商品编码
        this.merchantCode  = this.$route.query.m//商家编码 
        this.queryCompanyInfo()
        this.queryDetailByCode()    
    },
    methods: {
        ...mapActions([
            'queryCompanyInfo',
        ]),
        //查询详细信息
        queryDetailByCode(){
            ajax.queryDetailByCode({detectCode:this.detectCode, merchantCode:this.merchantCode, isUpdateCheck:0})
                .then(result=>{
                    this.detail = result;
                })
        }

    },
}