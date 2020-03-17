import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* Global components */
import VContainer from '@/components/hoc/VContainer'
import VRow from '@/components/hoc/VRow'
import VShadowBox from '@/components/hoc/VShadowBox'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

Vue.component('v-container', VContainer)
Vue.component('v-row', VRow)
Vue.component('v-shadow-box', VShadowBox)
Vue.component('swiper', swiper)
Vue.component('swiperSlide', swiperSlide)

import { GlobalDirectives } from '@/directives/directives';

Vue.use(GlobalDirectives);

import 'swiper/dist/css/swiper.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
