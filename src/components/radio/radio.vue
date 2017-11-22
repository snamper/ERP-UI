<template>
    <label class="pg-radio title-color">
        <span class="pg-radio-input"
            :class="{
                'is-checked': model === label
        }">
            <span class="pg-radio-inner primary-border-color">
                <span class="pg-radio-spot primary-bg-color"></span>
            </span>
            <input 
                type="radio" 
                class="el-radio-original"
                :value="label"
                v-model="model"
                @focus="focus = true"
                @blur="focus = false"
            >
        </span>
        <span class="pg-radio-label font_28">
            <slot></slot>
        </span>
    </label>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-radio {
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        & + & {
            margin-left: 30/@rate;
        }
        &-input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            &.is-checked .pg-radio-inner .pg-radio-spot {
                transform: translate(-50%, -50%) scale(1);
            }
        }
        &-label {
        }
        &-inner {
            width: 36/@rate;
            height: 36/@rate;
            border-radius: 100%;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            border-width: 2px;
            border-style: solid;
            .pg-radio-spot {
                width: 20/@rate;
                height: 20/@rate;
                border-radius: 100%;
                content: "";
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .15s cubic-bezier(.71, -.46, .88, .6);
            }
        }
        &-original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: 0;
        }
    }
</style>
<script type="text/babel">
    import Emitter from '../../util/emitter.js'

    export default {
        name: 'PgRadio',
        mixins: [Emitter],
        props: {
            value: {},
            label: {}
        },
        data() {
            return {
                focus: false
            }
        },
        computed: {
            isGroup() {
                let parent = this.$parent
                while (parent) {
                    if (parent.$options.name !== 'PgRadioGroup') {
                        parent = parent.$parent
                    }
                    else {
                        this._radioGroup = parent
                        return true
                    }
                }
                return false
            },
            model: {
                get() {
                    return this.isGroup ? this._radioGroup.value : this.value
                },
                set(val) {
                    if (this.isGroup) {
                        this.dispatch('PgRadioGroup', 'input', [val])
                    }
                    else {
                        this.$emit('input', val)
                    }
                }
            }
        }
    }
</script>