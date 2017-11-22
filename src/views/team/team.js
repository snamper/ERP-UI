//我的团队
import { team as ajax } from 'services' 
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            oneNum:false,//我的下级
            twoNum: false,//我的下二级
            threeNum: false,//我的下三级
            oneExpandClass: "icon-icon_zhankai",//我的下级logo样式
            twoExpandClass: "icon-icon_zhankai",//下二级logo样式
            threeExpandClass: "icon-icon_zhankai",//下三级logo样式
            distributorLinkID:"",//档案id
            oneLevel:{},//我的下一级
            twoLevel:{},//我的下二级
            threeLevel:{},//我的下三级
            confirm: {
                show: false
            },
        }
    },
    computed: {
        ...mapGetters([
            'teamList', //所有团队数据
            'currentTeam' ,//默认团队
            'customerInfo' //当前代理商信息
        ])
    }, 
    mounted() {  

        console.log(this.customerInfo)
        this.getSelectSubCustometrCount() //获取直属，下二级，下三级分销商我的团队
        
    },
    methods: {
        ...mapActions([
            'subordinatesTeam',//我的下级
        ]),
        //查看截图
        checkImg(){
            this.confirm.show = true 

            this.$refs.confirm.open()            
        },
        //展开我的下级列表
        onClickExpand(num){
            if(num == 1) {
                this.oneNum = !this.oneNum //展开或者关闭
                this.oneNum ? this.oneExpandClass = "icon-icon_shouqi" : this.oneExpandClass = "icon-icon_zhankai" //展开样式或关闭样式
                
            }
            if(num == 2) {
               this.twoNum = !this.twoNum //展开或者关闭
               this.twoNum ? this.twoExpandClass = "icon-icon_shouqi" : this.twoExpandClass = "icon-icon_zhankai" //展开样式或关闭样式
            }
            if(num == 3) {
                this.threeNum = !this.threeNum //展开或者关闭
                this.threeNum ? this.threeExpandClass = "icon-icon_shouqi" : this.threeExpandClass = "icon-icon_zhankai" //展开样式或关闭样式
            }
        },
        //分销商下级名称和数量
        getSelectSubCustometrCount(){
            this.distributorLinkID = this.currentTeam.distributorLinkID //当前团队档案ID
            ajax.selectSubCustometrCount(this.distributorLinkID).then((result)=>{
                this.subordinatesTeam(result)
                this.oneLevel = result[0] //我的下一级
                this.twoLevel = result[1] //我的下二级
                this.threeLevel = result[2] //我的下三级

            })
        },
        toAuthorization(){
            this.$router.push({
                path: '/authorizationTeam',//路由地址
                query: {
                    customerID:this.customerInfo.customerID,//分销商id
                    distributorGroupID:this.currentTeam.distributorGroupID //团队id
                }
            })            
        }
    }
}