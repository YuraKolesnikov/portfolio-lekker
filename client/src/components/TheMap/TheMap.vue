<template>
	<div class="Map">
		<div class="Map__img">
			<img src="static/img/map.jpg" alt="">
		</div>
		<div 
			class="Map__checkpoint" 
			v-for="(checkpoint, i) in checkpoints" 
			:key="`checkpoint_${checkpoint.id}`"
			:style="`top: ${checkpoint.coordinates.top}px; left: ${checkpoint.coordinates.left}px`">
			<div class="Map__checkpoint-dot"></div>
			<div class="Map__checkpoint-tooltip">
				{{ i + 1 }}. {{ checkpoint.title }}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		mapUrl: String,
		checkpoints: Array
	}
}
</script>
<style lang="scss">
@import './Map';
</style>