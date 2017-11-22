<template>
    <ul class="pg-tabs flex-ul bg-color">
        <li class="primary-border-color font_28" 
            :class="[
                currentIndex === item.value ? 'primary-color active' : 'title-color'
            ]"
            v-for="item in tabs" 
            @click="tab(item.value)">
            {{item.label}}
        </li>
    </ul>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-tabs {
        margin-bottom: 20/@rate;
        li {
            height: 120/@rate;
            line-height: 120/@rate;
            &.active {
                border-bottom-style: solid;
                border-bottom-width: 2px;
            }
        }
    }
</style>
<script type="text/babel">
    export default {
        name: 'PgTabs',
        props: {
            tabs: Array,
            selected: Number
        },
        data() {
            return {
                currentIndex: -1
            }
        },
        mounted() {
            if (this.tabs && this.tabs.length > 0) {
                if (this.selected) {
                    this.currentIndex = this.selected
                }
                else {
                    this.currentIndex = this.tabs[0].value
                }
            }
        },
        watch: {
            selected() {
                this.currentIndex = this.selected
            }
        },
        methods: {
            tab(val) {
                this.currentIndex = val
                this.$emit('tab', val)
            }
        }
    }
</script>