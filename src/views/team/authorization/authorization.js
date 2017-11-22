//我的授权书
import { print as ajax } from 'services'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            imgUrl: ''
        }
    },
    computed: {
        ...mapGetters([
            'currentTeam'
        ])
    },
    mounted() {
        this.getWarrantByLinkID()
    },
    methods: {
        getWarrantByLinkID() {
            ajax.getWarrantByLinkID(this.currentTeam.distributorLinkID).then((result) => {
                this.imgUrl = `data:image/jpeg;base64,${result}`
            })
        }
    }
}