import { createApp } from 'vue'
import App from './components/App.vue'
import router from './router'

(function() {
	let vueElement = document.getElementById('app');
	if(!vueElement) {
		return;
	}
  
	const app = createApp(App);
    
	app.use(router)
	
	app.mount(vueElement)
})()