<template>
	<nav class="Navbar">
		<a href="/" class="Navbar__logo">
			<img src="static/img/logo.svg" alt="">
		</a>
		<div class="Navbar__main">
			<v-button option="outlined" @click="openModal">Request a callback</v-button>
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
	methods: {
		openModal() {
			this.$emit('openModal')
		}
	}
}
</script>
<style lang="scss">
@import "./Navbar";
</style>