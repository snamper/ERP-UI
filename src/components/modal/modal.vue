<template>
    <div class="pg-modal" v-show="maskShow" transition="fade">
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-modal {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 99998;
    }
</style>
<script type="text/babel">
    export default {
        name: 'PgModal',
        props: {
            maskShow: {
                type: Boolean,
                default: false
            }
        }
    }
</script>