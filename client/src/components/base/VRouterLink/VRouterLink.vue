<template>
	<router-link tag="button" :to="location" class="Button" :class="`Button--${option}`">
		<span>
			<slot/>
		</span>
	</router-link>
</template>
<script>
import { PropTypes } from './PropTypes'
export default {
	props: PropTypes
}
</script>