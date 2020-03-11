<template>
	<div class="home">
		<section class="destinations">
			<v-container>
				<DestinationsSelector />
				<v-row>
					<div class="col-12">
						<div class="search-control-wrapper">
							<SearchControl 
								:destination-options="destinations" 
								:duration-options="durations" />
						</div>
					</div>
				</v-row>
			</v-container>
		</section>
		<section class="bestsellers">
			<v-container>
				<v-row>
					<v-title size="md">Or pick one of our bestsellers</v-title>
				</v-row>
			</v-container>
		</section>
	</div>
</template>
<script>
import DestinationsSelector from '@/components/ui/DestinationsSelector/DestinationsSelector'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import VTitle from '@/components/base/VTitle/VTitle'
export default {
	components: {
		DestinationsSelector,
		SearchControl,
		VTitle
	},
	data() {
		return {
			destinations: [
				{ id: 'kenya', title: 'Kenya' },
				{ id: 'tanzania', title: 'Tanzania' },
				{ id: 'south_africe', title: 'South Africa' },
				{ id: 'namibia', title: 'Namibia' },
				{ id: 'botwsana', title: 'Botswana' },
				{ id: 'madagascar', title: 'Madagascar' },
				{ id: '', title: 'I don\'t mind' }
			],
			durations: [
				{ id: 1, title: 'up to 5 days' },
				{ id: 2, title: '6-9 days' },
				{ id: 3, title: '10-14 days' },
				{ id: 4, title: 'over 14 days' },
				{ id: '', title: 'I don\'t mind' }
			]
		}
	}
}
</script>
<style lang="scss" scoped>
.destinations {
	padding: 100px 0 0 0;
}
.bestsellers {
	padding: 200px 0 100px 0;
	background-color: $extra-light-gray;
}
.search-control-wrapper {
	position: relative;
	top: 80px;
}
</style>