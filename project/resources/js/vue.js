import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'
import masonry from './masonry'
//import mitt from 'mitt'

(function() {
	let vueElement = document.getElementById('app');
	if(!vueElement) {
		return;
	}
  
	//const emitter = mitt()
	const app = createApp(App);
    
	//app.config.globalProperties.emitter = emitter
	
	app.use(router)
	app.use(masonry)
	
	app.mount(vueElement)
})()