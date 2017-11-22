export default {
	// 系统配置部分
	maskShow : state => state.sysConfig.mask_show, // 全局的遮罩层的显示隐藏
	isShowHUD : state => state.sysConfig.hud_options.show, // 是否显示系统提示信息
	optionsHUD : state => state.sysConfig.hud_options.options, // 系统提示信息的参数
    authToken: (state) => state.auth.authToken, // 登录token
    regionStateList: state => state.basic.stateList, // 省
    teamList: state => state.team.teamList, // 团队列表
    currentTeam: state => state.team.currentTeam, // 当前团队
    subordinatesList: state => state.team.subordinatesList, //我的下级
    cartCount: state => state.shopCart.count, // 购物车数量
    customerInfo: state => state.team.customerInfo, // 当前登录分销客户信息
    cartList: state => state.shopCart.cartGoods, // 获取购物车中已经选择的商品
    infoTeam: state => state.team.infoTeam,  //携带注册信息(团队id档案id ..)
    customer: state => state.wallet.customer, // 分销客户
    group: state => state.wallet.group, // 分销客户
    wechatConfig: state => state.wechat.wechatConfig, // 微信配置
    menuList: state => state.sysConfig.menuList, // 动态菜单
    companyInfo: state => state.basic.companyInfo, // 公司信息
    merchantConfig: state => state.sysConfig.merchantConfig, // 商家全局配置
}