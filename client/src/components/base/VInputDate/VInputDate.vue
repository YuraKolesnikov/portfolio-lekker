<template>
	<v-select type="calendar">

	</v-select>
</template>
<script>
import VIcon from '@/components/base/VIcon/VIcon'
import VSelect from '@/components/base/VSelect/VSelect'
export default {
	components: {
		VIcon,
		VSelect
	},
	data() {
		return {
			isDropdownOpen: false
		}
	}
}
</script>
<style lang="scss">
@import "./InputDate";
</style>