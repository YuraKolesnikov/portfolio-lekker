<template>
	<section :class="sectionClass">
		<slot />
	</section>
</template>
<script>
export default {
	props: {
		sectionClass: String
	}
}
</script>