import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './routers/index'
import { key, store } from './store'

import 'element-plus/lib/theme-chalk/index.css'
import './style/basic.less'


createApp(App)
  .use(router)
  .use(store, key)
  .use(ElementPlus)
  .mount('#app')

