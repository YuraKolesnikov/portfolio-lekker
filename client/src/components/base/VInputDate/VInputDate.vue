<template>
	<div class="InputDate">
		<div class="InputDate__trigger">
			<input type="text"  readonly>
			<v-icon class="InputDate__icon" iconName="calendar" />
		</div>
		

		<!-- v-dropdown goes here -->
		<div class="InputDate__calendar">
			<!-- Dates go here -->
		</div>
	</div>
</template>
<script>
import VIcon from '@/components/base/VIcon/VIcon'
export default {
	components: {
		VIcon
	}
}
</script>
<style lang="scss">
@import "./InputDate";
</style>