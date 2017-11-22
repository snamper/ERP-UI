/**
 * 登录
 */

import { account as ajax } from 'services'
import cookie from 'js-cookie'
import { mapActions, mapGetters } from 'vuex'
import { rootPath } from '../../../services/fetch/config'

export default {
    data() {
        return {
            form: {
                login: '',
                password: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'companyInfo',
        ])
    },
    methods: {
        ...mapActions([
            'queryCompanyInfo'
        ]),
        // 登录
        login() {
            ajax.login(this.form).then((result) => {
                cookie.set('login', result)
                if (this.util.isWechat()) {
                    window.location = rootPath + '/WxAuth/openid?url=' + window.location.protocol + '//' + window.location.host + '&merchantId=' + result.merchantID + '&customerId=' + result.customerID
                }
                else {
                    this.$router.push('/gesture')
                }
            })
        }
    },
    mounted() {
        this.queryCompanyInfo()
    }
}