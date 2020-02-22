<template>
	<div class="Accordion">
		<div class="Accordion__item" v-for="option in options" :key="option.id">
			<div 
				class="Accordion__toggle" 
				:class="{'Accordion__toggle--open': show == option.id}"
				@click="toggle(option.id)">
				{{ option.title }}
			</div>
			<transition name="accordion">
				<div class="Accordion__body" v-if="show == option.id">
					{{ option.text }}
				</div>
			</transition>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			show: 1,
			options: [
				{ id: 1, title: 'Kenya', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' },
				{ id: 2, title: 'Tanzania', text: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?' }
			]
		}
	},
	methods: {
		toggle(id) {
			if (this.show == id) return this.show = 0
      this.show = id;
    }
	}
}
</script>
<style lang="scss">
@import "./Accordion";
</style>