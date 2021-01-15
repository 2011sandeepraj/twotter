export const LoginModule = {
    namespaced: true,
    state:{
        authenticated :false
    },
    mutations:{
        SET_AUTHENTICATE(state, isAuthenticated){
            state.authenticated = isAuthenticated
            console.log(`setting authentication to ${isAuthenticated}`)
        }
    },
    actions:{
        setAuthenticate({commit}, isAuthenticated ){
            commit('SET_AUTHENTICATE', isAuthenticated) 
        }
    }
}