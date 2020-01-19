<template>
	<div class="Select">
		<div class="Select__trigger">
			<v-input-text
				id="select"
				@focus="isDropdownOpen = true"
				@blur="isDropdownOpen = false"
			/>
			<span
				v-if="type == 'calendar'"
				class="Select__icon-wrapper">
				<v-icon icon-name="calendar" />
			</span>
			<span 
				v-else
				class="Select__icon-wrapper" 
				:class="{'Select__icon-wrapper--hidden': isDropdownOpen}">
				<v-icon icon-name="arrow" />
			</span>
		</div>
		<v-dropdown :is-dropdown-open="isDropdownOpen">
			<div class="InputDate__calendar">
				<slot name="dropdown-content" />
			</div>
		</v-dropdown>
		
	</div>
</template>
<script>
import VInputText from '@/components/base/VInputText/VInputText'
import VDropdown from '@/components/hoc/VDropdown'
import VIcon from '@/components/base/VIcon/VIcon'
export default {
	props: {
		type: String
	},
	components: {
		VInputText,
		VDropdown,
		VIcon
	},
	data() {
		return {
			isDropdownOpen: false
		}
	}
}
</script>
<style lang="scss">
@import "./Select";
</style>