import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectList from '../views/ProjectList.vue';
import TaskList from '../views/TaskList.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/projects', name: 'projects', component: ProjectList },
  { path: '/projects/:id/tasks', name: 'tasks', component: TaskList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
