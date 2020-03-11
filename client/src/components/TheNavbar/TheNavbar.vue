<template>
	<nav class="Navbar">
		<div class="Navbar__logo">
			<img src="static/img/logo.svg" alt="">
		</div>
		<div style="display: flex; align-items: center; justify-content: space-between; width: 700px">
			<router-link to="/">Home</router-link>
			<router-link to="/trips">Trips</router-link>
			<router-link to="/single-trip">Single trip</router-link>
			<router-link to="/checkout">Checkout</router-link>
		</div>
		<div class="Navbar__main">
			<!-- <v-select 
				:options="langs"
				@selectOption="chooseLang"
				:select-value="selectValue"
				:computed-height='navbarHeight'></v-select> -->
			<v-button option="outlined">Request a callback</v-button>
		</div>
	</nav>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import VSelect from '@/components/base/VSelect/VSelect'
export default {
	components: {
		VButton,
		VSelect
	},
	data() {
		return {
			langs: [
				{ id: 'en', title: 'EN' },
				{ id: 'ru', title: 'RU' }
			],
			selectValue: 'EN',
			chosenLang: 'en'
		}
	},
	computed: {
		navbarHeight() {
			return 70
		}
	},
	methods: {
		chooseLang(res) {
			this.selectValue = res.option.title
			this.chosenLang = res.option.id
		}
	}
}
</script>
<style lang="scss">
@import "./Navbar";
</style>