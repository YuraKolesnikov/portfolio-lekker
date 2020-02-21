<template>
	<div class="SearchControl">
		<v-row class="SearchControl__main">
			<div class="col-4">
				<v-label label="Destination" for="seach_destination" :isRequired="true" />
				<v-select :options="destinationOptions"></v-select>
			</div>
			<div class="col-4">
				<v-label label="Duration" for="search_duration" :isRequired="true" />
				<v-select :options="durationOptions"></v-select>
			</div>
			<div class="col-3">
				<v-button class="SearchControl__button">Find my trip</v-button>
			</div>
		</v-row>
	</div>
</template>
<script>
import VSelect from '@/components/base/VSelect/VSelect'
import VButton from '@/components/base/VButton/VButton'
import VLabel from '@/components/base/VLabel/VLabel'
export default {
	props: {
		destinationOptions: { type: Array },
		durationOptions: { type: Array }
	},
	components: {
		VSelect,
		VButton,
		VLabel
	}
}
</script>
<style lang="scss">
@import "./SearchControl";
</style>