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
		currentTab: Number,
		accomodations: Array
	},
	data() {
		return {
			tabs: [5, 4, 3]
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