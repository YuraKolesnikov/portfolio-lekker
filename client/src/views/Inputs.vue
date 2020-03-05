<template>
	<v-container>
		<v-row flow="column">
			<div class="col-6">
				<v-fieldset>
					<v-label label="Your name" for="full_name"/>
					<v-input-text id="full_name" />
				</v-fieldset>
			</div>
			<div class="col-6">
				<v-fieldset>
					<v-label label="Email" for="email" :isRequired="true" />
					<v-input-text :dark="true" id="email" />
				</v-fieldset>
			</div>
			<div class="col-6">
				<v-fieldset>
					<v-label label="Select" for="select" :isRequired="true" />
					<v-select @selectOption="selectOption" :options="options"></v-select>
				</v-fieldset>
			</div>
		</v-row>
		<h1>Datepicker</h1>
		<v-row flow="column">
			<div class="col-6"><BirthDatePicker /></div>
		</v-row>
		<h1>Country selector</h1>
		<v-row>
			<div class="col-4">
				<v-select :options="countries"></v-select>
			</div>
		</v-row>
		<h1>Textarea</h1>
		<v-text-area />
		<h1>Telephone codes</h1>
		<v-select 
			:options="codesFormatted" 
			:select-value="dialCodeLabel"
			@selectOption="updateDialCode"></v-select>
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
import VTextArea from '@/components/base/VTextArea/VTextArea'
import BirthDatePicker from '@/components/ui/BirthDatePicker/BirthDatePicker'
import { Dater } from '@/utils/dater'
import codes from '@/assets/data/dial-codes.json'
export default {
	components: {
		VContainer,
		VRow,
		VInputText,
		VInputDate,
		VLabel,
		VFieldset,
		VSelect,
		VTextArea,
		BirthDatePicker
	},
	data() {
		return {
			selected: '',
			dialcode: codes[0].dial_code,
			dialCodeLabel: `${codes[0].name} (${codes[0].dial_code})`,
			options: [
				{ id: 1, title: 'First' },
				{ id: 2, title: 'Second' },
				{ id: 3, title: 'Third' }
			],
			countries: [
				{ id: 'kenya', title: 'Kenya' },
				{ id: 'tanzania', title: 'Tanzania' },
				{ id: 'south_africa', title: 'South Africa' },
				{ id: 'namibia', title: 'Namibia' },
				{ id: 'botwsana', title: 'Botswana' },
				{ id: 'madagascar', title: 'Madagascar' }
			]
		}
	},
	computed: {
		days() {
			let dayList = [...Array(32).keys()]
			dayList = dayList.slice(1)
			return dayList
		},
		years() {
			const years = []
			for (let i = 1920; i < Dater.getCurrentYear(); i++) {
				years.push(i)
			}
			return years
		},
		months() {
			return Dater.monthNames
		},
		wtf() {
			return Dater.getDayCount(2020, 1)
		},
		codesFormatted() {
			return codes.map(item => ({
				id: item.dial_code,
				title: `${item.name} (${item.dial_code})`
			}))
		}
	},
	methods: {
		selectOption({ option, type }) {
			console.log(option, type)
			if (type == 'date') {
				this.selected = option
			} else {
				this.selected = option.title
			}
		},
		updateDialCode(res) {
			this.dialcode = res.option.id
			this.dialCodeLabel = res.option.title
		}
	}
}
</script>