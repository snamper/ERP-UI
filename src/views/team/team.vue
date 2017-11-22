<template>
    <pg-aside>
    <pg-main top="0" base>
       <div class="tob primary-bg-color white-color">
           <div class="tob-img ">
                <pg-img :src="customerInfo.headImgUrl" v-if="customerInfo.headImgUrl"></pg-img>
                <img v-else src="../../assets/images/default_avatar.png">
           </div>
           <div class="tob-name font_36">
               {{customerInfo.name}}
           </div>
           <div class="tob-iocn font_22">
               <i class="iconfont icon-icon_shengdai"></i>
               <i>{{customerInfo.gradeName}}</i>
           </div>
       </div>
       <div class="center clearfix bg-color primary-color">
            <div class="center-item font_22">
                <router-link class="primary-color" :to="{path: '/promotionTeam'}">
                    <i class="iconfont icon-icon_tuijian"></i>
                    <p>推广新人</p>
                </router-link>   
            </div>
            <div class="center-item font_22">
                <router-link class="primary-color" :to="{path: '/registerTeam'}">
                    <i class="iconfont icon-icon_xingming"></i>
                    <p>审核注册</p>
                </router-link>   
            </div>
            <div class="center-item font_22">
                <router-link v-if="customerInfo.isTopGrade == 0" class="primary-color" :to="{path: '/auditTeam'}">
                    <i class="iconfont icon-icon_shengji"></i>
                    <p>我要升级</p>
                </router-link>

                <a v-if="customerInfo.isTopGrade == 1" class="primary-color"  @click="checkImg">
                    <i class="iconfont icon-icon_shengji"></i>
                    <p>我要升级</p>
                </a>                      
            </div>
            <div class="center-item font_22">
                <router-link class="primary-color" :to="{path: '/upgradeTeam'}">
                    <i class="iconfont icon-icon_shengjishenhe"></i>
                    <p>升级审核</p>
                </router-link>   
            </div>
       </div>

       <div class="footer bg-color font_28">
            <div class="footer-item">               
                <span class="footer-item-icon iconfont icon-icon_tuandui-wodexiaji primary-color" title="我的下级"></span>           
                <span>
                    <router-link class="blok" :to="{path: '/subordinateTeam',query:{code:1}}">
                    我的下级
                    </router-link>                        
                </span>
                <span>（{{oneLevel.count}}）</span>
                <span :class="oneExpandClass" class="right iconfont  disable-color font_20" @click="onClickExpand(1)"></span>
            </div>
            <ul v-if="oneNum" class="footer-ul bg-color-base text-color font_28">
                <li v-for="item in oneLevel.subCustomers">
                   <span>{{item.name}}</span>
                   <span class="num">（{{item.count}}）</span>
                </li>
                <li class="text-center" v-if="oneLevel.subCustomers.length == 0">
                    暂无下级
                </li>
            </ul>  


            <div class="footer-item">
                <span class="footer-item-icon iconfont icon-icon_tuandui-wodexiaji primary-color" title="我的下二级"></span>
                <span>
                    <router-link class="blok" :to="{path: '/subordinateTeam',query:{code:2}}">
                    我的下二级
                    </router-link>  
                 </span>
                <span>（{{twoLevel.count}}）</span>
                <span :class="twoExpandClass" class="right iconfont  disable-color font_20" @click="onClickExpand(2)" ></span>
            </div>
            <ul v-if="twoNum" class="footer-ul bg-color-base text-color font_28">
                <li v-for="item in twoLevel.subCustomers">
                   <span>{{item.name}}</span>
                   <span class="num">（{{item.count}}）</span>
                </li>
                <li class="text-center" v-if="twoLevel.subCustomers.length == 0">
                    暂无下级
                </li>
            </ul> 


            <div class="footer-item">
                <span class="footer-item-icon iconfont icon-icon_tuandui-wodexiaji primary-color" title="我的下三级"></span>
                <span>
                    <router-link class="blok" :to="{path: '/subordinateTeam',query:{code:3}}">
                    我的下三级
                    </router-link>  
                 </span>
                <span>（{{threeLevel.count}}）</span>
                <span :class="threeExpandClass" class="right iconfont  disable-color font_20" @click="onClickExpand(3)" ></span>
            </div>
            <ul v-if="threeNum" class="footer-ul bg-color-base text-color font_28">
                <li v-for="item in threeLevel.subCustomers">
                   <span>{{item.name}}</span>
                   <span class="num">（{{item.count}}）</span>
                </li>
                <li class="text-center" v-if="threeLevel.subCustomers.length == 0">
                    暂无下级
                </li>
            </ul> 


        </div>
        <div class="footer-btn bg-color">
            <a href="javascript:;" class="pg-btn font_28 white-color primary-bg-color" @click="toAuthorization">查看授权书</a>  
        </div>
    </pg-main>
    <pg-confirm ref="confirm" :confirm="confirm">
        <div class="check-img">
            
            <p >代理商已是最高级代理等级，不能再升级！</p>
        </div>            
    </pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .tob {
        width: 100%;
        .tob-img {
            padding-top: 34/@rate;
            padding-bottom: 30/@rate;
            width: 100%;
            text-align: center;
            img {
                width: 180/@rate;
                height: 180/@rate;
                border-radius: 50%;
            }
        }
        .tob-name {
            padding-bottom: 20/@rate;
        }
        .tob-iocn {
            padding-bottom: 50/@rate;
        }
    }
    .center {
        padding-top: 24/@rate;
        padding-bottom: 24/@rate;
        .center-item {
            width: 25%;
            float: left;
            .iconfont {

            }
            p {
                padding-top: 10/@rate;
            }
        }
    }
    .footer {
        margin-top: 10/@rate;
        text-align: left;
        .footer-item {
            padding: 30/@rate;
            margin-bottom: 1px;
            // border-bottom-width: 1px;
            // border-bottom-style: solid;
            .right {
                float: right;
            }
            .blok {
                color: #000;
            }
        }
        .footer-ul {
            width: 100%;
            li {
                padding-left: 70/@rate;
                padding-top: 20/@rate;
                padding-bottom: 20/@rate;
                padding-right: 70/@rate;
                .num {
                    float: right;
                }
            }
            .text-center {
                text-align: center;
            }
        }
    }
    .footer-btn {
        padding-bottom: 240/@rate;
        padding-top: 120/@rate;
        a {
            display: inline-block;
            text-decoration: none;
            width: 300/@rate;
            height: 70/@rate;
            line-height: 70/@rate;
            border: none;
        }
    }

</style>

<script type="text/babel">
    import team from './team'
    export default {
        ...team
    }
</script>