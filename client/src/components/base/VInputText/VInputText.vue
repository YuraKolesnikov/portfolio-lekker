<template>
	<input 
		:id="id"
		type="text" 
		class="InputText"
		:value="inputValue" 
		@input="$emit('input')"
		@focus="$emit('focus')"
		@blur="$emit('blur')"
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