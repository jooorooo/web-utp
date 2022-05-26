import { createApp } from 'vue'
import App from './components/App.vue'
//import _ from 'lodash'

//Vue.config.productionTip = false
//Object.defineProperty(Vue.prototype, '_', {value: _});

(function() {
  let vueElement = document.getElementById('app');
  if(!vueElement) {
	  return;
  }
  
  const app = createApp(App)
  app.mount(vueElement)
})()