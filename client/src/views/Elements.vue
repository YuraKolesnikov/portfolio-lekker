<template>
	<v-row>
		
		<!-- 
		
		<div class="col-6" v-for="card in cards" :key="card.id">
			<BestSellerCard :card="card" />
		</div>
		<Itinerary v-for="item in itinerary" :key="item.day" :itinerary="item" /> -->
		<!-- <Accordion />
		<div class="col-12 d-flex align-items-center justify-content-between py-5">
			<v-title size="lg">Total Cost</v-title>
			<span style="font-size: 48px; line-height: 56px;">$ 1450</span>
		</div>
		<div class="col-12">
			<v-title size="md" class="mb-5">Best of South Africa</v-title>
		</div>
		<OrderSummary /> -->
	</v-row>
</template>
<script>
import Itinerary from '@/components/ui/Itinerary/Itinerary'
import Accordion from '@/components/ui/Accordion/Accordion'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'

import TripCard from '@/components/ui/TripCard/TripCard'
import VTitle from '@/components/base/VTitle/VTitle'
import OrderSummary from '@/components/ui/OrderSummary/OrderSummary'
import DestinationsSelector from '@/components/ui/DestinationsSelector/DestinationsSelector'
export default {
	components: {
		Itinerary,
		Accordion,
		BestSellerCard,
		SearchControl,
		TripCard,
		VTitle,
		OrderSummary,
		DestinationsSelector
	},
	data() {
		return {
			
			
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
			]
		}
	}
}
</script>