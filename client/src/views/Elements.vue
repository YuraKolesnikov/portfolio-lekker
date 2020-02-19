<template>
	<v-row>
		<div class="col-6" v-for="card in cards" :key="card.id">
			<BestSellerCard :card="card" />
		</div>
	</v-row>
</template>
<script>
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
export default {
	components: {
		BestSellerCard
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