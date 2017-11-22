<template>
  <div class="pg-checkbox-group">
    <slot></slot>
  </div>
</template>
<script type="text/babel">
    import Emitter from '../../util/emitter.js'

    export default {
        name: 'PgCheckboxGroup',
        mixins: [Emitter],
        props: {
            value: {},
            min: Number,
            max: Number,
            size: String,
            fill: String,
            textColor: String
        },
        
    }
</script>
