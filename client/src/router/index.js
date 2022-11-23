import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import DocumentsView from '../views/DocumentsView.vue'
import LoginView from '../views/LoginView.vue'
import NewsView from '../views/NewsView.vue'
import OrganizationsView from '../views/OrganizationsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/documents',
    name: 'documents',
    component: DocumentsView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/organizations',
    name: 'organizations',
    component: OrganizationsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
