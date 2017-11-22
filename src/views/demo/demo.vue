<template>
    <pg-aside>
    	<pg-main>
            <div class="title">提示</div>
            <div>
                <a href="javascript:void(0)" @click="hud('loading')">加载中</a>
                <a href="javascript:void(0)" @click="hud('success')">成功</a>
                <a href="javascript:void(0)" @click="hud('error')">错误</a>
            </div>
            <div class="title">弹出框</div>
            <div>
                <a href="javascript:void(0)" @click="openConfirm">点击弹出</a>
            </div>
            <div class="title">下拉框</div>
            <div>
                <pg-select :options="selectList" :currentValue="selectValue"></pg-select>
            </div>
            <div class="pg-select border-radius disable-border-color">
                <select class="title-color font_28" v-model="selectValue">
                    <option>1</option>
                </select>
            </div>
            <div>
                <pg-input-number type="primary" v-model="number" @change="inputNumberChange"></pg-input-number>
            </div>
            <div class="title">省市区</div>
            <div>
        		<pg-region @change="regionChange"></pg-region>
            </div>
            <div class="title">单选</div>
            <div>
                <pg-radio v-model="onlyRadio" label="AA" @input="changeOnlyRadio">AA</pg-radio>
                <pg-radio v-model="onlyRadio" label="BB" @input="changeOnlyRadio">BB</pg-radio>
            </div>
            <div class="title">单选按钮组</div>
            <div>
                <pg-radio-group v-model="radio" @change="changeRadio">
                    <pg-radio label="A">A</pg-radio>
                    <pg-radio label="B">B</pg-radio>
                    <pg-radio label="C">C</pg-radio>
                </pg-radio-group>
            </div>
            <div class="title">多选</div>
            <div>
                <pg-checkbox v-model="checkbox">选项一</pg-checkbox>
            </div>
            <div class="title">多选按钮组</div>
            <div>
                <pg-checkbox-group v-model="checkboxList" @change="checkboxChange">
                    <pg-checkbox label="1">选项一</pg-checkbox>
                    <pg-checkbox label="2">选项二</pg-checkbox>
                    <pg-checkbox label="3">选项三</pg-checkbox>
                </pg-checkbox-group>
            </div>
            <div class="title">默认页一个按钮</div>
            <div>
                <pg-default-page icon="gouwuchekong" tip="目前没有商品，快去购买" buttonPath="/myorder" buttonText="我的订单"></pg-default-page>
            </div>
            <div class="title">默认页多个按钮</div>
            <div>
                <pg-default-page icon="gouwuchekong" tip="目前没有商品，快去购买" :btns="defaultPageBtns"></pg-default-page>
            </div>
            <div class="title">图片上传</div>
            <div>
                <pg-upload type="primary" @upload-success="uploadSuccess"></pg-upload>
            </div>
    	</pg-main>
        <!-- 弹出框 -->
        <pg-confirm ref="confirm" :confirm="confirm">
            <div>这里可以自定义内容</div>
        </pg-confirm>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    div {
        &.title {
            .px2px(font-size, 40);
            margin: 40/@rate 0;
        }
        text-align: left;
    }
</style>

<script type="text/babel">
	import demo from './demo'

	export default {
		...demo
	}
</script>