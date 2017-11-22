<template>
    <!-- 业绩明细 -->
    <pg-main top="0" base>
        <div class="bg-color achievement font_22 text-color" v-if="noData">
             <div class="title font_22  line-border-color">
                <span>{{title.name}}</span>
                <span>{{title.performance}}</span>
                <!-- <span class=" warning-color"><span>↑ </span>{{title.scale.toFixed(2)}}%</span> -->
                <span class="success-color" v-if="title.scale < 0"><span>&nbsp;↓&nbsp;</span>{{-title.scale.toFixed(2)}}%</span>
                <span class="warning-color" v-if="title.scale > 0"><span>&nbsp;↑&nbsp;</span>{{title.scale.toFixed(2)}}%</span>
                <span class="text-color" v-if="title.scale == 0"><span>&nbsp;—&nbsp;</span>&nbsp;—</span>
             </div> 
             <div class="content">
                 <div class="titles title-color font_28">
                     <div class="lis">订单号</div>
                     <div class="lis">订单金额</div>
                 </div>
                 <ul class="detail">
                     <li class="line-border-color" v-for="item in performanceDetail">
                         <div class="lis">{{item.sheet}}</div>
                         <div class="lis">{{item.totalAmount}}</div>
                     </li>
                 </ul>
             </div>     	
        </div>
        <pg-default-page 
                icon="xiajidingdan" 
                tip="暂无数据" 
                v-else>
        </pg-default-page>
    </pg-main>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

.achievement {
    .title {
        padding: 45/@rate;
        .name {
            margin-right: 20/@rate;
        }
        border-bottom-width: 10/@rate;
        border-bottom-style: solid;

    }
    .content {
        .titles {
            padding: 40/@rate 0;
        }
        .titles, .detail li {
            display: flex;
            .lis {
                flex:1;
            }
        }
        .detail {
            li {
                padding: 35/@rate 0;
               boder-top-width: 1/@rate;
               border-top-style: solid;
            }           
        }

    }
}
</style>

<script type="text/babel">
    import detailachievement from './detailachievement'
    export default {
        ...detailachievement
    }
</script>     