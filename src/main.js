import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
//import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/themes/md-light-indigo/theme.css' //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService  from 'primevue/toastservice'

const app = createApp(App).use(store).use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('InputText', InputText)
app.component('Button', Button)
app.component('Toast',Toast)

app.mount('#app')
