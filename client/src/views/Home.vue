<template>
	<v-container>
		<v-row>
			<DestinationsSelector />
			<SearchControl 
				:destination-options="destinations"
				:duration-options="durations" />
			<v-title size="md">Or pick one of our bestsellers</v-title>
		</v-row>
	</v-container>
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
	}
}
</script>