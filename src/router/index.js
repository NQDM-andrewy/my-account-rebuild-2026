import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/user/account/account-details/'
  },
  {
    path: '/user/',
    redirect: '/user/account/account-details/'
  },
  {
    path: '/user/account/',
    redirect: '/user/account/account-details/'
  },
  {
    path: '/user/account/account-details/',
    name: 'AccountDetails',
    component: () => import('../tabs/AccountDetails.vue')
  },
  {
    path: '/user/account/login-details/',
    name: 'LoginDetails',
    component: () => import('../tabs/LoginDetails.vue')
  },
  {
    path: '/user/account/social/',
    name: 'SocialAccounts',
    component: () => import('../tabs/SocialAccounts.vue')
  },
  {
    path: '/user/account/subscriptions/',
    name: 'Subscriptions',
    component: () => import('../tabs/Subscriptions.vue')
  },
  {
    path: '/user/account/newsletters/',
    name: 'Newsletters',
    component: () => import('../tabs/Newsletters.vue')
  },
  {
    path: '/user/account/commenting/',
    name: 'CommentingAlias',
    component: () => import('../tabs/CommentingAlias.vue')
  },
  {
    path: '/user/account/marketing-preferences/',
    name: 'MarketingPreferences',
    component: () => import('../tabs/MarketingPreferences.vue')
  },
  {
    path: '/user/account/ccn/',
    name: 'CommunityContentNetwork',
    component: () => import('../tabs/CommunityContentNetwork.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router