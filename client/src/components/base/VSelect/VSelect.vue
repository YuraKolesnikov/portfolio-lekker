<template>
	<div class="Select">
		<div class="Select__trigger">
			<v-input-text
				id="select"
				@focus="openDropdown"
			/>
			<span
				v-if="type == 'calendar'"
				class="Select__icon-wrapper">
				<v-icon icon-name="calendar" />
			</span>
			<span 
				v-else
				class="Select__icon-wrapper" 
				:class="{'Select__icon-wrapper--open': isDropdownOpen}">
				<v-icon icon-name="arrow" />
			</span>
		</div>
		<div 
			ref="dropdown"
			tabindex="0"
			@blur="closeDropdown"
			class="Select__dropdown"
			:class="{ 'Select__dropdown--open': isDropdownOpen }">
			<ul class="Select__options" v-if="options">
				<li 
					class="Select__option"
					:key="option.id || option" 
					v-for="option in options" 
					@click.self="selectOption(option, type)">
					{{ option.title || option }}
				</li>
			</ul>
			<template v-else>
				<slot name="custom-content" />
			</template>
		</div>
	</div>
</template>
<script>
import VInputText from '@/components/base/VInputText/VInputText'
import VIcon from '@/components/base/VIcon/VIcon'
export default {
	props: {
		type: String, // calendar
		options: Array
	},
	components: {
		VInputText,
		VIcon
	},
	data() {
		return {
			isDropdownOpen: false
		}
	},
	methods: {
		selectOption(option, type) {
			this.$emit('selectOption', { option, type })
			this.closeDropdown()
		},
		openDropdown() {
			this.$refs.dropdown.focus()
			this.isDropdownOpen = true
		},
		closeDropdown() {
			this.isDropdownOpen = false
		}
	}
}
</script>
<style lang="scss">
@import "./Select";
</style>