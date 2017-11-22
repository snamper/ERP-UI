<template>
    <!-- 公告列表 -->
    <pg-main top="0" base>
        <div class="bg-color announcement text-color" v-if="noData">
             <div class="content">
                 <ul class="detail">
                     <li class="line-border-color" v-for="item in announcementList">
                        <router-link :to="{ path : '/announcementdetail?msgInID=' + item.msgInID}">
                             <div class="lis left title-color">
                                 <i class="iconfont icon-icon_xiaoxi  font_42 primary-color left-icon" v-if="item.flag == 10">
                                     <span class="circle cricle-border-radius warning-bg-color" v-if="item.flag == 10"></span>
                                 </i>
                                 <i class="iconfont icon-icon_xiaoxi  font_42 text-color left-icon" v-if="item.flag == 100"></i>
                                 <span class=" font_28 ">{{item.subject}}</span>
                             </div>
                             <!-- <div class="lis right font_22 text-color">{{item.recevieTime.substring(0,16)}}</div> -->
                             <div class="lis right font_22 text-color" v-if="item.recevieTime">{{item.recevieTime | substrdan(0,19)}}</div>
                        </router-link>
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

.announcement {
    .content {
        .detail {
            li {
                padding: 0 30/@rate;
               boder-top-width: 10/@rate;
               border-top-style: solid;
               line-height: 100/@rate;
               height: 100/@rate;
               a {
                    display: flex;
                    height: 100/@rate;
                    .lis {
                        line-height: 100/@rate;
                        span {
                            margin-left: 20/@rate;
                        }
                    }
                    .left {
                        text-align: left;
                        flex: 3;
                        .iconfont {
                            position: relative;
                            display: inline-block;
                            vertical-align: top;
                            .circle {
                                width: 15/@rate;
                                height: 15/@rate;
                                position: absolute;
                                top: 30/@rate;
                                right: -10/@rate;
                            }
                        }
                    }
                    .right {
                        text-align: right;
                        flex: 2;
                    }
               }

            }           
        }

    }
}
</style>

<script type="text/babel">
    import announcement from './announcement'
    export default {
        ...announcement
    }
</script>     