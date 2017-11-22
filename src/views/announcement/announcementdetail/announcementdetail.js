import {announcement as ajax} from 'services'

export default {
    data() {
        return {
            query: {
                condition: {
                    distributorGroupID : '',
                    customerID: '',
                    isTime: 0,
                },
                pageSize: 15,
                page: 1,
            },
            msgDetail: [],
        }
    },
    mounted() {
        console.log(this.$route.query.msgInID)
        //this.datas = this.$route.query
        this.queryMsgDetail()

    },
    methods: {
        queryMsgDetail() {
            ajax.selectMsgDetail(this.$route.query.msgInID).then((result) => {
                this.msgDetail = result
            })
        }
    }
}