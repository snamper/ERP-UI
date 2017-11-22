<template>
    <!-- 公告详情 -->
    <pg-main top="0" base>
        <div class="bg-color announcementdetail font_28 title-color">
<!--              <div class="title title-color font_36">{{msgDetail.subject}}</div>  	
             <div class="time">{{msgDetail.readTime}}</div> -->
             <div class="content title-color" v-html="msgDetail.body"></div>
        </div>
    </pg-main>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

.announcementdetail {
    padding-top: 20/@rate;
    .title, .time, .content {
        padding: 15/@rate 30/@rate;
    }
    .content {
        text-align: left;
        line-height: 1.5;
    }
}
</style>

<script type="text/babel">
    import announcementdetail from './announcementdetail'
    export default {
        ...announcementdetail
    }
</script>     