import sysConfig from './sysConfig' // 系统配置
import auth from './auth' // 登录token
import basic from './basic' // 基础数据
import team from './team' // 团队
import shopCart from './shopCart' // 购物车
import wallet from './wallet' // 佣金
import wechat from './wechat' // 微信配置

export default {
	...sysConfig,
    ...auth,
    ...basic,
    ...team,
    ...shopCart,
    ...wallet,
    ...wechat
}