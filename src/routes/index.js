import demo from './map/demo'
import home from './map/home' //主页
import log from './map/log' // 登录相关
import wallet from './map/wallet' // 我的钱包
import team from './map/team' // 我的团队
import shop from './map/shop' // 我要订货
import achievement from './map/achievement' // 业绩查询
import settings from './map/settings' // 设置
import warehouse from './map/warehouse' // 云仓
import myorder from './map/myorder' // 我的订单
import shopCart from './map/shopcart' // 购物车
import announcement from './map/announcement' // 公告
import antiFake from './map/antiFake' // 防伪溯源
import material from './map/material' // 素材库



export default [
	...demo, 
	...home,
    ...log,
    ...wallet,
    ...team,
    ...shop,
    ...achievement,
    ...settings,
    ...warehouse,
    ...myorder,
    ...shopCart,
    ...announcement,
    ...antiFake,
    ...material
]