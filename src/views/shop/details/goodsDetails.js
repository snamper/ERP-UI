/**
 * 商品详情
 */
import { shop as ajax } from 'services'
import { mapGetters } from 'vuex'

export default {
	data() {
        return {
            goodsId: '',

            details: {}
        }
    },
    computed: {
        ...mapGetters([
            'currentTeam'
        ])
    },
    mounted() {
        if (this.$route.query.goodsId) {
            this.goodsId = this.$route.query.goodsId
            this.getSellGoodsDetail()
        }
        else {
            this.$router.go(-1)
        }
    },
    methods: {
        getSellGoodsDetail() {
            ajax.getSellGoodsDetail(this.goodsId, this.currentTeam.distributorGroupID).then((result) => {
                this.details = result
            })
        }
    }
}