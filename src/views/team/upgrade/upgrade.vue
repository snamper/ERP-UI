<template>
    <pg-aside>
        <pg-main top="0" base  infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore">
            <pg-search @search="search" placeholder="姓名/手机号/微信号"></pg-search>

            <div class="top clearfix bg-color">
                <div class="top-select pg-select border-radius disable-border-color">
                    <select class="title-color font_28" v-model="query.condition.flag" >
                        <option v-for="item in teamList" :value="item.flag">{{item.text}}</option>
                    </select>
                </div>              
            </div>
            <div v-for="n in upgradeList" class="content   clearfix bg-color ">
                <div class="content-title clearfix font_28 disable-border-color">
                	<span class="left">{{ n.name }}</span>
                	<span class="left">（{{ n.gradeName }}）</span>
                	<span class="zhonghengxian left clearfix">
                	00000
                		<i class="login-bg-color"></i>
                	</span>
                	<span class="left">（{{ n.upGradeName }}）</span>
                	<span class="right text-color">{{ n.applyTime }}</span>
                </div>
                <div class="content-session clearfix disable-border-color text-color font_22">
                	<p>手机号：<span>{{ n.mobile }}</span></p>
                	<p>微信号：<span>{{ n.wechat }}</span></p>
                	<p>推荐人：<span>{{ n.introducerName }}</span></p>
                	<p>申请团队：<span>{{ n.groupName }}</span></p>
                	<p>备注：<span>{{ n.note }}</span></p>
                </div>
                <div class="content-btn clearfix font_28 white-color">
                		<button v-if="n.flag == 0" class="left pg-btn white-color primary-bg-color border-radius" type="button" @click="agreeUpgrade(n)">同意</button>
                		<button v-if="n.flag == 0" class="left pg-btn white-color primary-bg-color border-radius" type="button" @click="declineUpgrade(n)">拒绝</button>
                		<button v-if="n.flag == 0" class="right left pg-btn white-color primary-bg-color border-radius" type="button" @click="checkImg(n)">查看截图</button>
                		<p v-if="n.flag == 97 || n.flag == 99" class="block title-color">已拒绝</p>
                        <p v-if="n.flag == 1 || n.flag == 10" class="block title-color">已同意</p>
                		<p v-if="n.flag == 100" class="block title-color">已完成</p>
                        <p v-if="n.flag == 95" class="block title-color">已取消</p>
                </div>
            </div>
            <div v-if="upgradeList.length == 0">
                    <pg-default-page  icon="shengjishenhe"  tip="暂无数据" >
                    </pg-default-page>  
            </div>          
        </pg-main>
        <pg-confirm ref="confirm" :confirm="confirm">
            <div class="check-img" v-if="isShow">
                <pg-img v-if="cheImg" :src="cheImg" alt=""></pg-img>
                <p v-else>暂无上级</p>
                <!-- <img v-else src="../../../assets/images/res_banner.jpg" alt=""> -->
            </div>            
        </pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    //头部
    .top {
    	width: 100%;
    	padding: 25/@rate 30/@rate 25/@rate 30/@rate;
    	.top-select {
    		float: left;
    		width: 170/@rate;
    		height: 70/@rate;
    		outline: none;
    	}
    }
    //查看截图
    .check-img {
        width: 100%;
        img {
            width: 100%;
            height: auto;
        }
    }
    //内容
    .content {
    	width: 100%;
    	margin-top: 10/@rate;
    	.content-title {
            border-bottom-width: 1px;
            border-bottom-style: solid;    	    		
    		padding: 30/@rate;
    		.left {
    			float: left;
    			position: relative;
    		}
    		.right {
    			float: right;
    		}
    		.zhonghengxian {
    			color: transparent;
    			margin-left: 20/@rate;
    			margin-right: 19/@rate;
    			width: 56/@rate;
    			height: 100%;
    			position: relative;
    			i {
    				position: absolute;
    				width: 100%;
    				height: 1px;
    				top: 0;
    				left: 0;
    				bottom: 0;
    				right: 0;
    				margin: auto;
    			}
    		}
    	}
    	.content-session {
            border-bottom-width: 1px;
            border-bottom-style: solid;    	    		
    		padding: 30/@rate;
    		p {
    			padding-top: 20/@rate;
    			text-align: left;
    		}    		
    	}
    	.content-btn {
    		padding: 20/@rate 30/@rate 20/@rate 30/@rate;
    		.left {
    			float: left;
    			outline: none;
    			border: none;
    			width: 190/@rate;
    			height: 70/@rate;
    			margin-right: 60/@rate;
    		}
    		.right {
    			margin-right: 0px;
    		}
    	}
    }
</style>

<script type="text/babel">
    import upgrade from './upgrade'
    export default {
        ...upgrade
    }
</script>