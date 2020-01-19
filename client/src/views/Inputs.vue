<template>
	<v-container>
		<v-row flow="column">
			<v-fieldset>
				<v-label label="Your name" for="full_name"/>
				<v-input-text id="full_name" />
			</v-fieldset>
			<v-fieldset>
				<v-label label="Email" for="email" :isRequired="true" />
				<v-input-text :dark="true" id="email" />
			</v-fieldset>
			<v-fieldset>
				<v-label label="Date" for="date" :isRequired="true" />
				<v-input-date />
			</v-fieldset>
			<v-fieldset>
				<v-label label="Select" for="select" :isRequired="true" />
				<v-select>
					<template slot="dropdown-content">
						
					</template>
				</v-select>
			</v-fieldset>
		</v-row>
	</v-container>
</template>
<script>
import VContainer from '@/components/hoc/VContainer'
import VRow from '@/components/hoc/VRow'
import VInputText from '@/components/base/VInputText/VInputText'
import VSelect from '@/components/base/VSelect/VSelect'
import VInputDate from '@/components/base/VInputDate/VInputDate'
import VLabel from '@/components/base/VLabel/VLabel'
import VFieldset from '@/components/base/VFieldset/VFieldset'
export default {
	components: {
		VContainer,
		VRow,
		VInputText,
		VInputDate,
		VLabel,
		VFieldset,
		VSelect
	},
	data() {
		return {
			publicPath: process.env.BASE_URL
		}
	}
}
</script>