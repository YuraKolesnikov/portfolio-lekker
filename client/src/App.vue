<template>
	<div id="app">
		<Navbar />
		<main>
			<router-view />
		</main>
		<Footer />
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import HeroStatic from '@/components/ui/HeroStatic/HeroStatic'
import Navbar from '@/components/TheNavbar/TheNavbar'
import Footer from '@/components/TheFooter/TheFooter'
import AccomodationPaginator from '@/components/ui/AccommodationPaginator/AccommodationPaginator'
import { mapActions } from 'vuex'
export default {
	components: {
		VButton,
		HeroStatic,
		Navbar,
		Footer,
		AccomodationPaginator
	},
	async created() {
		await this.GET_DESTINATIONS()
		await this.GET_SEARCH_CONTROLS()
		await this.GET_BEST_SELLERS()
	},
	methods: {
		updateCurrentTab(id) {
			this.currentTab = id
		},
		...mapActions(['GET_DESTINATIONS', 'GET_SEARCH_CONTROLS', 'GET_BEST_SELLERS'])
	}
}
</script>
<style lang="scss">
#app {
	display: flex;
	flex-flow: column;
}
main {
	padding-top: 100px;
	flex-grow: 1;
	min-height: 100vh;
}
</style>