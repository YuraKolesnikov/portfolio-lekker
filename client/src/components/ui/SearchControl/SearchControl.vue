<template>
	<div class="SearchControl">
		<v-row class="SearchControl__main">
			<div class="col-3">
				<v-label label="Destination" for="search_destination" :isRequired="true" />
				<v-select 
					:options="destinationOptions"
					:select-value="searchValues.destination.title"
					@selectOption="updateValue($event, 'destination')"></v-select>
			</div>
			<div class="col-3">
				<v-label label="Number of passengers" for="search_passenger_count" :isRequired="true" />
				<v-input-text id="passenger_count" :inputValue="searchValues.passengerCount" @input="updateValue($event, 'passengerCount')" />
			</div>
			<div class="col-3">
				<v-label label="Duration" for="search_duration" :isRequired="true" />
				<v-select 
					:options="durationOptions"
					:select-value="searchValues.duration.title"
					@selectOption="updateValue($event, 'duration')"></v-select>
			</div>
			<div class="col-3">
				<v-button 
					@click="searchPackage"
					class="SearchControl__button">Find my trip</v-button>
			</div>
		</v-row>
	</div>
</template>
<script>
import VSelect from '@/components/base/VSelect/VSelect'
import VInputText from '@/components/base/VInputText/VInputText'
import VButton from '@/components/base/VButton/VButton'
import VLabel from '@/components/base/VLabel/VLabel'
export default {
	props: {
		destinationOptions: { type: Array },
		durationOptions: { type: Array }
	},
	components: {
		VSelect,
		VInputText,
		VButton,
		VLabel
	},
	data() {
		return {
			searchValues: {
				destination: this.destinationOptions[0],
				passengerCount: '',
				duration: this.durationOptions[0]
			}
		}
	},
	methods: {
		searchPackage() {
			const { destination, duration, passengerCount } = this.searchValues

			const payload = {
				destination: destination.id,
				passenger_count: passengerCount,
				duration: duration.id
			}

			/* Check for undefined or add default */

			console.log('Looking trip package with these params... ', payload)
		},
		updateValue(event, id) {
			console.log(event)
			/* If event was fired in custom select */
			if(!event.target) return this.searchValues[id] = event.option

			this.searchValues[id] = event.target.value
		},
	}
}
</script>
<style lang="scss">
@import "./SearchControl";
</style>