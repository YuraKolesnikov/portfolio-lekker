<template>
	<div class="trips">
		<Hero />
		<section class="search">
			<v-container>
				<v-row>
					<div class="col-12">
						<div class="search-control-wrapper">
							<SearchControl 
							:destination-options="destinations" 
							:duration-options="durations" />
						</div>
					</div>
				</v-row>
			</v-container>
		</section>
		<v-container>
			<v-row>
				<div class="col-12" v-for="trip in trips" :key="trip.id">
					<TripCard :trip="trip" @openTrip="openTrip" />
				</div>
			</v-row>
			<v-row class="pb-5">
				<div class="col-4 offset-4">
					<v-button option="outlined" size="block">Show more</v-button>
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import VButton from '@/components/base/VButton/VButton'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import TripCard from '@/components/ui/TripCard/TripCard'
import { mapState, mapActions } from 'vuex'
export default {
	components: {
		Hero,
		VButton,
		SearchControl,
		TripCard
	},
	data() {
		return {
			destinations: [
				{ id: 'kenya', title: 'Kenya' },
				{ id: 'tanzania', title: 'Tanzania' },
				{ id: 'south_africe', title: 'South Africa' },
				{ id: 'namibia', title: 'Namibia' },
				{ id: 'botwsana', title: 'Botswana' },
				{ id: 'madagascar', title: 'Madagascar' },
				{ id: '', title: 'I don\'t mind' }
			],
			durations: [
				{ id: 1, title: 'up to 5 days' },
				{ id: 2, title: '6-9 days' },
				{ id: 3, title: '10-14 days' },
				{ id: 4, title: 'over 14 days' },
				{ id: '', title: 'I don\'t mind' }
			]
		}
	},
	computed: {
		...mapState(['trips'])
	},
	methods: {
		async openTrip(id) {
			this.$router.push({ name: 'trip-details', params: { id } })
		}
	}
}
</script>
<style lang="scss">
.search-control-wrapper {
	position: relative;
	bottom: 80px;
	z-index: 1;
}
</style>