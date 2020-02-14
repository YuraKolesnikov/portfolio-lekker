<template>
	<svg class="Icon" :class="`Icon__${iconName}`">
		<use :href="`/static/icons/icons.svg#${iconName}`"></use>
	</svg>
</template>
<script>
export default {
	props: {
		iconName: { type: String, required: true }
	}
}
</script>
<style lang="scss">
@import "./Icon";
</style>