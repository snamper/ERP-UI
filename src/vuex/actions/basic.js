import * as types from '../mutationTypes'
import { basic, user } from 'services'
// 基础数据
export default {
    // 获取省
    getRegionStates: ({ state, commit }) => {
        const stateList = state.basic.stateList
        if (stateList.length === 0) {
            basic.selectRegionList({
                LevelID: 1,
                ParentID: '',
                Status: 1
            }).then((result) => {
                commit(types.GET_REGIONS, result)
            })
        }
    },
    
    //获取公司信息
    queryCompanyInfo:( {state, commit}) => {
        const companyInfo = state.basic.companyInfo
        if (!companyInfo.merchantID) {
            basic.queryCompanyInfo().then((result) => {
                commit(types.GET_COMPANYINFO, result)
            })
        }
    },
}