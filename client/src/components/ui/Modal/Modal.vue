<template>
	<div 
		class="Modal" 
		:class="{'is-visible': isModalOpen}"
		@click.self="registerClickOutside">
		<div class="Modal__main">
			<!-- TODO: Add button -->
			<slot/>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		isModalOpen: Boolean
	},
	methods: {
		registerClickOutside() {
			console.log('Captured outside click in Modal...')
			this.$emit('closeModal')
		}
	}
}
</script>
<style lang="scss" scoped>
@import "./Modal.scss";
</style>