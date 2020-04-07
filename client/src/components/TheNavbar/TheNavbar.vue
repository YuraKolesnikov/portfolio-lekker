<template>
	<nav class="Navbar">
		<a href="/" class="Navbar__logo">
			<img src="static/img/logo.svg" alt="">
		</a>
		<div class="Navbar__main">
			<v-select 
				select-key="language"
				:options="langs"
				@selectOption="chooseLang"
				:select-value="selectValue"
				:computed-height='navbarHeight'></v-select>
			<v-button option="outlined" @click="openModal">Request a callback</v-button>
		</div>
	</nav>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import VSelect from '@/components/base/VSelect/VSelect'
import { EventBus } from '@/utils/EventBus'
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
		},
		openModal() {
			EventBus.$emit('openModal')
		}
	}
}
</script>
<style lang="scss">
@import "./Navbar";
</style>