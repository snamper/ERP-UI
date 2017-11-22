<template>
    <section class="main" 
        :class="[
            'top_' + (88 + parseInt(top)),
            'bottom_' + parseInt(bottom),
            'padding-top_' + parseInt(paddingTop),
            'padding-bottom_' + parseInt(paddingBottom),
            base ? 'bg-color-base' : 'bg-color',
            maskShow ? 'filter' : 'none_filter'
        ]"
    >
        <slot></slot>
    </section>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>