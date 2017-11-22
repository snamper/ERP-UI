import * as types from '../mutationTypes'

const state = {
    wechatConfig: {}
}

const mutations = {
    [types.WECHATCONFIG](state, config) {
        state.wechatConfig = config
    }
}

export default {
    state,
    mutations
}