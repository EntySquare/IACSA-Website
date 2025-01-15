// 管理路由
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import Utils from '@/utils'
import 'nprogress/nprogress.css' // progress bar style
import useStore from '@/store'
import { storeToRefs } from 'pinia'
NProgress.configure({ showSpinner: false })
// 导入 layout
import layout from '@/views/layout/index.vue'
import en from '@/views/en/index.vue'
import host from '@/views/host/index.vue'
let router = createRouter({
  // 设置路由模式
  history: createWebHistory(),
  // 设置路由对象
  routes: [
    {
      path: '/',
      component: layout,
      children: [
        { path: '', component: () => import('@/views/home/index.vue') },
        {
          path: '/sign-in',
          component: () => import('@/views/login/index.vue')
        },
        {
          path: '/sign-up',
          children: [
            { path: '', component: () => import('@/views/login/signup.vue') },
            {
              path: 'continue',
              children: [
                {
                  path: '',
                  component: () => import('@/views/login/continue.vue')
                },
                {
                  path: 'verify-email-address',
                  component: () =>
                    import('@/views/login/verifyEmailAddress.vue')
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: '/en/',
      component: en,
      redirect: '/en/campaigns',
      children: [
        {
          path: 'campaigns',
          component: () => import('@/views/campaigns/index.vue')
        },
        {
          path: 'projects',
          component: () => import('@/views/projects/index.vue')
        },
        {
          path: 'settings',
          redirect: '/en/settings/basic',
          component: () => import('@/views/mine/index.vue'),
          children: [
            {
              path: 'basic',
              component: () => import('@/views/mine/basic.vue')
            },
            {
              path: 'extra',
              component: () => import('@/views/mine/extra.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/host',
      component: host,
      children: [
        { path: '', component: () => import('@/views/host/summary.vue') },
        {
          path: 'compaigns',
          component: () => import('@/views/host/compaigns.vue')
        }
      ]
    }
  ]
})

// const whiteData = [
//   '/',
//   '/sign-up',
//   '/sign-in',
//   '/sign-up/continue',
//   '/sign-up/continue/verify-email-address'
// ]
// 在路由切换前显示进度条
router.beforeEach((to, from, next) => {
  const { user } = useStore()
  const { is_login } = storeToRefs(user)
  is_login.value = Utils.tokenFn.tokenIsExpired()
  NProgress.start() //进度条开始
  // const show = whiteData.findIndex(i => i == to.path)
  // if (whiteData.findIndex(i => i == to.path) == -1) {
  //   if (!is_login.value) {
  //     router.push('/sign-in')
  //   }
  // }
  next()
})

// 在路由切换后结束进度条
router.afterEach(() => {
  NProgress.done() //进度条结束
})

// 暴露路由对象
export default router
