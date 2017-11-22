<template>
    <div class="pg-radio-group" ref="radioGroup">
        <slot></slot>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-radio-group {
        display: inline-block;
        line-height: 1;
        vertical-align: middle;
    }
</style>
<script type="text/babel">
    export default {
        name: 'PgRadioGroup',
        props: {
            value: {}
        },
        watch: {
            value(val) {
                this.$emit('change', val)
            }
        }
    }
</script>