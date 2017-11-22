//首页
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            content:'',//内容
            
        }
    },
    

    mounted() {
        this.content = this.$route.query.content
    },
    
}