<template>
	<div class="Accordion">
		<div class="Accordion__item" v-for="option in options" :key="option.id">
			<div 
				class="Accordion__toggle" 
				:class="{'Accordion__toggle--open': show == option.id}"
				@click="toggle(option.id)">
				{{ option.title }}
			</div>
			<div class="Accordion__body" :class="{'open': show == option.id}">
				{{ option.text }}
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
    }
	}
}
</script>
<style lang="scss">
@import "./Accordion";
</style>