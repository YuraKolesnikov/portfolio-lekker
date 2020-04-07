<template>
	<div 
		class="Modal" 
		:class="{'is-visible': isModalOpen}"
		@click.self="closeModal">
		<div class="Modal__main">
			<button class="Modal__close-button" @click="closeModal">&times;</button>
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
		closeModal() {
			this.$emit('closeModal')
		}
	}
}
</script>
<style lang="scss" scoped>
@import "./Modal.scss";
</style>