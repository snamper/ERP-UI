// 账户相关
import ajax from '../fetch'
import { rootPath } from '../fetch/config'

export default {
    /**
     * 查询素材库分页列表
     * @param  {[type]}  page              当前页数
     * @param  {[type]}  pageSize          分页条数
     * @param  {[type]}  condition         [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    getMaterialStockList(page, pageSize, condition, isShowFullLoading = true, auth = true) {
        return ajax({
            url: '/Material/GetMaterialStockListPage',
            method: 'post',
            auth,
            isShowFullLoading,
            body: {
                page: page,
                pageSize: pageSize,
                condition: condition
            }
        })
    }
}