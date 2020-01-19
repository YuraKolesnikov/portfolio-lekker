<template>
	<transition name="dropdown">
		<div class="Dropdown" v-if="isDropdownOpen">
			<slot />
		</div>
	</transition>
</template>
<script>
export default {
	props: {
		isDropdownOpen: {
			type: Boolean,
			required: true
		}
	}
}
</script>
<style lang="scss">
.Dropdown {
	position: absolute;
	top: 70px;
	right: 0;
	z-index: 1000;
	box-shadow: 0px 0px 40px rgba($gray, 0.25);
	opacity:1;
  transform-origin: right top 0px; 
	transform: scale(1); 
	transition: opacity .2s ease, transform .2s ease;
}

.dropdown-enter {
  opacity: 0;
  transform: scale(0);
}
.dropdown-leave-active {
  opacity: 0;
  transform: scale(0);
}

</style>