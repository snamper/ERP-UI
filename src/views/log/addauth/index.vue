<template>
    <pg-main top="0" base>
        <img class="banner" src="../../../assets/images/res_banner.jpg">
        <form class="pg-form border small bg-color">
            <div class="item disable-border-color clearfix">
                <pg-icon class="primary-color" name="shengdai"></pg-icon>
                <div class="title-color p30 gradeName" v-if="isShow">
                    {{ infoTeam.CustomerGradeName }}
                </div> 
                <div class="pg-select border-radius disable-border-color title-color clearfix w90" v-else>
                    <select class="title-color font_28 " v-model="query.customerGradeID">
                        <option value="00000000-0000-0000-0000-000000000000">请选择等级</option>
                        <option v-for="n in customerGradeList" :value="n.customerGradeID">{{n.name}}</option>
                    </select>
                </div>
            </div>
            <div class="item disable-border-color">
                <pg-icon class="primary-color" name="wodetuandui"></pg-icon>
                <span class="m35">{{infoTeam.DistributorGroupName}}</span>
            </div>
            <div class="item disable-border-color">
                <pg-icon class="primary-color" name="tuijian"></pg-icon>
                <span class="title title-color">{{infoTeam.IntroducerName}}(推荐人)</span>
            </div>
            <div class="item bottom">
                <pg-button class="white-color primary-bg-color" size="big" @click="addUpdateCustomer">填写完成并提交</pg-button>
            </div>
        </form>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .banner {
        width: 100%;
    }
    .pg-form {
        margin-top: 20/@rate;
        .bottom {
            padding: 0 90/@rate 72/@rate 45/@rate;
        }
    }
    .title-color {
        select {
            width: 90%;
            float: right;
            padding: 5/@rate;
            border:0;
        }
    }
    .left {
        margin-left: 50/@rate;
        border: none;
    }
    .m35 {
        margin-left: 70/@rate;
    }
    .p30 {
        padding-left: 70/@rate;
    }
    .w90 {
        width: 90%;
        border-style: none; 
        border-width: 0px; 
    }
    .gradeName {
        padding: 15/@rate 75/@rate; 
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>