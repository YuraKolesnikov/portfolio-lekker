<template>
	<div id="app">
		<!-- <Navbar /> -->
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
		<main style="padding-top: 100px">
			<v-container>
				<v-row>
					<div class="col-12">
						<AccomodationPaginator 
							:current-tab="currentTab"
							@updateCurrentTab="updateCurrentTab" />
					</div>
				</v-row>
			</v-container>
			<!-- <HeroStatic /> -->
			<div class="container">
				<router-view />
			</div>
		</main>
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import HeroStatic from '@/components/ui/HeroStatic/HeroStatic'
import Navbar from '@/components/TheNavbar/TheNavbar'
import AccomodationPaginator from '@/components/ui/AccommodationPaginator/AccommodationPaginator'
export default {
	components: {
		VButton,
		HeroStatic,
		Navbar,
		AccomodationPaginator
	},
	data() {
		return {
			currentTab: 5
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