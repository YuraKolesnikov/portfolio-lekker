<template>
	<div class="ShadowBox">
		<slot />
	</div>
</template>
<style lang="scss" scoped>
.ShadowBox {
	width: 100%;
	box-shadow: 0px 4px 40px rgba(187, 187, 187, 0.25);
}
</style>