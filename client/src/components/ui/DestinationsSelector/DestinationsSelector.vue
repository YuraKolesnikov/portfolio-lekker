<template>
	<div class="DestinationsSelector">
		<v-container>
			<v-title size="md">Destinations</v-title>
			<v-row>
				<div class="col-5">
					<Accordion :options="options" @updateSlide="updateSlide" />
				</div>
				<div class="col-6 offset-1 mt-4">
					<img :src="img_path" alt="" style="height: 600px">
				</div>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import VTitle from '@/components/base/VTitle/VTitle'
import Accordion from '@/components/ui/Accordion/Accordion'
export default {
	components: {
		VTitle,
		Accordion
	},
	props: {
		options: Array
	},
	data() {
		return {
			img_path: ''
		}
	},
	methods: {
		updateSlide(newId) {
			const newSlide = this.options.find(slide => slide._id == newId)
			this.img_path = newSlide.img_path
		}
	}
}
</script>