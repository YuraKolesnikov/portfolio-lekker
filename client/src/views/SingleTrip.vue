<template>
	<div class="main-wrapper">
		<Hero />
		<v-container>
			<div class="search-control-wrapper">
				<SearchControl 
					:destination-options="destinations" 
					:duration-options="durations" />
			</div>
		</v-container>
		<section class="overview">
			<v-container>
				<v-row class="mb-5 align-items-center justify-content-between">
					<div class="col-6">
						<v-title size="lg">Best of South Africa</v-title>
					</div>
					<div class="col-3">
						<div class="stars">
							<v-star class="mr-1" v-for="star in stars" :key="star" :id="star" :current-rating="tripRating" />
						</div>
					</div>
					<div class="col-12">
						<v-shadow-box>
							<OrderSummary class="mt-5" />
						</v-shadow-box>
					</div>
					<div class="col-12 mt-5">
						<p class="faded">Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?</p>
					</div>
				</v-row>
			</v-container>
		</section>
		<section class="itinerary">
			<v-container>
				<v-title size="md" class="mb-4">Higher level initerary</v-title>
				<v-row>
					<div class="col-12" v-for="item in itinerary" :key="item.id">
						<Itinerary :itinerary="item"/>
					</div>
				</v-row>
			</v-container>
		</section>
		<section class="accomodation">
			<v-container>
				<v-title size="lg" class="mb-4">Accomodation</v-title>
				<AccommodationPaginator :current-tab="currentTab" @updateCurrentTab="updateCurrentTab" />
			</v-container>
		</section>
		<v-container>
			<v-row>
				<div class="col-4 offset-4">
					<v-button size="block">Book now</v-button>
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import VTitle from '@/components/base/VTitle/VTitle'
import VButton from '@/components/base/VButton/VButton'
import VStar from '@/components/base/VStar/VStar'
import OrderSummary from '@/components/ui/OrderSummary/OrderSummary'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import Itinerary from '@/components/ui/Itinerary/Itinerary'
import AccommodationPaginator from '@/components/ui/AccommodationPaginator/AccommodationPaginator'
export default {
	components: {
		Hero,
		VTitle,
		VButton,
		VStar,
		SearchControl,
		AccommodationPaginator,
		OrderSummary,
		Itinerary
	},
	data() {
		return {
			currentTab: 5,
			stars: [1, 2, 3, 4, 5],
			tripRating: 3,
			itinerary: [
				{ id: 1, day: 1, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 2, day: 2, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 3, day: 3, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 4, day: 4, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 5, day: 5, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 6, day: 6, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 7, day: 7, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 8, day: 8, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 9, day: 9, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 10, day: 10, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 11, day: 11, text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' }
			],
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
	methods: {
		updateCurrentTab(id) {
			this.currentTab = id
		}
	}
}
</script>
<style lang="scss">
.search-control-wrapper {
	position: relative;
	bottom: 80px;
}

.stars {
	display: flex;
	justify-content: flex-end;
}

.accomodation {
	padding: 60px 0 130px 0;
}
</style>