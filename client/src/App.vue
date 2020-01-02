<template>
	<div id="app">
		<main>
			<v-title size="sm">Small title</v-title>
			<v-title size="md">Medium title</v-title>
			<v-title size="lg">Large title</v-title>
			<router-view />
		</main>
	</div>
</template>
<script>
import VTitle from '@/components/base/VTitle/VTitle'
export default {
	components: {
		VTitle
	},
	methods: {
		logData({ target, currentTarget }) {
			console.log(currentTarget)
		}
	}
}
</script>