<template>
    <div class="pg-input-number">
        <span 
            class="pg-input-number_decrease border-radius" 
            :class="[
                type === 'default' ? 'bg-color' : 'primary-bg-color'
            ]"
            @click="decrease">
            <i 
                class="iconfont icon-icon_jianshaoanniu font_30"
                :class="[
                    type === 'default' ? 'text-color' : 'white-color'
                ]">
            </i>
        </span>
        <span 
            class="pg-input-number_increase border-radius" 
            :class="[
                type === 'default' ? 'bg-color' : 'primary-bg-color'
            ]"
            @click="increase">
            <i 
                class="iconfont icon-icon_zengjiaanniu font_30"
                :class="[
                    type === 'default' ? 'text-color' : 'white-color'
                ]">
            </i>
        </span>
        <input 
            autocomplete="off" 
            type="text" 
            :min="min" 
            :max="max" 
            class="pg-input-number_inner font_30 border-radius" 
            :class="[
                type === 'default' ? 'bg-color title-color' : 'primary-bg-color white-color'
            ]"
            v-model="number" @change="change">
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-input-number {
        display: inline-block;
        width: 260/@rate;
        position: relative;
        text-align: center;
        &_decrease {
            cursor: pointer;
            position: absolute;
            left: 0;
            width: 70/@rate;
            height: 70/@rate;
            line-height: 70/@rate;
            text-align: center;
        }
        &_increase {
            cursor: pointer;
            position: absolute;
            right: 0;
            width: 70/@rate;
            height: 70/@rate;
            line-height: 70/@rate;
            text-align: center;
        }
        &_inner {
            height: 70/@rate;
            width: 100/@rate;
            //margin-left: 80/@rate;
            text-align: center;
        }
    }
</style>
<script type="text/babel">
    export default {
        name: 'PgInputNumber',
        props: {
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: Infinity
            },
            value: {
                type: Number,
                default: 1
            },
            id: String,
            type: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
                number: 1
            }
        },
        watch: {
            value() {
                this.number = this.value
            }
        },
        mounted() {
            this.number = this.value
        },
        methods: {
            // 减
            decrease() {
                this.number--
                if (this.number <= this.min) {
                    this.number = this.min
                }
                this.change()
            },
            // 加
            increase() {
                this.number++
                if (this.number >= this.max) {
                    this.number = this.max
                }
                this.change()
            },
            change() {
                if (this.id) {
                    this.$emit('change', this.number, this.id)
                }
                else {
                    this.$emit('change', this.number)
                }
                
                this.$emit('input', this.number)
            }
        }
    }
</script>