<template>
	<!-- :href="`/trips/${card.id}`" -->
	<a class="BestSellerCard" href="/trip-details">
		<img class="BestSellerCard__img" :src="card.img_url" />
		<div class="BestSellerCard__body">
			<h4 class="BestSellerCard__title">{{ card.title }}</h4>
			<p class="BestSellerCard__caption">{{ card.disclaimer }}</p>
		</div>
	</a>
</template>
<script>
export default {
	props: {
		card: Object
	}
}
</script>
<style lang="scss">
@import "./BestSellerCard";
</style>