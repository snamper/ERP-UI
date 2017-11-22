<template>
    <pg-main top="0" base>
        <div>
            <img :src="imgUrl" width="100%">
        </div>
    </pg-main>
</template>

<script type="text/babel">
    import authorization from './authorization'
    export default {
        ...authorization
    }
</script>