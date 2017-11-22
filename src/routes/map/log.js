/**
 * 登录注册相关
 */
const Login = resolve => require(['views/log/login/index.vue'], resolve) // 登录
const Gesturepsw = resolve => require(['views/log/gesturepsw/index.vue'], resolve) // 手势密码
const Auth = resolve => require(['views/log/auth/index.vue'], resolve) // 身份验证
const ForgotPassword = resolve => require(['views/log/forgotpassword/index.vue'], resolve) // 忘记密码
const RegisterType = resolve => require(['views/log/registertype/index.vue'], resolve) // 注册类型
const Register = resolve => require(['views/log/register/index.vue'], resolve) // 注册
const AddAuth = resolve => require(['views/log/addauth/index.vue'], resolve) // 添加授权
const RegSuccess = resolve => require(['views/log/regsuccess/index.vue'], resolve) // 添加授权


export default [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '登录'
        }
    },
    {
        path: '/gesture',
        name: 'gesture',
        component: Gesturepsw,
        meta: {
            title: '手势密码',
            auth: true
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        meta: {
            title: '身份验证'
        }
    },
    {
        path: '/password',
        name: 'password',
        component: ForgotPassword,
        meta: {
            title: '设置新密码'
        }
    },
    {
        path: '/regType',
        name: 'regType',
        component: RegisterType,
        meta: {
            title: '注册类型'
        }
    },
    {
        path: '/reg',
        name: 'reg',
        component: Register,
        meta: {
            title: '用户注册'
        }
    },
    {
        path: '/addauth',
        name: 'addauth',
        component: AddAuth,
        meta: {
            title: '添加授权'
        }
    },
    {
        path: '/regsuccess',
        name: 'regsuccess',
        component: RegSuccess,
        meta: {
            title: '添加授权'
        }
    }
]