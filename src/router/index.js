import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import NewEvent from '../components/NewEvent.vue'
import ViewEvent from '../components/ViewEvent.vue'
import EditEvent from '../components/EditEvent.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/new-event',
    name: 'new-event',
    component: NewEvent
  },
  {
    path: '/view-event/:event_id',
    name: 'view-event',
    component: ViewEvent
  },
  {
    path: '/edit-event/:event_id',
    name: 'edit-event',
    component: EditEvent
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
