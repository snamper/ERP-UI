/**
 * 主页
 */
const Home = resolve => require(['views/home/home.vue'], resolve) // 主页
const content = resolve => require(['views/home/swiperContent/content.vue'], resolve) // 轮播图点击内容

export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '主页',
            auth: true,
            back: '/',
            navButton: {
                path: '/settings',
                icon: 'shezhi'
            }
        }
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: content,
        meta: {
            title: '轮播图内容',
            auth: true
        }
    }
]