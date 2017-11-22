import * as types from '../mutationTypes'
import { team as ajax } from 'services'

export default {
    // 获取团队列表
    getTeamList: ({ state, commit }) => {
        const teamList = state.team.teamList
        if (teamList.length === 0) {
            ajax.selectValidGroupsByCustomerID().then((result) => {
                commit(types.GET_TEAM, result)
            })
        }
    },
    // 清除团队缓存数据
    removeTeamCache: ({ commit }) => {
        commit(types.REMOVE_TEAM_CACHE)
    },
    // 切换当前团队
    changeCurrentTeam: ({ commit }, data) => {
        commit(types.CHANGE_TEAM, data)
    },
    // 我的下级
    subordinatesTeam: ({ commit }, data) => {
        commit(types.GET_SUBORDINATES, data)
    },
    // 保存当前登录分销客户信息
    setCustomerInfo: ({ commit }, data) => {
        commit(types.SET_CUSTOMERINFO, data)
    },
    // // 携带注册信息(团队id档案id ..)
    infoTeam: ({ commit }, data) => {
        commit(types.SET_INFOTEAM, data)
    },
}