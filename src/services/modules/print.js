// 打印
import ajax from '../fetch'

export default {
    // 获取授权书
    getWarrantByLinkID(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Print/GetWarrantByLinkID?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    }
}