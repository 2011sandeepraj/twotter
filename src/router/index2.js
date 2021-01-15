import { createRouter, 
  //createWebHashHistory, 
  createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserProfile from '../views/UserProfile'
import Login from '../views/Login'
import Admin from '../views/Admin'
//Direct way of accessing the store
import store from '../store'
import {users} from '../assets/users'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,    
    meta: {
      requiresAuthenticated: true
    }

  },
  { 
    path: '/login',
    name: 'Login',
    component: Login,
    
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: UserProfile,
    meta: {
      requiresAuthenticated: true
    }
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requiresAdmin: true,
      requiresAuthenticated: true
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
  const requiresAuthenticated = to.matched.some(record => record.meta.requiresAuthenticated);
  let isAuthenticated = store.state.Login.authenticated
    
  console.log('Authentication Requires', requiresAuthenticated, isAuthenticated)

  console.log('Admin Requires', requiresAdmin, isAdmin)
  if(requiresAuthenticated  && !isAuthenticated){
    next({name: 'Login'})
  } else if(requiresAdmin && !isAdmin ) {    
    next({name: 'Home'});
  } else { 
    next();
  }
})
  

export default router 
