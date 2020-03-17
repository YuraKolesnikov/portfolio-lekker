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
	data() {
		return {
			checkpoints: [
				{ id: 1, coordinates: { top: 149, left: 299 }, title: 'Cape Town' },
				{ id: 2, coordinates: { top: 185, left: 411 }, title: 'Kruger National Park' },
				{ id: 3, coordinates: { top: 119, left: 529 }, title: 'The Omo River Valley' },
				{ id: 4, coordinates: { top: 241, left: 581 }, title: 'Amboseli National Park' },
				{ id: 5, coordinates: { top: 150, left: 618 }, title: 'Ngorongoro Protected Area' },
				{ id: 6, coordinates: { top: 187, left: 731 }, title: 'Amboseli National Park' },
				{ id: 7, coordinates: { top: 119, left: 849 }, title: 'The Omo River Valley' },
				{ id: 8, coordinates: { top: 242, left: 900 }, title: 'Avenue of baobabs' },
				{ id: 9, coordinates: { top: 400, left: 720 }, title: 'Okavango Delta' }
			]
		}
	}
}
</script>
<style lang="scss">
@import './Map';
</style>