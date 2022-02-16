import { createRouter, createWebHashHistory } from 'vue-router'
import studentForm from "../components/students/students-form.vue";
import viewAllStudents from "../components/students/students-view-all.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: studentForm
  },
  {
    path: '/student/:id',
    name: 'update-student',
    component: studentForm
  },
  {
    path: '/students',
    name: 'students',
    component: viewAllStudents
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
