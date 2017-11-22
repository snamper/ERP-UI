<template>
    <pg-aside>
        <pg-main top="-88" base>
            
            
            <div class="contentSwiper" v-html="content">
                
            </div>
        </pg-main>
        
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .contentSwiper{
        margin-top: 88/@rate;
        height: 100%;
        width: 100%;
    }
    .banner {
        width: 100%;
        height: 270/@rate;
    }
    .account {
        
        
        .user {
            float: left;
            width: 432/@rate;
            height: 230/@rate;
            .avatar {
                display: inline-block;
                padding: 40/@rate 20/@rate;
                float: left;
                &_img {
                    width: 105/@rate;
                    height: 105/@rate;
                    border-radius: 100%;
                    overflow: hidden;
                    img {
                        width: 100%;
                    }
                }
                &_name {
                    margin-top: 20/@rate;
                    width: 105/@rate;
                }
            }
            .info {
                float: right;
                width: 287/@rate;
                display: inline-block;
                padding: 34/@rate 20/@rate;
                li {
                    text-align: left;
                    height: 54/@rate;
                    line-height: 54/@rate;
                    span {
                        line-height: 54/@rate;
                        vertical-align: top;
                        white-space: nowrap;
                        display: inline-block;
                        width: 180/@rate;
                        overflow: hidden;
                    }
                }
            }
        }
        .money {
            float: right;
            width: 268/@rate;
            height: 230/@rate;
            padding: 42/@rate 0;
            .amount {
                height: 48/@rate;
                line-height: 48/@rate;
            }
            a {
                display: block;
                width: 160/@rate;
                height: 70/@rate;
                line-height: 70/@rate;
                margin: 0 auto;
            }
        }
    }
    .msg {
        padding: 0 30/@rate;
        text-align: left;
        height: 72/@rate;
        line-height: 72/@rate;
        .icon {
            float: left;
        }
        .title {
            display: inline-block;
            margin: 0 15/@rate;
        }
        .more {
            float: right;
        }
    }
    .menu {
        padding: 20/@rate 10/@rate;
        margin-left: -10/@rate;
        li {
            display: inline-block;
            width: 230/@rate;
            margin-left: 10/@rate;
            margin-bottom: 10/@rate;
            a {
                display: block;
                padding: 55/@rate 0;
                .title {
                    padding-top: 20/@rate;
                    display: block;

                }
            }
        }
    }
    .team-list {
        li {
            position: relative;
            text-align: left;
            padding: 20/@rate;
            &:not(:last-child) {
                border-bottom-width: 1px;
                border-bottom-style: solid;
            }
            .cover {
                width: 80/@rate;
                height: 80/@rate;
                text-align: left;
            }
            .title {
                height: 80/@rate;
                line-height: 80/@rate;
                display: inline-block;
                vertical-align: top;
                margin-left: 40/@rate;
            }
            .radio {
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>

<script type="text/babel">
    import content from './content'
    export default {
        ...content
    }
</script>