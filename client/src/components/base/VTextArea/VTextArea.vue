<template>
	<textarea 
		:id="id"
		:value="value"
		maxlength="400"
		class="TextArea"
		:placeholder="placeholder"
		@input="$emit('input', $event)">
	</textarea>
</template>
<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes
}
</script>
<style lang="scss">
@import "./TextArea.scss";
</style>