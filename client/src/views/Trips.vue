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
					<TripCard :trip="trip" />
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import TripCard from '@/components/ui/TripCard/TripCard'
export default {
	components: {
		Hero,
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
			],
			trips: [
				{
					id: 1,
					title: 'Best of South Africa',
					desc: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/trip-card-img.png',
					locations: ['Tsitsikamma', 'Cape Town', 'Johannesburg', 'Garden Route'],
					duration: 9,
					price: 980
				},
				{
					id: 2,
					title: 'Best of Kenya',
					desc: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/kenya.png',
					locations: ['Maasai Mara', 'Amboseli', 'Chyulu Hills', 'Laikipia'],
					duration: 12,
					price: 1200
				}
			]
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