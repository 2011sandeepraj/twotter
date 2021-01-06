import { createRouter, 
  //createWebHashHistory, 
  createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'
import Admin from '../views/Admin'
//Direct way of accessing the store
import store from '../store'
import {users} from '../assets/users'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true
    }
  }
 
]

const router = createRouter({
  //history: createWebHashHistory(),

  //Using this varation of history to avoid the # sign in the route
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) =>{
  console.log('before each')
  const user = store.state.User.user;
  if(!user){
    //dispatch is the function to run actions
    //In the tutorial it used 'User/setUser' instead 'setUser'
    await store.dispatch('setUser', users[0])
  }
  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  console.log(requiresAdmin, isAdmin)
  if(requiresAdmin && !isAdmin) {
    
    next({name: 'Home'});
  }
  else { 
    next();
  }
})
  

export default router 
