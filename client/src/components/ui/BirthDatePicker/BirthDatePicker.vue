<template>
	<div class="BirthDatePicker">
		<div class="BirthDatePicker__trigger">
			<v-input-text 
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
			<v-button @click="closeDropdown">
				Accept
			</v-button>
		</div>
	</div>
	<!-- <v-select>
		<template slot="custom-content">
			<v-row>
				<div class="col-4">
					<v-select>

					</v-select>
				</div>
				<div class="col-4">
					<v-select>

					</v-select>
				</div>
				<div class="col-4">
					<v-select>

					</v-select>
				</div>
			</v-row>
		</template>
	</v-select> -->
</template>
<script>
import VInputText from '@/components/base/VInputText/VInputText'
import VSelect from '@/components/base/VSelect/VSelect'
import VButton from '@/components/base/VButton/VButton'
import VIcon from '@/components/base/VIcon/VIcon'
export default {
	components: {
		VInputText,
		VSelect,
		VButton,
		VIcon
	},
	data() {
		return {
			isDropdownOpen: false
		}
	},
	methods: {
		openDropdown() { this.isDropdownOpen = true },
		closeDropdown() { this.isDropdownOpen = false }
	}
}
</script>
<style lang="scss">
@import "./BirthDatePicker";
</style>