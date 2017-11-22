<template>
    <!-- 业绩查询首页 -->
    <pg-main top="0" base>
        <div class="bg-color achievement font_22 text-color" v-for="item in personalFirstList">
	         <div class="team font_28 title-color bg-color-base">
		        {{currentTeam.groupName}}
                <!-- <span class="iconfont icon-icon_qiehuan primary-color"></span> -->
	         </div> 
             <div v-if="noData">
                <div class="title line-border-color">
                   <span class="name  font_28 title-color">{{item.name}}</span>
                   <a href="javascript:void(0)" class="font_22 text-color" @click="goDetail(item,10)">
                       <span>本月个人业绩：</span>
                       <span>{{item.mePerformance}}</span>
                       <span class="success-color" v-if="item.thisMonth < 0 && item.mePerformance != 0"><span>&nbsp;↓&nbsp;</span>{{-item.thisMonth.toFixed(2)}}%</span>
                       <span class="warning-color" v-if="item.thisMonth > 0 && item.mePerformance != 0"><span>&nbsp;↑&nbsp;</span>{{item.thisMonth.toFixed(2)}}%</span>
                       <span class="text-color" v-if="item.thisMonth == 0 || item.mePerformance== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span>
                   </a>
                </div>
                <div class="content">
                    <div class="current_month">
                        <div class="next">
                          <a href="javascript:void(0)" class="font_22 text-color"  @click="goDetail(item,20)">
                               <span>本月直属下级业绩：</span>
                               <span>{{item.subPerformance}}</span>
                               <span class="success-color" v-if="item.thisMonthOne < 0 && item.subPerformance != 0"><span>&nbsp;↓&nbsp;</span>{{-item.thisMonthOne.toFixed(2)}}%</span>
                               <span class="warning-color" v-if="item.thisMonthOne > 0 && item.subPerformance != 0"><span>&nbsp;↑&nbsp;</span>{{item.thisMonthOne.toFixed(2)}}%</span>
                               <span class="text-color" v-if="item.thisMonthOne == 0 || item.subPerformance== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span>
                          </a>
                       </div>
                        <div class="next">
                           <a href="javascript:void(0)" class="font_22 text-color"  @click="goDetail(item,30)">
                               <span>本月直属下二级业绩：</span>
                               <span>{{item.subTwoPerformance}}</span>
                               <span class="success-color" v-if="item.thisMonthTwo < 0 && item.subTwoPerformance != 0"><span>&nbsp;↓&nbsp;</span>{{-item.thisMonthTwo.toFixed(2)}}%</span>
                               <span class="warning-color" v-if="item.thisMonthTwo > 0 && item.subTwoPerformance != 0"><span>&nbsp;↑&nbsp;</span>{{item.thisMonthTwo.toFixed(2)}}%</span>                        
                               <span class="text-color" v-if="item.thisMonthTwo == 0 || item.subTwoPerformance== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span>                        
                           </a>
                       </div>
                    </div>
                    <div class="per_month">
                        <div class="next mine">
                           <a href="javascript:void(0)" class="font_22 text-color"  @click="goDetail(item,11)">
                               <span>上月个人业绩：</span>
                               <span>{{item.mePerformanceLast}}</span>
                               <!-- <span class=" warning-color"><span>↑ </span>{{item.lastMonth}}%</span> -->
                               <span class="success-color" v-if="item.lastMonth < 0 && item.mePerformanceLast != 0"><span>&nbsp;↓&nbsp;</span>{{-item.lastMonth.toFixed(2)}}%</span>
                               <span class="warning-color" v-if="item.lastMonth > 0 && item.mePerformanceLast != 0"><span>&nbsp;↑&nbsp;</span>{{item.lastMonth.toFixed(2)}}%</span>   
                               <span class="text-color" v-if="item.lastMonth == 0 || item.mePerformanceLast== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span>   
                           </a>
                       </div>
                        <div class="next">
                           <a href="javascript:void(0)" class="font_22 text-color"  @click="goDetail(item,21)">
                               <span>上月直属下级业绩：</span>
                               <span>{{item.subPerformanceLast}}</span>
                               <!-- <span class=" warning-color"><span>↑ </span>{{item.lastMonthOne}}%</span> -->
                               <span class="success-color" v-if="item.lastMonthOne < 0 && item.subPerformanceLast != 0"><span>&nbsp;↓&nbsp;</span>{{-item.lastMonthOne.toFixed(2)}}%</span>
                               <span class="warning-color" v-if="item.lastMonthOne > 0 && item.subPerformanceLast != 0"><span>&nbsp;↑&nbsp;</span>{{item.lastMonthOne.toFixed(2)}}%</span> 
                               <span class="text-color" v-if="item.lastMonthOne == 0 || item.subPerformanceLast== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span> 
                           </a>
                       </div>
                        <div class="next">
                           <a href="javascript:void(0)" class="font_22 text-color"  @click="goDetail(item,31)">
                               <span>上月直属下二级业绩：</span>
                               <span>{{item.subTwoPerformanceLast}}</span>
                               <!-- <span class=" success-color"><span>↓ </span>{{item.lastMonthTwo}}%</span> -->
                               <span class="text-color" v-if="item.lastMonthOne == 0 || item.subTwoPerformanceLast== 0 "><span>&nbsp;—&nbsp;</span>&nbsp;—</span> 
                               <span class="success-color" v-if="item.lastMonthOne < 0 && item.subTwoPerformanceLast != 0"><span>&nbsp;↓&nbsp;</span>{{-item.lastMonthOne.toFixed(2)}}%</span>
                               <span class="warning-color" v-if="item.lastMonthOne > 0 && item.subTwoPerformanceLast != 0"><span>&nbsp;↑&nbsp;</span>{{item.lastMonthOne.toFixed(2)}}%</span> 
                           </a>
                       </div>
                    </div>
                   <div class="content-bottom">
                       <button class="content-btn pg-btn font_28 white-color primary-bg-color" type="button" @click="nextagent(item)">点击查看我的直属下级代理业绩</button>
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
    //padding: 0 30/@rate;
    .team {
        padding: 45/@rate 30/@rate;
        text-align: left;
    }
    .title {
        padding: 30/@rate;
        text-align: left;
        border-bottom-width: 1/@rate;
        border-bottom-style: solid;
        margin-bottom: 30/@rate;
        .name {
            margin-right: 20/@rate;
        }
    }
    .content {
        .next {
            padding: 10/@rate 0;
        }
        .current_month {
            margin-bottom: 40/@rate;
        }
        .per_month {
           margin-bottom: 40/@rate; 
        }
        .content-bottom {
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
    import achievement from './achievement'
    export default {
        ...achievement
    }
</script>     