import { basic as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'PgRegion',
    props: {
        stateInfo: {
            type: String,
            default: ''
        },
        cityInfo: {
            type: String,
            default: ''
        },
        districtInfo: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            stateRegionID: '',
            cityRegionID: '',
            districtRegionID: '',
            stateList: [],
            cityList: [],
            districtList: [],
            isEdit: false
        }
    },
    computed: {
        ...mapGetters([
            'regionStateList'
        ])
    },
    mounted() {
        this.getRegionStates()
        this.stateList = this.regionStateList
    },
    methods: {
        ...mapActions([
            'getRegionStates'
        ]),
        changeState() {
            if (!this.isEdit) {
                this.cityList = []
                this.districtList = []
                this.cityRegionID = ''
                this.districtRegionID = ''
            }
            this.getRegions(2, this.stateRegionID)
        },
        changeCity() {
            if (!this.isEdit) {
                this.districtList = []
                this.districtRegionID = ''
            }
            
            this.getRegions(3, this.cityRegionID)
        },
        changeDistrict() {
            if (this.stateRegionID !== '' && this.cityRegionID !== '' && this.districtRegionID !== '') {
                this.isEdit = false
                this.$emit('change', {
                    state: this.stateRegionID,
                    city: this.cityRegionID,
                    district: this.districtRegionID
                })
            }
        },
        getRegions(levelID = 1, parentID = '', status = 1) {
            if (levelID != 1 && parentID == '') {
                return
            }
            ajax.selectRegionList({
                LevelID: levelID,
                ParentID: parentID,
                Status: status
            }).then((result) => {
                if (levelID === 1) {
                    this.stateList = result
                }
                else if (levelID === 2) {
                    this.cityList = result
                }
                else if (levelID === 3) {
                    if (result.length == 0) {
                        this.cityList.forEach((item) => {
                            if (item.regionID == this.cityRegionID) {
                                this.districtList.push(item)
                            }
                        })
                    }
                    else {
                        this.districtList = result
                    }
                }
            })
        }
    },
    watch: {
        regionStateList() {
            this.stateList = this.regionStateList
            
            if (this.stateInfo) {
                if (!this.stateRegionID || this.stateRegionID == '') {
                    this.stateRegionID = this.stateInfo
                }
            }
        },
        stateInfo() {
            if (!this.stateRegionID || this.stateRegionID == '') {
                this.stateRegionID = this.stateInfo
            }
            if (this.districtInfo) {
                this.isEdit = true
            }
        },
        cityList() {
            if (this.isEdit) {
                if (this.cityInfo) {
                    this.cityRegionID = this.cityInfo
                }
            }
        },
        districtList() {
            if (this.isEdit) {
                if (this.districtInfo) {
                    this.districtRegionID = this.districtInfo
                }
            }
        },
        stateRegionID() {
            this.changeState()
        },
        cityRegionID() {
            this.changeCity()
        },
        districtRegionID() {
            this.changeDistrict()
        }
    }
}