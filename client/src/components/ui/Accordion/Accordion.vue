<template>
	<div class="Accordion">
		<div class="Accordion__item" v-for="option in options" :key="option.id">
			<div 
				class="Accordion__toggle" 
				:class="{'Accordion__toggle--open': show == option._id}"
				@click="toggle(option._id)">
				{{ option.country }}
			</div>
			<div class="Accordion__body" :class="{'open': show == option._id}">
				{{ option.caption }}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		options: Array
	},
	data() {
		return {
			show: 1
		}
	},
	methods: {
		toggle(id) {
			if (this.show == id) return this.show = 0
      this.show = id;
			this.$emit('updateSlide', id)
    }
	}
}
</script>
<style lang="scss">
@import "./Accordion";
</style>