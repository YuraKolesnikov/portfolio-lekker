import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Global components */
import VContainer from '@/components/hoc/VContainer'
import VRow from '@/components/hoc/VRow'
import VShadowBox from '@/components/hoc/VShadowBox'

Vue.component('v-container', VContainer)
Vue.component('v-row', VRow)
Vue.component('v-shadow-box', VShadowBox)

import { GlobalDirectives } from '@/directives/directives';

Vue.use(GlobalDirectives);

import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
