<template>
	<div class="BirthDatePicker">
		<div class="BirthDatePicker__trigger">
			<v-input-text 
				:dark="dark"
				id="birth-date-picker-toggle"
				@focus="openDropdown"
			/>
			<span
				class="BirthDatePicker__icon-wrapper" 
				:class="{'BirthDatePicker__icon-wrapper--open': isDropdownOpen}">
				<v-icon icon-name="arrow" />
			</span>
		</div>
		<div 
			class="BirthDatePicker__dropdown"
			:class="{ 'BirthDatePicker__dropdown--open': isDropdownOpen }">
			<v-row>
				<div class="col-4">
					<label for="day">Day</label>
					<v-input-text id="day" @input="updateValue($event, 'day')" :input-value="dateValues.day" />
				</div>
				<div class="col-4">
					<label for="month">Month</label>
					<v-select 
						select-key="month"
						:options="months" 
						:select-value="dateValues.month"
						@selectOption="updateValue($event, 'month')"></v-select>
				</div>
				<div class="col-4">
					<label for="year">Year</label>
					<v-input-text 
						id="year" 
						:input-value="dateValues.year"
						@input="updateValue($event, 'year')" />
				</div>
			</v-row>
			<div class="BirthDatePicker__controls">
				<v-button class="BirthDatePicker__button" option="outlined" @click="closeDropdown">
					Cancel
				</v-button>
				<v-button class="BirthDatePicker__button" @click="saveData">
					Accept
				</v-button>
			</div>
		</div>
	</div>
</template>
<script>
import VInputText from '@/components/base/VInputText/VInputText'
import VSelect from '@/components/base/VSelect/VSelect'
import VButton from '@/components/base/VButton/VButton'
import VIcon from '@/components/base/VIcon/VIcon'
import { Dater } from '@/utils/dater'
export default {
	components: {
		VInputText,
		VSelect,
		VButton,
		VIcon
	},
	props: {
		pickerId: String,
		dark: Boolean
	},
	data() {
		return {
			isDropdownOpen: false,
			dateValues: {
				day: '',
				month: '',
				year: ''
			}
		}
	},
	computed: {
		months() {
			return Dater.monthNames
		}
	},
	methods: {
		saveData() {
			this.$emit('saveData', this.dateValues, this.pickerId)
			this.closeDropdown()
		},
		updateValue(event, id) {
			/* If event was fired in custom select */
			if(!event.target) return this.dateValues[id] = event.option

			this.dateValues[id] = event.target.value
		},
		openDropdown() { this.isDropdownOpen = true },
		closeDropdown() { this.isDropdownOpen = false }
	}
}
</script>
<style lang="scss">
@import "./BirthDatePicker";
</style>