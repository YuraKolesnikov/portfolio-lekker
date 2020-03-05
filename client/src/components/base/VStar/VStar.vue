<template>
	<div class="Star">
		<label :for="id">
			<svg class="Star__icon" :class="{'Star__icon--active': id <= currentRating}">
				<use xlink:href="static/icons.svg#star"></use>
			</svg>
		</label>
		<input type="radio" class="Star__input" :id="id" name="stars" @change="$emit('change', $event)">
	</div>
</template>
<script>
export default {
	props: {
		id: Number,
		currentRating: Number
	}
}
</script>
<style lang="scss">
@import "./Star";
</style>