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
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import DestinationsSelector from '@/components/ui/DestinationsSelector/DestinationsSelector'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import VTitle from '@/components/base/VTitle/VTitle'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
	components: {
		Hero,
		DestinationsSelector,
		SearchControl,
		VTitle,
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
			}
		}
	},
	computed: {
		...mapState(['destinations', 'searchControls', 'bestSellers'])
	},
	methods: {
		...mapActions(['GET_TRIPS']),
		async searchTrip(payload) {
			this.GET_TRIPS(payload)
			this.$router.replace({ path: '/trips' })
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