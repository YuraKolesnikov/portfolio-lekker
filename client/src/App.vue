<template>
	<div id="app">
		<Navbar @openModal="openModal" />
		<main>
			<router-view />
		</main>
		<Modal :is-modal-open="isCallbackModalOpen" @closeModal="closeModal">
			<v-row class="no-gutter align-items-end">
				<div class="col-8">
					<v-label label="Phone number" for="phone" :isRequired="true" />
					<v-input-text id="phone" @input="updatePhoneNumber" />
				</div>
				<div class="col-4">
					<v-button @click="requestCallback">Send</v-button>
				</div>
			</v-row>
		</Modal>
		<Footer />
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import HeroStatic from '@/components/ui/HeroStatic/HeroStatic'
import Navbar from '@/components/TheNavbar/TheNavbar'
import Footer from '@/components/TheFooter/TheFooter'
import Modal from '@/components/ui/Modal/Modal'
import VLabel from '@/components/base/VLabel/VLabel'
import VInputText from '@/components/base/VInputText/VInputText'
import AccomodationPaginator from '@/components/ui/AccommodationPaginator/AccommodationPaginator'
import { mapActions } from 'vuex'
export default {
	components: {
		VButton,
		HeroStatic,
		Navbar,
		VLabel,
		Footer,
		Modal,
		VInputText,
		AccomodationPaginator
	},
	data() {
		return {
			phone_number: '',
			isCallbackModalOpen: false
		}
	},
	async created() {
		await this.GET_DESTINATIONS()
		await this.GET_SEARCH_CONTROLS()
		await this.GET_BEST_SELLERS()
	},
	methods: {
		...mapActions(['GET_DESTINATIONS', 'GET_SEARCH_CONTROLS', 'GET_BEST_SELLERS']),
		updateCurrentTab(id) {
			this.currentTab = id
		},
		updatePhoneNumber(e) {
			this.phone_number = e.target.value
		},
		requestCallback() {
			this.phone_number = ''
			/* TODO: Make a request for callback */
			console.log({ phone_number: this.phone_number })
			this.closeModal()
		},
		openModal() {
			this.isCallbackModalOpen = true
		},
		closeModal() {
			this.isCallbackModalOpen = false
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