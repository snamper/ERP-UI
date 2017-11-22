// 我的团队
import ajax from '../fetch'

export default {
	/*
	**获取团队详情
	*/
	selectBasDistributorGroupaDetail(id,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Group/SelectBasDistributorGroupaDetail?DistributorGroupID=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
	},
    /*
    **返回有效的团队信息 包括是否是默认
    */
    selectValidGroupsByCustomerID(auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Group/SelectValidGroupsByCustomerID',
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取分销商注册审核列表
    */ 
    selectDistributorApplyList(data, auth = true,isShowFullLoading = true){
        return ajax({
            url: '/DistributorApplyAudit/SelectDistributorApplyList',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取分销商升级申请列表
    */
    selectUpdateGradeApplyList(data, auth = true,isShowFullLoading = true){
        return ajax({
            url: '/DistributorApplyAudit/SelectUpdateGradeApplyList',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取分销商提现申请列表
    */
    selectWithdrawCashListPage(data, auth = true,isShowFullLoading = true){
        return ajax({
            url: '/DistributorApplyAudit/SelectWithdrawCashListPage',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **上级审核注册申请 操作
    */
    superiorAuditRegister(data, auth = true){
        return ajax({
            url: '/DistributorApplyAudit/SuperiorAuditRegister',
            method: 'post',
            body:data,
            auth
        })
    },
    /*
    **上级审核升级申请 操作
    */
    superiorAuditUpgrade(data, auth = true){
        return ajax({
            url: '/DistributorApplyAudit/SuperiorAuditUpgrade',
            method: 'post',
            body:data,
            auth
        })
    },
    /*
    **上级审核提现申请 操作
    */
    superiorAuditWithdrawCash(data, auth = true){
        return ajax({
            url: '/DistributorApplyAudit/SuperiorAuditWithdrawCash',
            method: 'post',
            body:data,
            auth
        })
    },
    /*
    **根据所选团队或者当前代理商可以选择的升级等级（微信端我的团队）
    */
    selectUpGradeList(id,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectUpGradeList?groupId=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 分销商下级名称数量
     */
    selectSubCustometrCount(id,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectSubCustometrCount?distributorLinkID=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    }, 
    /**
     * 查询当前代理商升级记录（微信端我的团队）
     */ 
    selectUpgradeApplyRecordList(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectUpgradeApplyRecordList',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 获取新上级信息（微信端我的团队）推广新人 
     */
    selectUpCustomerInfo(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectUpCustomerInfo',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 获取新上级信息（微信端我的团队）我要升级
     */
    selectUpCustomerDetail(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectUpCustomerDetail',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },          
    /**
     * 查询分销商下级详情（微信端我的团队
     */
    selectSubCustomersByLinkId(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SelectSubCustomersByLinkId',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 代理商提交升级申请（微信端我的团队）
     */
    upDistributorGradeApply(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/UpDistributorGradeApply',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **新人推广生成二维码（微信端我的团队）
    */ 
    createQRCodeExtend(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/CreateQRCodeExtend',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **查询分销商收款二维码微信端我的团队
    */ 
    selectCustomerReceiptRQCode(id,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/QRCode/SelectCustomerReceiptRQCode?id='+ id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /*
    **保存升级申请打款凭证（微信端我的团队）
    */
    savePayCertificateForUpGrade(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/MyGroup/SavePayCertificateForUpGrade',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **发展注册接口
    */
    createDistributoinAccountFromIntror(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Customer/CreateDistributoinAccountFromIntror',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **添加授权 - 某人增加挂靠团队接口
    */
    addLinkAuthorization(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Customer/AddLinkAuthorization',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
    /*
    **获取所有等级下拉POST /api/
    */
    getBasCustomerGradeList(id,isShowFullLoading = true){
        return ajax({
            url: '/Group/GetBasCustomerGradeList?DistributorGroupID='+id,
            method: 'get',
            isShowFullLoading
        })
    },
    /*
    **获取分销商授权信息
    */
    getCustomerAuthorizationBookInfo(data,auth = true,isShowFullLoading = true){
        return ajax({
            url: '/Customer/GetCustomerAuthorizationBookInfo',
            method: 'post',
            body:data,
            auth,
            isShowFullLoading
        })
    },
}