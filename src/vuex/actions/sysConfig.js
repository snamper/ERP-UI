import * as types from '../mutationTypes'
import { account as ajax } from 'services'

export default {
	/**
	 * [设置遮罩层的显示/隐藏开关]
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} val            [description]
	 * @return {[type]}                [description]
	 */
	setMaskShow: ({commit}, val) => {
		commit(types.SYSTEM_MASKSHOW_BY_SET, val)
	},
	/**
	 * [显示系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} options        [description]
	 * @return {[type]}                [description]
	 */
	showHUD: ({commit}, options) => {
		commit(types.SYSTEM_HUD_SHOW, options)
	},
	/**
	 * [关闭系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @return {[type]}                [description]
	 */
	hideHUD: ({commit}) => {
		commit(types.SYSTEM_HUD_HIDE)
	},
	// 获取动态菜单
    getMobileMenu: ({ state, commit }) => {
        const menuList = state.sysConfig.menuList
        if (menuList.length === 0) {
            ajax.getMobileMenu().then((result) => {
                commit(types.GET_MOBILEMENU, result)
            })
        }
    },
    // 获取商家全局配置
    getMerchatConfig: ({ state, commit }) => {
        const merchantConfig = state.sysConfig.merchantConfig
        const merchantID = state.team.customerInfo.merchantID
        ajax.getMerchantConfig(merchantID).then((result) => {
                commit(types.GET_MERCHANT_CONFIG, result)
            })
    }
}