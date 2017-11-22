import 'whatwg-fetch'
import store from '../../vuex'
import actions from '../../vuex/actions'
import { rootPath } from '../fetch/config'

export default{
    /**
     * 图片上传
     * @param  {object} file       图片对象
     * @param  {类型} folderType    收款二维码21 商品11 品牌31 团队41 付款截图51
     * @return {[type]}            [description]
     */
    uploadImg(file, folderType) {
        let data = new FormData()
        data.append(file.name, file)
        data.append('FolderType', folderType)
        actions.showHUD(store)
        return new Promise((resolve, reject) => {
            fetch(rootPath + '/Upload/UploadImg', {
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + store.getters.authToken
                },
                body: data
            })
                .then((response) => response.json())
                .then((result) => {
                    actions.hideHUD(store)
                    if (result.resultCode === 1 || result.ResultCode === 1) {
                        resolve(result.data || result.Data)
                    }
                    else {
                        actions.showHUD(store, {
                            type: 'error',
                            content: result.errorMessage || result.ErrorMessage
                        })
                        reject(result.errorMessage || result.ErrorMessage)
                        throw new Error(result.errorMessage || result.ErrorMessage)
                    }
                })
                .catch((error) => {
                    actions.showHUD(store, {
                        type: 'error',
                        content: error
                    })
                })
        })
    }
}
