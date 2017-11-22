import promisePolyfill from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'
import {cloneDeep} from 'lodash'

promisePolyfill.polyfill()
Vue.use(Vuex)

import sysConfig from './modules/sysConfig' //系统配置（全局配置）
import auth from './modules/auth' // 登录token
import basic from './modules/basic' // 基础数据
import team from './modules/team' // 团队
import shopCart from './modules/shopCart' // 购物车
import wallet from './modules/wallet' // 佣金
import wechat from './modules/wechat' // 微信配置

export default new Vuex.Store({
	actions,
	getters,
	modules: {
    	sysConfig,
        auth,
        basic,
        team,
        shopCart,
        wallet,
        wechat
	}
})