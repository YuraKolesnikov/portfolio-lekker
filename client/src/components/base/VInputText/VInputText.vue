<template>
	<input 
		:id="id"
		type="text" 
		class="InputText InputText--error"
		:value="inputValue" 
		@input="$emit('input')"
		:class="{'InputText--dark': dark}">
</template>
<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes
}
</script>
<style lang="scss" scoped>
@import "./InputText";
</style>