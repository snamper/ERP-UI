<template>
    <pg-main top="0" base infinite-scroll-disabled="busy" infinite-scroll-distance="10" v-infinite-scroll="loadmore">
    <pg-search @search="search" placeholder="姓名/手机号/微信号"></pg-search>   
        <div class="content">
        	<ul>
        		<li v-for="item in customerGradeList" class="bg-color">
	        		<div class="content-top disable-border-color clearfix">
	        			<div class="content-img">
	        				<pg-img v-if="item.imageUrl" :src="item.imageUrl" alt=""></pg-img>
	        				<img v-else src="../../../assets/images/default_avatar.png">
	        			</div>
	        			<div class="content-right clearfix">
	        				<p class="clearfix">
	        					<span class="oen-span left">姓名: <span>{{item.customerName}}</span></span>
	        					<span class="oen-span left">等级: <span>{{item.gradeName}}</span></span>
	        					<span class="oen-span left">上级: <span>{{item.superiorName}}</span></span>
	        					<span v-if="query.condition.flag == 1" class="oen-span left" >推荐人: <span>{{item.introducerName}}</span></span>  
	        				</p>
	        				<p class="clearfix p2">
	        					
	        					<span class="oen-span left" v-if="item.mobile">手机号:<span>{{item.mobile}}</span></span>
	        					<span class="oen-span left" v-if="item.wechat">微信号:<span>{{item.wechat}}</span></span>   
	        					<span class="oen-span left">下级人数: <span class="warning-color">{{item.childCount}}</span></span>
	        					<span v-if="query.condition.flag == 2 || query.condition.flag == 3" class="oen-span left" >推荐人: <span>{{item.introducerName}}</span></span>    					
	        				</p>
	        			</div>        			
	        		</div>

	        		<div class="content-bottom">
	        		    <a class="content-btn pg-btn white-color primary-bg-color font_28" href="javascript:;" @click="toAuthorization(item)">查看授权书</a>        		
	        		</div>
        		</li>

	            <li v-if="customerGradeList.length == 0">
					<pg-default-page  icon="tuandui-wodexiaji"  tip="暂无数据" >
					</pg-default-page>	            
	            </li>         		
        	</ul>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .content {
    	width: 100%;
    	ul {
    		width: 100%;
    		li {
    			width: 100%;
    			margin-top: 10/@rate;
    			.content-top {
		            border-bottom-width: 1px;
		            border-bottom-style: solid;    				
	    			.content-img {
	    				padding-top: 36/@rate;
	    				padding-left: 30/@rate;
	    				padding-right: 30/@rate;
	    				padding-bottom: 36/@rate;
	    				float: left;
	    				img {
		    				width: 100/@rate;
		    				height: 100/@rate;
	    					border-radius: 50%;
	    				}
	    			}
	    			.content-right {
	    				float: left;
	    				width: 550/@rate;
	    				padding-bottom: 30/@rate;
	    				padding-top: 30/@rate;
	    				p {
	    					float: left;
	    					text-align: left;
	    					width: 250/@rate;
	    					padding-bottom: 25/@rate;
	    					.oen-span {
	    						display: inline-block;
	    						padding-bottom: 20/@rate;
	    						width: 100%;
	    					}
	    					.left {
	    						float: left;
	    					}
	    					.pbom30 {
	    						padding-top:30/@rate;
	    					}
	    				}
	    				.p2 {
	    					width: 300/@rate;
	    				}
	    				.padding-bom-none {
	    					padding-bottom: 0;
	    				}
	    			}
    			}
    			.content-bottom {
    				padding-top: 30/@rate;
    				padding-bottom: 30/@rate;
    				padding-right: 225/@rate;
    				padding-left: 225/@rate;
    				a {
    					border: none;
    					width: 300/@rate;
    					height: 70/@rate;
    					line-height: 70/@rate;
    					text-decoration: none;
    				}
    			}
    		}
    	}

    }
</style>

<script type="text/babel">
    import subordinate from './subordinate'
    export default {
        ...subordinate
    }
</script>