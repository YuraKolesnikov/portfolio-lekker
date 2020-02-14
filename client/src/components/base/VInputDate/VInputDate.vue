<template>
	<v-select type="calendar">
		<template slot="dropdown-content">
			<h2 @click="chooseDate">Hello NIBBA!</h2>
		</template>
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
	},
	methods: {
		chooseDate(e) {
			e.preventDefault();
			e.stopPropagation()
			console.log(e.target.textContent)
		}
	}
}
</script>
<style lang="scss">
@import "./InputDate";
</style>