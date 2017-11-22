<template>
    <div class="pg-region">
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="stateRegionID">
                <option value="">省</option>
                <option v-for="state in stateList" :value="state.regionID">{{state.name}}</option>
            </select>
        </div>
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="cityRegionID">
                <option value="">市</option>
                <option v-for="city in cityList" :value="city.regionID">{{city.name}}</option>
            </select>
        </div>
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="districtRegionID">
                <option value="">区</option>
                <option v-for="district in districtList" :value="district.regionID">{{district.name}}</option>
            </select>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-region {
        .pg-select {
            width: 170/@rate;
        }
    }
</style>
<script type="text/babel">
    import region from './region'
    export default {
        ...region
    }
</script>