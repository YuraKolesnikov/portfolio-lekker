<template>
	<div class="DestinationsSelector">
		<v-container>
			<v-title size="md">Destinations</v-title>
			<v-row>
				<div class="col-5">
					<Accordion :options="options" />
				</div>
				<div class="col-6 offset-1 mt-4">
					<img src="static/img/kenya.png" alt="" style="height: 600px">
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import VTitle from '@/components/base/VTitle/VTitle'
import Accordion from '@/components/ui/Accordion/Accordion'
export default {
	components: {
		VTitle,
		Accordion
	},
	data() {
		return {
			options: [
				{ id: 1, title: 'Kenya', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 2, title: 'Tanzania', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 3, title: 'South Africa', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 4, title: 'Namibia', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 5, title: 'Botswana', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 6, title: 'Madagascar', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' }
			]
		}
	}
}
</script>