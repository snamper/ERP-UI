<template>
    <pg-aside>
        <pg-main top="0" base>
            <div class="bg-color myDiv">

            	<div class="content-session">
            		<div class="content-img">
            			<!--<pg-img :src="" alt=""></pg-img>-->
            		</div>
            	</div>
        		
        		<div class="content-footer font_22">
    		      	<input class="number border-radius bg-color disable-border-color" v-model="detectCode" placeholder="输入防伪码">   		       		
        		</div> 
        		<div class="content-btn">
        		    <a href="javascript:;" class="pg-btn white-color primary-bg-color font_28" @click="queryDetailByCode">立即查询</a>
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
    		width: 95%;
			margin: 0 auto;
    		padding-top: 80/@rate;
    		.content-img {
	    		width: 100%;
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
			.content-p {
    			padding-top: 20/@rate;				
			}
			input{
				text-indent: 15/@rate;
    			width: 80%;
    			height: 70/@rate;
	            border-width: 1px;
	            border-style: solid;
                display: block;
                margin: 0 auto;  
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
    import focusProducts from './focusProducts';
    export default {
        ...focusProducts,
    };

</script>