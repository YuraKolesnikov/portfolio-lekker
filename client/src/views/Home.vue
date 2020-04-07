<template>
	<div class="home">
		<Hero />
		<section class="destinations">
			<v-container>
				<DestinationsSelector :options="destinations" />
				<v-row>
					<div class="col-12">
						<div class="search-control-wrapper">
							<SearchControl 
								@searchTrip="searchTrip"
								:destination-options="searchControls.destinations" 
								:duration-options="searchControls.durations" />
						</div>
					</div>
				</v-row>
			</v-container>
		</section>
		<section class="bestsellers">
			<v-container>
				<v-title size="md" class="mb-5">Or pick one of our bestsellers</v-title>
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="card in bestSellers" :key="`bestseller_${card.id}`">
						<best-seller-card :card="card" />
					</swiper-slide>
				</swiper>
			</v-container>
		</section>
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
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import DestinationsSelector from '@/components/ui/DestinationsSelector/DestinationsSelector'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import VTitle from '@/components/base/VTitle/VTitle'
import VLabel from '@/components/base/VLabel/VLabel'
import VButton from '@/components/base/VButton/VButton'
import VInputText from '@/components/base/VInputText/VInputText'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
import Modal from '@/components/ui/Modal/Modal'
import { mapActions, mapState, mapMutations } from 'vuex'
import { EventBus } from '@/utils/EventBus'
export default {
	components: {
		Hero,
		Modal,
		DestinationsSelector,
		SearchControl,
		VTitle,
		VLabel,
		VButton,
		VInputText,
		BestSellerCard
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				loop: true,
				pagination: {
          el: '.swiper-pagination'
        },
				autoplay: {
					delay: 5000
				}
			},
			phone_number: '',
			isCallbackModalOpen: false
		}
	},
	mounted() {
		EventBus.$on('openModal', this.openModal);
	},
	beforeDestroy() {
		EventBus.$off('openModal');
	},
	computed: {
		...mapState(['destinations', 'searchControls', 'bestSellers'])
	},
	methods: {
		...mapActions(['GET_TRIPS']),
		async searchTrip(payload) {
			this.GET_TRIPS(payload)
			this.$router.replace({ path: '/trips' })
		},
		updatePhoneNumber(e) {
			this.phone_number = e.target.value
		},
		requestCallback() {
			this.closeModal()
			/* TODO: Make a request for callback */
			console.log({ phone_number: this.phone_number })
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
<style lang="scss" scoped>
.destinations {
	padding: 100px 0 0 0;
}
.bestsellers {
	padding: 200px 0 100px 0;
	background-color: $extra-light-gray;
}
.search-control-wrapper {
	position: relative;
	top: 80px;
}

</style>