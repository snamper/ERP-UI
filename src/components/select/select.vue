<template>
    <div class="pg-select border-radius disable-border-color">
        <select class="title-color font_28" v-model="selectValue">
            <option value="">{{defaultText}}</option>
            <option v-for="option in options" :value="option[value]">{{option[label]}}</option>
        </select>
    </div>
</template>
<script type="text/babel">
    export default {
        name: 'PgSelect',
        props: {
            defaultText: {
                default: '无数据',
                type: String
            },
            options: Array,
            label: {
                default: 'label',
                type: String
            },
            value: {
                default: 'value',
                type: String
            },
            currentValue: String
        },
        data() {
            return {
                selectValue: ''
            }
        },
        mounted() {
            this.selectValue = this.currentValue
        },
        watch: {
            currentValue() {
                this.selectValue = this.currentValue
            },
            options() {
                if (this.currentValue) {
                    this.selectValue = this.currentValue
                }
            },
            selectValue() {
                if (!this.util.isEmpty(this.selectValue)) {
                    this.$emit('change', this.selectValue)
                }
            }
        }
    }
</script>