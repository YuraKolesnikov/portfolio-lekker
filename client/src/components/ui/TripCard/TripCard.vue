<template>
	<div class="TripCard">
		<div class="col-6">
			<div class="TripCard__img">
				<img :src="trip.img_path" alt="">
			</div>
		</div>
		<div class="col-6">
			<div class="TripCard__body">
				<h3 class="TripCard__title">{{ trip.title }}</h3>
				<ul class="TripCard__locations">
					<li v-for="highlight in trip.highlights" :key="highlight">
						{{ highlight }}
					</li>
				</ul>
				<p class="TripCard__desc">{{ trip.caption }}</p>
				<div class="TripCard__info">
					<span class="TripCard__duration">{{ trip.duration }} days</span>
					<span class="TripCard__price">from $ {{ trip.price }} <span class="faded"> (per person)</span></span>
				</div>
				<v-button @click="$emit('openTrip', trip.trip_id)" option="outlined">View details</v-button>
			</div>
		</div>
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import VRouterLink from '@/components/base/VRouterLink/VRouterLink'
export default {
	props: {
		trip: { type: Object }
	},
	components: {
		VButton,
		VRouterLink
	}
}
</script>
<style lang="scss">
@import "./TripCard";
</style>