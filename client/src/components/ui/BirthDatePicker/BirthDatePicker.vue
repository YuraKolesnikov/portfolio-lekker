<template>
	<div class="BirthDatePicker">
		<div class="BirthDatePicker__trigger">
			<v-input-text 
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
					<v-input-text id="day" @input="updateValue($event, 'day')" />
				</div>
				<div class="col-4">
					<label for="month">Month</label>
					<v-select :options="months" @selectOption="updateValue($event, 'month')"></v-select>
				</div>
				<div class="col-4">
					<label for="year">Year</label>
					<v-input-text id="year" @input="updateValue($event, 'year')" />
				</div>
			</v-row>
			<v-button @click="closeDropdown">
				Cancel
			</v-button>
			<v-button @click="closeDropdown">
				Accept
			</v-button>
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
			this.$emit('saveData')
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