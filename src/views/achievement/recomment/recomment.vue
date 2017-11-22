<template>
    <!-- 推荐的代理 -->
    <pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore">
        <div class="bg-color achievement font_22 text-color">
	         <div class="team font_28 title-color bg-color-base">
		        {{currentTeam.groupName}}
                <!-- <span class="iconfont icon-icon_qiehuan primary-color"></span> -->
	         </div>
             <div v-if="noData">
                 <div class="content-all" v-for="item in statisticsPersonalList">
                     <div class="content line-border-color">
                        <div class="detail">
                            <div class="name next">姓名：{{item.name}}（微信：{{item.wechat}}）</div>
                            <div class="grade next">等级：{{item.gradeName}}</div>
                            <div class="per_grade next">上级：{{item.parentName }}<span v-if="item.parentGradeName">（等级：{{item.parentGradeName}}）</span></div>
                            <div class="current_achievement next">
                                <a href="javascript:void(0)" class="font_22 text-color" @click="goDetail(item,10)">
                                    <span>本月他的业绩：</span>
                                    <span>{{item.mePerformance}}</span>
                                    <span class="success-color" v-if="item.thisMonth < 0"><span>&nbsp;↓&nbsp;</span>{{-item.thisMonth.toFixed(2)}}%</span>
                                    <span class="warning-color" v-if="item.thisMonth > 0"><span>&nbsp;↑&nbsp;</span>{{item.thisMonth.toFixed(2)}}%</span>                
                                    <span class="text-color" v-if="item.thisMonth == 0"><span>&nbsp;—&nbsp;</span>&nbsp;—</span>
                                </a>
                            </div>
                            <div class="per_achievement next">
                                <a href="javascript:void(0)" class="font_22 text-color" @click="goDetail(item,10)">
                                    <span>上月他的业绩：</span>
                                    <span>{{item.mePerformanceLast}}</span>
                                    <span class="success-color" v-if="item.lastMonth < 0"><span>&nbsp;↓&nbsp;</span>{{-item.lastMonth.toFixed(2)}}%</span>
                                    <span class="warning-color" v-if="item.lastMonth > 0"><span>&nbsp;↑&nbsp;</span>{{item.lastMonth.toFixed(2)}}%</span> 
                                    <span class="text-color" v-if="item.lastMonth == 0"><span>&nbsp;—&nbsp;</span>&nbsp;—</span> 
                                </a>
                            </div>
                        </div>
                     </div>       	
                 </div> 
             </div> 
            <pg-default-page 
                    icon="xiajidingdan" 
                    tip="暂无数据" 
                    v-else>
            </pg-default-page>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

.achievement {
    .team {
        padding: 45/@rate 30/@rate;
        text-align: left;
    }
    .content-all {
        &:last-of-type .content {
            border-bottom-width: 0;
        }
        .content {
            border-bottom-style: solid;
            border-bottom-width: 10/@rate;
            //margin-bottom: 70/@rate;
            .detail {
                //text-align: left;
                //padding-left: 200/@rate;
                padding: 30/@rate;
                .next {
                    text-align: left;
                    padding: 10/@rate 0 10/@rate 200/@rate;
                }
            }
        }
    }
}
</style>

<script type="text/babel">
    import recomment from './recomment'
    export default {
        ...recomment
    }
</script>     