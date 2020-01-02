<template>
	<button
		@click="$emit('click', $event)"
		class="Button" 
		:class="computedClassName">
		<span><slot /></span>
	</button>
</template>

<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes,
	computed: {
		computedClassName () {
			let string = ''
			if (this.option) {
				string += `Button--${this.option} `
			} 

			if (this.size == 'large') {
				string += 'Button--large '
			} else if (this.size == 'block') {
				string += 'Button--block '
			}

			return string
		}
	}
}
</script>

<style lang="scss">
@import './Button';
</style>