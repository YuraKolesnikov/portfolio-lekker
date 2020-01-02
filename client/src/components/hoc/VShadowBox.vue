<template>
	<div class="ShadowBox">
		<slot />
	</div>
</template>
<style lang="scss" scoped>
.ShadowBox {
	padding: 50px;
	min-height: 170px;
	box-shadow: 0px 4px 40px rgba(187, 187, 187, 0.25);
}
</style>