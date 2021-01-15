import { createStore } from 'vuex';
import {UserModule} from './User.js'
import {LoginModule} from './Login.js'
export default createStore({
     state: {

      },
    
      //Functions that affect the state
      mutations: {
    
      },
    
      //Functions you call throughout application that call mutation
      actions: {
    
      },
    
      modules: {
        User: UserModule, 
        Login:LoginModule 
      }
})
