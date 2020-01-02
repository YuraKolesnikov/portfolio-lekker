<template>
	<div id="app">
		<main>
			<div class="container">
				<v-title size="sm">Small title</v-title>
				<v-title size="md">Medium title</v-title>
				<v-title size="lg">Large title</v-title>
				<v-star 
					:key="star"
					:id="star"
					:current-rating="rating"
					v-for="star in stars"
					@change="handleStarChange"
				/>
				{{ rating }}
				<v-shadow-box>
					Hello World
				</v-shadow-box>
				<router-view />
			</div>
		</main>
	</div>
</template>
<script>
import VTitle from '@/components/base/VTitle/VTitle'
import VStar from '@/components/base/VStar/VStar'
import VShadowBox from '@/components/hoc/VShadowBox'
export default {
	data() {
		return {
			rating: 0,
			formValues: {
				lol: 'LOL'
			},
			stars: 5
		}
	},
	components: {
		VTitle,
		VStar,
		VShadowBox
	},
	methods: {
		logData({ target, currentTarget }) {
			console.log(currentTarget)
		},
		handleInput({ target }, id) {
			this.formValues[id] = target.value
		},
		handleStarChange({ target }) {
			this.rating = +target.id
		}
	}
}
</script>