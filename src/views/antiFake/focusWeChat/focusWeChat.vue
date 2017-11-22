
<template>
    <pg-aside>
        <pg-main top="0" base>
            <div class="bg-color myDiv">

            	<div class="content-session">
            		<div class="content-img">
            			<pg-img :src="companyInfo.subscriptionQrCode" alt=""></pg-img>
            		</div>
            	</div>
        		<div class="content-footer font_22">
    		      	<p>分享方法：</p>
    	      		<p class="content-p"> 1.长按上方二维码，保存至手机相册，发送给朋友 </p>
    	      		<p class="content-p">2.下级用微信扫描上方二维码</p>	    		       		
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

<script>
    import focusWeChat from './focusWeChat';
    export default {
        ...focusWeChat,
    };

</script>