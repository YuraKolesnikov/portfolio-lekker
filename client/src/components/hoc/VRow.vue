<template>
	<div class="row" :class="{ 'flex-column': flow == 'column' }">
		<slot />
	</div>
</template>
<script>
export default {
	props: {
		flow: String
	}
}
</script>