<template>
    <!-- 直属下级代理 -->
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
                               <div class="grade next">等级：{{item.gradeName}}总代</div>
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
                                   <a href="javascript:void(0)" class="font_22 text-color" @click="goDetail(item,11)">
                                       <span>上月他的业绩：</span>
                                       <span>{{item.mePerformanceLast}}</span>
                                       <span class="success-color" v-if="item.lastMonth < 0"><span>&nbsp;↓&nbsp;</span>{{-item.lastMonth.toFixed(2)}}%</span>
                                       <span class="warning-color" v-if="item.lastMonth > 0"><span>&nbsp;↑&nbsp;</span>{{item.lastMonth.toFixed(2)}}%</span> 
                                       <span class="text-color" v-if="item.lastMonth == 0"><span>&nbsp;—&nbsp;</span>&nbsp;—</span> 
                                   </a>
                               </div>
                           </div>
                           <div class="content-bottom">
                               <button class="content-btn pg-btn font_28 white-color primary-bg-color" type="button" @click="nextagrent(item)">点击查看他的直接推荐代理业绩</button>
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
    <!-- 分页 -->
    <!-- <pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore"></pg-main>-->
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
            padding-top: 30/@rate;
            border-bottom-style: solid;
            border-bottom-width: 10/@rate;
    
            //margin-bottom: 30/@rate;
            //border-bottom: 1px solid red;
            .detail {
                //text-align: left;
               // padding: 15/@rate;
                padding-left: 0 0 0 200/@rate;
                .next {
                    text-align: left;
                    padding: 10/@rate 0 10/@rate 200/@rate;
                }
            }
        }
        .content-bottom {
            margin: 40/@rate 0;
            button {
                outline: none;
                border: none;
                width: 480/@rate;
                height: 70/@rate;
            }
        }
    }
}
</style>

<script type="text/babel">
    import nextagent from './nextagent'
    export default {
        ...nextagent
    }
</script>     