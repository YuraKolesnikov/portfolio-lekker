<template>
	<div 
		class="Title" 
		:style="`font-size: ${computedFontSize}rem`">
		<slot />
	</div>
</template>
<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes,
	computed: {
		computedFontSize() {
			let string = ''
			switch(this.size) {
				case 'sm':
					string = '1.3333333'
					break
				case 'md':
					string = '2'
					break
				case 'lg':
					string = '2.6666667'
					break
				default: 
					string = '1.3'
					break
			}

			return string
		}
	}
}
</script>
<style lang="scss">
@import './Title';
</style>