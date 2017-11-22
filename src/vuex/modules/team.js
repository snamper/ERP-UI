// 团队相关
import * as types from '../mutationTypes'

const state = {
    teamList: [], // 团队列表
    currentTeam: {}, // 当前团队
    subordinatesList: [],//我的下级
    customerInfo: {}, // 当前登录分销客户信息
    infoTeam:{},// 携带注册信息
}

const mutations = {
    [types.GET_TEAM] (state, data) {
        state.teamList = data
    },
    [types.REMOVE_TEAM_CACHE] (state, data) {
        state.teamList = []
        state.currentTeam = {}
        state.customerInfo = {}
    },
    [types.CHANGE_TEAM] (state, data) {
        state.currentTeam = data
    },
    [types.GET_SUBORDINATES] (state, data) {
        state.subordinatesList = data
    },
    [types.SET_CUSTOMERINFO] (state, data) {
        state.customerInfo = data
    },
    [types.SET_INFOTEAM] (state, data) {
        state.infoTeam = data
    }
} 

export default{
    state,
    mutations
}