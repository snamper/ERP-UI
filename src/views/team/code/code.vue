<template>
    <pg-aside>
        <pg-main top="0" base>
            <div class="bg-color myDiv">

            	<div class="content-title font_28">
            		<p><span>选择团队：</span><span>{{ codeList.groupName }}</span></p>
            		<p class="content-p"><span>选择等级：</span>
                        <span v-if="codeList.desc">{{ codeList.desc }}</span>
                        <span v-else class="disable-color">未选择</span>
                    </p>
            	</div>
            	<div class="content-session">
            		<div class="content-img">
            			<pg-img :src="codeList.codeImg" alt=""></pg-img>
            		</div>
            	</div>
        		<div class="content-time font_22 primary-color">
        			倒计时：{{timeText}}
        		</div> 
        		<div class="content-footer font_22">
    		      	<p>分享方法：</p>
    	      		<p class="content-p">1.点击右上角分享到朋友圈或微信好友</p>
    	      		<p class="content-p"> 2.长按上方二维码，保存至手机相册，发送给朋友 </p>
    	      		<p class="content-p">3.下级用微信扫描上方二维码</p>	    		       		
        		</div> 
        		<div class="content-btn">
        		    <a href="javascript:;" class="pg-btn white-color primary-bg-color font_28" @click="declineUpgrade">继续生成</a>
        		</div>      	
            </div>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .myDiv {
    	width: 100%;
    	height: 100%;   

    	.content-title {
	    	padding-left: 90/@rate;
	    	padding-top: 40/@rate;
    		text-align: left;
    		.content-p {
    			padding-top: 20/@rate;
    		}
    	}
    	.content-session {
    		width: 100%;
    		padding-left: 155/@rate;
    		padding-top: 80/@rate;
    		.content-img {
	    		width: 440/@rate;
	    		height: 440/@rate;
	    		img {
	    			width: 100%;
	    			height: 100%;
	    		}
    		}
    	}
		.content-time {
			padding-top: 40/@rate;
		}
		.content-footer {
			text-align: left;
			padding-top: 60/@rate;
			padding-left: 90/@rate;
			.content-p {
    			padding-top: 20/@rate;				
			}
		}
		.content-btn {
			margin-top: 60/@rate;
			a {
    			width: 300/@rate;
    			height: 70/@rate;
                line-height: 70/@rate;
                text-decoration: none;
			}
		}

    }
</style>

<script type="text/babel">
    import code from './code'
    export default {
        ...code
    }
</script>