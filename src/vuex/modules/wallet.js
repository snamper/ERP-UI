// 佣金相关
import * as types from '../mutationTypes'

const state = {
    customer: {}, // 分销商
    group: {}, // 当前团队
}

const mutations = {
    [types.GET_CUSTOMER] (state, data) {
        state.customer = data
    },
    [types.GET_GROUP] (state, data) {
        state.group = data
    },
    [types.SET_CUSTOMER] (state, data) {
        state.customer = data
    },
    [types.SET_GROUP] (state, data) {
        state.group = data
    }
} 

export default{
    state,
    mutations
}