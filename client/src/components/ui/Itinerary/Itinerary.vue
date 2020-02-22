<template>
	<div class="Itinerary">
		<div class="Itinerary__day">Day {{ itinerary.day }}</div>
		<p class="Itinerary__text">{{ itinerary.text }}</p>
	</div>
</template>
<script>
export default {
	props: {
		itinerary: Object
	}
}
</script>
<style lang="scss">
@import "./Itinerary";
</style>