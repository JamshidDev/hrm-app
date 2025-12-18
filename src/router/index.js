import { createRouter, createWebHistory } from 'vue-router'
import {appPaths, appSetting} from '@/utils/index.js'
import {LoginScreenPage, ProfileScreenPage, WalletScreenPage, ServiceScreenPage} from '@/pages/index.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      redirect:appPaths.profile,
      children:[
        {
          path:appPaths.profile,
          name:appPaths.profile.substring(1),
          component:() => import('@/pages/profileScreen/page.vue'),
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.wallet,
          name:appPaths.wallet.substring(1),
          component:() => import('@/pages/walletScreen/page.vue'),
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.service,
          name:appPaths.service.substring(1),
          component:() => import('@/pages/serviceScreen/page.vue'),
          meta:{
            layout:appSetting.mainLayout
          },
        }
      ],
      meta:{
        layout:appSetting.mainLayout
      },

    },
    {
      path:appPaths.login,
      name:appPaths.login.substring(1),
      component:() => import('@/pages/login/page.vue'),
      meta:{
        layout:appSetting.emptyLayout
      },
    },
  ],
})

export default router
