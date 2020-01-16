<template>
	<v-container>
		<v-row>
			<v-label label="Your name" for="full_name"/>
			<v-input-text id="full_name" />
			<v-label label="Email" for="email" :isRequired="true" />
			<v-input-text :dark="true" id="email" />
		</v-row>
	</v-container>
</template>
<script>
import VContainer from '@/components/hoc/VContainer'
import VRow from '@/components/hoc/VRow'
import VInputText from '@/components/base/VInputText/VInputText'
import VLabel from '@/components/base/VLabel/VLabel'
export default {
	components: {
		VContainer,
		VRow,
		VInputText,
		VLabel
	}
}
</script>