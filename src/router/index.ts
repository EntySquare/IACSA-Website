// 管理路由
import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
NProgress.configure({ showSpinner: false })
// 导入 layout
import layout from '@/views/layout/index.vue'
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
        { path: '/test', component: () => import('@/views/test/index.vue') },
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
    }
  ]
})

// 在路由切换前显示进度条
router.beforeEach((to, from, next) => {
  NProgress.start() //进度条开始
  next()
})

// 在路由切换后结束进度条
router.afterEach(() => {
  NProgress.done() //进度条结束
})

// 暴露路由对象
export default router
