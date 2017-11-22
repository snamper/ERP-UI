// 系统提示框
import hud from './hud/hud.vue'
// 没有数据时的默认页面
import defaultpage from './defaultPage/defaultPage.vue'
// 省市区
import region from './region/region.vue'
// 页面框架，用户页面模糊
import aside from './aside/aside.vue'
// 页面框架
import main from './main/index.vue'
// 按钮
import button from './button/button.vue'
// Icon
import icon from './icon/icon.vue'
// 导航
import navigation from './navigation/navigation.vue'
// 单选
import radio from './radio/radio.vue'
// 单选按钮组
import radioGroup from './radio/radio-group.vue'
// 多选
import checkbox from './checkbox/checkbox.vue'
// 多选按钮组
import checkboxGroup from './checkbox/checkbox-group.vue'
// 搜索
import search from './search/searchs.vue'
// 遮罩层
import modal from './modal/modal.vue'
// 弹出框
import confirm from './confirm/confirm.vue'
// tabs
import tabs from './tabs/tabs.vue'
// 订单列表
import orders from './orders/orders.vue'
// 计数器
import inputNumber from './inputNumber/inputNumber.vue'
// 下拉选择框
import select from './select/select.vue'
// 图片
import img from './img/img.vue'
// SKU选择
import skuSelect from './skuSelect/skuSelect.vue'
// swiper
import swiper from './swiper/swiper.vue'
// 图片上传
import imgUpload from './imgUpload/index.vue'






const install = Vue => {
	Vue.component(hud.name, hud) // 系统提示信息
	Vue.component(confirm.name, confirm) // 弹出框
	Vue.component(defaultpage.name, defaultpage) // 暂无数据
    Vue.component(aside.name, aside) // 主页框架
    Vue.component(main.name, main) // 主页框架
    Vue.component(button.name, button) // 按钮
    Vue.component(icon.name, icon) // 图标
    Vue.component(navigation.name, navigation) // 导航
    Vue.component(radio.name, radio) // 单选
    Vue.component(radioGroup.name, radioGroup) // 单选按钮组
    Vue.component(checkbox.name, checkbox) // 多选
    Vue.component(checkboxGroup.name, checkboxGroup) // 多选按钮组
    Vue.component(search.name, search) // 搜索
    Vue.component(modal.name, modal) // 遮罩层
    Vue.component(region.name, region) // 省市区
    Vue.component(tabs.name, tabs) // tabs
    Vue.component(orders.name, orders) // 订单列表
    Vue.component(inputNumber.name, inputNumber) // 计数器
    Vue.component(select.name, select) // 下拉选择框
    Vue.component(img.name, img) // 图片
    Vue.component(skuSelect.name, skuSelect)
    Vue.component(swiper.name, swiper) // swiper
    Vue.component(imgUpload.name, imgUpload) // 图片上传
}

export default install