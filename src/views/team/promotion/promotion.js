//推广新人
import { team as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'


export default {
    data() {
        return {
            query:{
                distributorGroupID:'',//团队ID
                customerGradeID: '',//等级ID
                hour:"",//二维码时效
                url:"http://v20wx.loonxierp.com/#/regType",//路由地址
            },
            ///获取的上级信息
            upCustomerInfo:{},
            ///获取的上级信息的参数
            form:{
                upCustomerGradeId: "",//要升级的等级ID
                distributorGroupID: "" //团队ID
            },
            customerGradeList:[],//等级下拉列表数据
            groupName:'',//团队nme  
            desc:'',//等级name 
            locationHref: '',//当前域名      
        }
    },
    computed: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        ...mapGetters([
            'teamList', //团队数据
            'currentTeam' ,//默认团队            
        ])
    },
    mounted() {
        console.log(this.currentTeam)
        this.query.distributorGroupID = this.currentTeam.distributorGroupID  //请求下拉列表需要的团队id
        this.form.distributorGroupID = this.currentTeam.distributorGroupID   //请求上级信息需要的团队id

        this.queryBasCustomerGradeList() //获取等级下拉
        this.locationHref = window.location.href //当前域名
        const arr = this.locationHref.split('/')
        const arr1 = arr.pop(this.locationHref.split('/').length)
        const arr2 = arr.push('regType')
        const arr3 = arr.join('/')
        this.locationHref = arr.join('/')
        this.query.url = this.locationHref //跳转域名
    },
    watch:{        
        //监听等级下拉
        "query.customerGradeID" () {
            this.customerGradeList.forEach((obj)=>{
                if(obj.customerGradeID == this.query.customerGradeID) {
                    this.desc = obj.name  //等级name
                }
            })
            if(!this.query.customerGradeID) {
                this.upCustomerInfo = {} //清空获取的上级信息
                return
            }
            this.getSelectUpCustomerInfo()
        }
    },
    methods: {
        //清空表单
        resetform(){
            this.query = {
                distributorGroupID:'',//团队ID
                customerGradeID: '',//等级ID
                hour:"",//二维码时效
                url:"http://v20wx.loonxierp.com/#/regType",//路由地址
            }
        },
        //生成二维码
        createCode(){
            if (this.util.isEmpty(this.query.hour)) {
                this.util.msg.error('请输入二维码时效')
                return
            }  

            ajax.createQRCodeExtend(this.query).then((result)=>{
                this.$router.push({//跳转到查看二维码页面
                    path:'/codeTeam',
                    query:{
                        codeImg:result, //二维码img链接
                        groupName:this.currentTeam.groupName, //团队名称
                        desc:this.desc, //等级名称
                        hour:this.query.hour //时间
                    }
                })
            })         
        },
        //获取等级下拉
        queryBasCustomerGradeList(){
            ajax.getBasCustomerGradeList(this.query.distributorGroupID).then((result)=>{
                this.customerGradeList = result
            })
        },
        //获取当前登录上级信息
        getSelectUpCustomerInfo(){
            this.form.upCustomerGradeId = this.query.customerGradeID //等级id
            ajax.selectUpCustomerInfo(this.form).then((result)=>{
                this.upCustomerInfo = result
            })
        },        
    }
}