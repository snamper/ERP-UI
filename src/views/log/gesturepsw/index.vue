<template>
    <pg-main class="gesturepsw" top="-88">
        <div class="tip font_36" :class="[isError ? 'warning-color' : 'title-color' ]">{{tip}}</div>
        <div class="patternContainer"></div>
        <a href="javascript:void(0)" class="forget text-color font_36" @click="forgotPassword">忘记手势密码？</a>
    </pg-main>
</template>

<style type="stylesheet/less" lang="less">
    @import '~assets/css/variables';
    .gesturepsw {
        .tip {
            padding: 150/@rate 0 130/@rate 0;
        }
        .forget {
            display: block;
            margin-top: 146/@rate;
        }
        .patternContainer {
            margin: 0 auto;
        }
        .patt-holder {
            -ms-touch-action: none;
        }
        .patt-wrap { 
            position: relative; 
            cursor: pointer;
            margin: auto;
            overflow: hidden;
        }
        .patt-wrap li {
            transition: all .3s ease-in-out 0s;
        }
        .patt-wrap ul, .patt-wrap li {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .patt-big-dots {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.4;
            background: transparent;
            border-radius: 100%;
        }
        .patt-circ {
            position: relative;
            float: left;
            box-sizing: border-box;
            opacity: 0.8;
            border-width: 1px;
            border-style: solid;
         }
         .patt-circ.hovered {
            border-color: transparent;
         }
        .patt-error .patt-circ.hovered {
            border-color: transparent;
        }
        .patt-success .patt-circ.hovered {
            border-color: transparent;
        }
        .patt-dots {
            opacity: 0.8;
            width: 38/@rate;
            height: 38/@rate;
            border-radius: 38/2/@rate;
            position:absolute;
            top: 50%;
            left: 50%;
            margin-top: -38/2/@rate;
            margin-left: -38/2/@rate;
        }
        .patt-lines {
            opacity: 0.5;
            border-radius: 5px;
            height: 10px;
            position: absolute;
            transform-origin: 5px 5px;
        }
        .patt-hidden .patt-lines {
            display:none;
        }
        .patt-big-dots, .patt-dots, .patt-lines {
            transition: background .3s ease-in-out 0s;
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>