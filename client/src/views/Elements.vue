<template>
	<v-row>
		<SearchControl 
			:destination-options="destinations"
			:duration-options="durations" />
		<!-- <TripCard v-for="trip in trips" :key="trip.id" :trip="trip" /> -->
		<!-- <div class="col-6" v-for="card in cards" :key="card.id">
			<BestSellerCard :card="card" />
		</div> -->
		<!-- <Itinerary v-for="item in itinerary" :key="item.day" :itinerary="item" /> -->
		<Accordion />
	</v-row>
</template>
<script>
import Itinerary from '@/components/ui/Itinerary/Itinerary'
import Accordion from '@/components/ui/Accordion/Accordion'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import TripCard from '@/components/ui/TripCard/TripCard'
export default {
	components: {
		Itinerary,
		Accordion,
		BestSellerCard,
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
				{ id: 'madagascar', title: 'Madagascar' }
			],
			durations: [
				{ id: 1, title: 'up to 5 days' },
				{ id: 2, title: '6-9 days' },
				{ id: 3, title: '10-14 days' },
				{ id: 4, title: 'over 14 days' }
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
			],
			cards: [
				{
					id: 1,
					title: 'Best of South Africa',
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
				},
				{
					id: 2,
					title: 'Best of Namibia',
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean? Or 15,000m2 of rolling savannah in the Serengeti.',
					img_url: 'https://images.unsplash.com/photo-1521731142447-f70597562b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
				},
			],
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
			]
		}
	}
}
</script>