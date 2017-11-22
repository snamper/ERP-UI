const CashCheck = resolve => require(['views/wallet/cashCheck/index.vue'], resolve) // 提现审核
const Commission = resolve => require(['views/wallet/commission/index.vue'], resolve) // 佣金
const ReturnCommissionDetail = resolve => require(['views/wallet/returnCommissionDetail/index.vue'], resolve) // 待返佣金明细
const PayCommissionDetail = resolve => require(['views/wallet/payCommissionDetail/index.vue'], resolve) // 待付佣金明细
const WithdrawCash = resolve => require(['views/wallet/withdrawCash/index.vue'], resolve) // 提现
const CashRegister = resolve => require(['views/wallet/cashRegister/index.vue'], resolve) // 提现记录
const InvitationLink = resolve => require(['views/wallet/invitationLink/index.vue'], resolve) // 邀请链接


const Balance = resolve => require(['views/wallet/balance/index.vue'], resolve) // 余额
const MyRecharge = resolve => require(['views/wallet/myRecharge/index.vue'], resolve) // 我要充值
const RechargeInfo = resolve => require(['views/wallet/rechargeInfo/index.vue'], resolve) // 充值记录
const RechargeCheck = resolve => require(['views/wallet/rechargeCheck/index.vue'], resolve) // 充值审核

export default [
    {
        path: '/cashCheck',
        name: 'cashCheck',
        component: CashCheck,
        meta: {
            title: '审核提现',
            auth: true
        }
    },
    {
        path: '/commission',
        name: 'commission',
        component: Commission,
        meta: {
            title: '佣金',
            auth: true
        }
    },
    {
        path: '/returnCommissionDetail',
        name: 'returnCommissionDetail',
        component: ReturnCommissionDetail,
        meta: {
            title: '待返佣金',
            auth: true
        }
    },
    {
        path: '/payCommissionDetail',
        name: 'payCommissionDetail',
        component: PayCommissionDetail,
        meta: {
            title: '待付佣金',
            auth: true
        }
    },
    {
        path: '/withdrawCash',
        name: 'withdrawCash',
        component: WithdrawCash,
        meta: {
            title: '我要提现',
            auth: true
        }
    },
    {
        path: '/cashRegister',
        name: 'cashRegister',
        component: CashRegister,
        meta: {
            title: '提现记录',
            auth: true
        }
    },
    {
        path: '/invitationLink',
        name: 'invitationLink',
        component: InvitationLink,
        meta: {
            title: '邀请链接',
            auth: true
        }
    },
    {
        path: '/balance',
        name: 'balance',
        component: Balance,
        meta: {
            title: '余额',
            auth: true
        }
    },
    {
        path: '/myRecharge',
        name: 'myRecharge',
        component: MyRecharge,
        meta: {
            title: '我要充值',
            auth: true
        }
    },
    {
        path: '/rechargeInfo',
        name: 'rechargeInfo',
        component: RechargeInfo,
        meta: {
            title: '充值记录',
            auth: true
        }
    },
    {
        path: '/rechargeCheck',
        name: 'rechargeCheck',
        component: RechargeCheck,
        meta: {
            title: '充值审核',
            auth: true
        }
    },     
]