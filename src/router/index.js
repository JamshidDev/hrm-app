import { createRouter, createWebHistory } from 'vue-router'
import {appPaths, appSetting} from '@/utils/index.js'

const profilePage  = () => import('@/pages/profile/page.vue')
const comingSoonPage  = () => import('@/pages/comingSoon/page.vue')
const careerPage  = () => import("@/pages/career/page.vue")
const personalPage  = () => import("@/pages/personalInfo/page.vue")
const medPage  = () => import("@/pages/personal/med/page.vue")
const vacationPage  = () => import("@/pages/personal/vacation/page.vue")
const incentivePage  = () => import("@/pages/personal/incentive/page.vue")
const punishmentPage  = () => import("@/pages/personal/punishment/page.vue")
const loginPage  = () => import("@/pages/login/page.vue")


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      redirect:appPaths.profile,
      meta:{
        layout:appSetting.mainLayout
      },
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
        {
          path:appPaths.personal,
          name:appPaths.personal.substring(1),
          component:personalPage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
        {
          path:appPaths.med,
          name:appPaths.med.substring(1),
          component:medPage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
        {
          path:appPaths.vacation,
          name:appPaths.vacation.substring(1),
          component:vacationPage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
        {
          path:appPaths.incentive,
          name:appPaths.incentive.substring(1),
          component:incentivePage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
        {
          path:appPaths.punishment,
          name:appPaths.punishment.substring(1),
          component:punishmentPage,
          meta:{
            layout:appSetting.tabLayout
          },
        },
      ],


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
