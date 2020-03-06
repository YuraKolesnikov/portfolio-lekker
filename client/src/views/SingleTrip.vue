<template>
	<v-container>
		<v-row>
			<OrderSummary />
		</v-row>
		<v-row>
			<div class="col-12" v-for="item in itinerary" :key="item.id">
				<Itinerary :itinerary="item"/>
			</div>
		</v-row>
		<v-row>
			<AccommodationPaginator :current-tab="currentTab" @updateCurrentTab="updateCurrentTab" />
		</v-row>
	</v-container>
</template>
<script>
import OrderSummary from '@/components/ui/OrderSummary/OrderSummary'
import Itinerary from '@/components/ui/Itinerary/Itinerary'
import AccommodationPaginator from '@/components/ui/AccommodationPaginator/AccommodationPaginator'
export default {
	components: {
		AccommodationPaginator,
		OrderSummary,
		Itinerary
	},
	data() {
		return {
			currentTab: 5,
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
	},
	methods: {
		updateCurrentTab(id) {
			this.currentTab = id
		}
	}
}
</script>