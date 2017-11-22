import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'PgMain',
    props: {
        base: {
            type: Boolean,
            default: false
        },
        top: {
            type: String,
            default: '20'
        },
        bottom: {
            type: String,
            default: '0'
        },
        paddingTop: {
            type: String,
            default: '0'
        },
        paddingBottom: {
            type: String,
            default: '0'
        }
    },
    computed: {
        ...mapGetters([
            'maskShow', // 全局遮罩层控制
        ])
    }
}