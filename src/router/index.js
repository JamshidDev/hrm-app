import { createRouter, createWebHistory } from 'vue-router'
import {appPaths, appSetting} from '@/utils/index.js'
import {LoginScreenPage, ProfileScreenPage, WalletScreenPage, ServiceScreenPage} from '@/pages/index.js'

const profilePage  = () => import('@/pages/profile/page.vue')
const comingSoonPage  = () => import('@/pages/comingSoon/page.vue')
const careerPage  = () => import("@/pages/career/page.vue")
const loginPage  = () => import("@/pages/login/page.vue")


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
          component:profilePage,
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.setting,
          name:appPaths.setting.substring(1),
          component:comingSoonPage,
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.main,
          name:appPaths.main.substring(1),
          component:comingSoonPage,
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.application,
          name:appPaths.application.substring(1),
          component:comingSoonPage,
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.document,
          name:appPaths.document.substring(1),
          component:comingSoonPage,
          meta:{
            layout:appSetting.mainLayout
          },
        },
        {
          path:appPaths.career,
          name:appPaths.career.substring(1),
          component:careerPage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
      ],
      meta:{
        layout:appSetting.mainLayout
      },

    },
    {
      path:appPaths.login,
      name:appPaths.login.substring(1),
      component:loginPage,
      meta:{
        layout:appSetting.emptyLayout
      },
    },
  ],
})

export default router
