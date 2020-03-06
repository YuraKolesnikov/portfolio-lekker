<template>
	<div id="app">
		<Navbar />
		<!-- <nav style="display: flex; width: 100%; justify-content: center">
			<router-link to="/buttons">
				<v-button option="filled">Buttons</v-button>
			</router-link>
			<router-link to="/inputs">
				<v-button option="filled">Input</v-button>
			</router-link>
			<router-link to="/typography">
				<v-button option="filled">Typography</v-button>
			</router-link>
			<router-link to="/elements">
				<v-button option="filled">Elements</v-button>
			</router-link>
		</nav> -->
		<main>
			<!-- <v-container>
				<v-row>
					<div class="col-12">
						<AccomodationPaginator 
							:current-tab="currentTab"
							 />
					</div>
				</v-row>
			</v-container> -->
			<!-- <HeroStatic /> -->
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
export default {
	components: {
		VButton,
		HeroStatic,
		Navbar,
		Footer,
		AccomodationPaginator
	},
	data() {
		return {
			
		}
	},
	methods: {
		updateCurrentTab(id) {
			console.log('updateCurrentTab catched!')
			this.currentTab = id
		}
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