/**
 * 素材库
 */
const Material = resolve => require(['views/material/material.vue'], resolve) // 素材库

export default [
    {
        path: '/material',
        name: 'material',
        component: Material,
        meta: {
            title: '素材库',
            auth: true
        }
    }
]