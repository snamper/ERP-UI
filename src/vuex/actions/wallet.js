import * as types from '../mutationTypes'

export default {
    // 保存分销客户
    setCustomer: ({ commit }, data) => {
        commit(types.SET_CUSTOMER, data)
    },
    // 保存当前团队
    setGroup: ({ commit }, data) => {
        commit(types.SET_GROUP, data)
    },
}