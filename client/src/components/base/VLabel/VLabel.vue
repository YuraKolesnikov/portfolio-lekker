<template>
	<label class="Label" :class="className">
		{{ label }} {{ isRequired ? '*' : '' }}
	</label>
</template>
<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes
}
</script>
<style lang="scss">
@import "./Label";
</style>