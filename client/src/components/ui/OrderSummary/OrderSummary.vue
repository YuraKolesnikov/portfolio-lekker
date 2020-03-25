<template>
	<div class="OrderSummary">
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">{{ overview.arrival_date }}</h5>
			<p class="OrderSummary__name">Arrival date</p>
		</div>
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">{{ overview.return_date }}</h5>
			<p class="OrderSummary__name">Return date</p>
		</div>
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">{{ overview.passengers }}</h5>
			<p class="OrderSummary__name">Passengers</p>
		</div>
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">{{ overview.days }}</h5>
			<p class="OrderSummary__name">Days</p>
		</div>
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">{{ overview.accomodation_rating }} star</h5>
			<p class="OrderSummary__name">Rating</p>
		</div>
		<div class="OrderSummary__item">
			<h5 class="OrderSummary__title">$ {{ overview.price_per_person }}</h5>
			<p class="OrderSummary__name">Price (per person)</p>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		overview: Object
	}
}
</script>
<style lang="scss">
@import "./OrderSummary";
</style>