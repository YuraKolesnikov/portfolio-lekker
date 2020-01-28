<template>
	<v-container>
		<v-row>
			<div class="col-4 text-center">
				<v-button>Button</v-button>
			</div>
			<div class="col-4 text-center">
				<v-button option="filled">Filled button</v-button>
			</div>
			<div class="col-4 text-center">
				<v-button option="outlined" size="large">Large outlined button</v-button>
			</div>
		</v-row>
	</v-container>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
export default {
	components: {
		VButton
	}
}
</script>