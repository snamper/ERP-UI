import * as types from '../mutationTypes'

export default {
    setWechatConfig: ({ commit }, config) => {
        commit(types.WECHATCONFIG, config)
    }
}