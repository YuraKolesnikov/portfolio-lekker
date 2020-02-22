<template>
	<div class="TripCard">
		<div class="col-6">
			<div class="TripCard__img">
				<img :src="trip.img_url" alt="">
			</div>
		</div>
		<div class="col-6">
			<div class="TripCard__body">
				<h3 class="TripCard__title">{{ trip.title }}</h3>
				<ul class="TripCard__locations">
					<li v-for="location in trip.locations" :key="location">
						{{ location }}
					</li>
				</ul>
				<p class="TripCard__desc">{{ trip.desc }}</p>
				<div class="TripCard__info">
					<span class="TripCard__duration">{{ trip.duration }} days</span>
					<span class="TripCard__price">from $ {{ trip.price }} <span class="faded"> (per person)</span></span>
				</div>
				<v-router-link location="/" option="outlined">
					View details
				</v-router-link>
			</div>
		</div>
	</div>
</template>
<script>
import VRouterLink from '@/components/base/VRouterLink/VRouterLink'
export default {
	props: {
		trip: { type: Object }
	},
	components: {
		VRouterLink
	}
}
</script>
<style lang="scss">
@import "./TripCard";
</style>