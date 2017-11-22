<template>
    <div class="pg-upload">
        <pg-button 
            :class="[
                (type == 'primary' || type == 'light') ? (type == 'primary' ? 'white-color primary-bg-color' : 'title-border-color title-color') : 'disable-border-color text-color'
            ]"
            @click="handleClick">
            {{text}}
            <input 
                type="file" 
                name="file" 
                class="pg-upload_input" 
                @change="handleChange" 
                ref="input" 
                :multiple="multiple" 
                :accept="accept">
        </pg-button>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-upload {
        display: inline-block;
        .pg-btn {
            border-style: solid;
            border-width: 1px;
        }
        &_input {
            display: none;
        }
    }
</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>