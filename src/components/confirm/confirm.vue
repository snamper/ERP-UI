<!-- <template>
    <transition name="fade">
        <div class="pg-confirm" @click="closeButton" v-show="(confirm && confirm.show) || false" transition="fade">
            <div class="box" @click.stop>
                <div class="header title-color bg-color font_36" v-if="confirm && confirm.title">
                    {{ confirm.title || '' }}
                </div>
                <div class="body font_30">
                    <span class="content" v-if="confirm && confirm.content">{{confirm.content}}</span>
                    <slot></slot>
                </div>
                <ul class="flex-ul b_l footer font_36" v-if="confirm && (confirm.confirmButtonText || confirm.cancelButtonText)">
                        <li class="title-color" v-if="confirm.cancelButtonText" @click="closeButton">{{confirm.cancelButtonText}}</li>
                        <li class="primary-color disable-border-color" v-if="confirm.confirmButtonText" @click="confirmButton">{{confirm.confirmButtonText}}</li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<style type="stylesheet/less" lang="less" scoped>
	@import '~assets/css/variables';
        .pg-confirm {
            z-index: 99999;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            .box {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 610/@rate;
                max-height: 80%;
                transform: translate(-50%, -50%);
                border-radius: 20/@rate;
                background: rgba(255, 255, 255, 0.8);
                overflow-y: scroll;
            }
            .header {
                background: rgba(255, 255, 255, 0.9);
                height: 120/@rate;
                line-height: 120/@rate;
                text-align: center;
            }
            .body {
                background: rgba(245, 245, 245, 0.8);
                padding: 40/@rate;
                text-align: left;
            }
            .footer {
                height: 120/@rate;
                line-height: 120/@rate;
                background: rgba(255, 255, 255, 0.9);
            }
        }
        .fade-enter-active {
            animation: fadein .5s;
        }
        .fade-leave-active {
            animation: fadeout .5s;
        }
        @keyframes fadein {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        @keyframes fadeout {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
</style>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'PgConfirm',
        props: {
            confirm: {}
        },
        data() {
            return {
                show: false
            }
        },
        watch: {
            confirm: {
                handler: function() {
                    this.setMaskShow(this.confirm.show)
                },
                deep: true
            }
        },
        methods: {
            ...mapActions([
                'setMaskShow'
            ]),
            closeButton() {
                this.$emit('cancel')
            },
            confirmButton() {
                this.$emit('confirm')
            }
        }
    }
</script> -->
<template>
    <transition name="bounce">
        <div class="pg-confirm" @click="closeButton" v-show="show" transition="fade">
            <div class="box" @click.stop>
                <div class="header title-color bg-color font_36" v-if="confirm && confirm.title">
                    {{ confirm.title || '' }}
                </div>
                <div class="body font_30">
                    <span class="content" v-if="confirm && confirm.content">{{confirm.content}}</span>
                    <slot></slot>
                </div>
                <ul class="flex-ul b_l footer font_36" v-if="confirm && (confirm.confirmButtonText || confirm.cancelButtonText)">
                        <li class="title-color" v-if="confirm.cancelButtonText" @click="closeButton">{{confirm.cancelButtonText}}</li>
                        <li class="primary-color disable-border-color" v-if="confirm.confirmButtonText" @click="confirmButton">{{confirm.confirmButtonText}}</li>
                </ul>
            </div>
        </div>
    </transition>
</template>

<style type="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
        .pg-confirm {
            z-index: 99999;
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.6);
            .box {
                position: absolute;
                left: 50%;
                top: 50%;
                width: 610/@rate;
                overflow-x: hidden;
                max-height: 80%;
                transform: translate(-50%, -50%);
                border-radius: 20/@rate;
                background: rgba(255, 255, 255, 0.8);
                overflow-y: scroll;
            }
            .header {
                background: rgba(255, 255, 255, 0.9);
                height: 120/@rate;
                line-height: 120/@rate;
                text-align: center;
            }
            .body {
                background: rgba(245, 245, 245, 0.8);
                padding: 40/@rate;
                text-align: left;
            }
            .footer {
                height: 120/@rate;
                line-height: 120/@rate;
                background: rgba(255, 255, 255, 0.9);
            }
        }
        .bounce-enter-active {
            animation: bouncein .35s;
        }
        .bounce-leave-active {
            animation: bounceout .35s;
        }
        @keyframes bouncein {
            0% {
                opacity: 0;
                transform: scale(1.3);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        @keyframes bounceout {
            0% {
                opacity: 1;
                transform: scale(1);
            }
            100% {
                opacity: 0;
                transform: scale(1.3);
            }
        }
</style>

<script type="text/babel">
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'PgConfirm',
        props: {
            confirm: {}
        },
        data() {
            return {
                show: false,
                resolve: null,
                reject: null,
                promise: null
            }
        },
        watch: {
            show(isShow) {
                if (!isShow) {
                    this.setMaskShow(false)
                }
            }
        },
        methods: {
            ...mapActions([
                'setMaskShow'
            ]),
            open() {
                this.setMaskShow(true)
                this.show = true

                this.promise = new Promise((resolve, reject) => {
                    this.resolve = resolve
                    this.reject = reject
                })
                return this.promise
            },
            close() {
                this.closeButton()
            },
            closeButton() {
                this.show = false
                this.reject('close')
                this.setMaskShow(false)
            },
            confirmButton() {
                this.resolve('submit')
            }
        }
    }
</script>