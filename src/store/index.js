import { createStore } from 'vuex';
//import {UserModule} from './User.js'

export default createStore({
     state: {
        user:null
      },
    
      //Functions that affect the state
      mutations: {
        SET_USER(state,user){
          state.user = user;
        }
    
      },
    
      //Functions you call throughout application that call mutation
      actions: {
        setUser({commit}, user){
          commit('SET_USER', user);
        }
    
      } 
    //,
    //
    // modules: {
    //   User: UserModule  
    // }
})
