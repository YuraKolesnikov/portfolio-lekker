<template>
	<!-- :href="`/trips/${card.id}`" -->
	<div class="BestSellerCard" @click="openTrip($event, card.trip_id)">
		<img class="BestSellerCard__img" :src="card.img_path" />
		<div class="BestSellerCard__body">
			<h4 class="BestSellerCard__title">{{ card.title }}</h4>
			<p class="BestSellerCard__caption">{{ card.caption }}</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		card: Object
	},
	methods: {
		openTrip(e, id) {
			e.preventDefault()
			this.$router.push({ name: 'trip-details', params: { id } })
		}
	}
}
</script>
<style lang="scss">
@import "./BestSellerCard";
</style>