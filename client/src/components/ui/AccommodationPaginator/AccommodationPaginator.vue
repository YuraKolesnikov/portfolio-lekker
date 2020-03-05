<template>
	<div class="AccommodationPaginator">
		<ul class="AccommodationPaginator__paginator">
			<li 
				:key="tab"
				v-for="tab in tabs"
				@click="updateCurrentTab(tab)"
				class="AccommodationPaginator__tab"
				:class="{'AccommodationPaginator__tab--active': currentTab == tab}">
				{{ tab }}
				<svg>
					<use xlink:href="static/icons/icons.svg#star"></use>
				</svg>
			</li>
		</ul>
		<div class="AccommodationPaginator__body">
			<template v-for="page in accomodations">
				<div class="AccommodationPaginator__page" :key="page.id" v-if="page.rating == currentTab">
					<h4 class="AccommodationPaginator__page-title">{{ page.title }}</h4>
					<p class="AccommodationPaginator__page-text">{{ page.description }}</p>
					<img class="AccommodationPaginator__page-img" :src="page.img_path" alt="">
				</div>
			</template>
		</div>
	</div >
</template>
<script>
import VStar from '@/components/base/VStar/VStar'
export default {
	props: {
		currentTab: Number
	},
	data() {
		return {
			tabs: [5, 4, 3],
			accomodations: [
				{ id: 1, rating: 5, title: 'Kameelperd Laagte Zebula', description: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?  Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?', img_path: 'static/img/accomodation.png' },
				{ id: 2, rating: 4, title: 'Kameelperd Laagte Zebula', description: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?  Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?', img_path: 'static/img/accomodation.png' },
				{ id: 3, rating: 3, title: 'Kameelperd Laagte Zebula', description: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?  Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?', img_path: 'static/img/accomodation.png' }
			]
		}
	},
	components: {
		VStar
	},
	methods: {
		updateCurrentTab(id) {
			this.$emit('updateCurrentTab', id)
		}
	}
}
</script>
<style lang="scss">
@import "./AccommodationPaginator";
</style>