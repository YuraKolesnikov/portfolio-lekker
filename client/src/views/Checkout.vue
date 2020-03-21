<template>
	<div class="main-wrapper">
		<v-container>
			<!-- Total cost -->
			<v-row class="justify-content-between py-5">
				<div class="col-4">
					<v-title size="lg">Total Cost</v-title>
				</div>
				<div class="col-2">
					<v-title size="lg">$ 1450</v-title>
				</div>
			</v-row>
		</v-container>
		<div class="bg-gray py-5">
			<v-container>
				<v-row>
					<div class="col-4">
						<v-title size="md" class="mb-3">Best of South Africa</v-title>
					</div>
					<div class="col-12">
						<OrderSummary />
					</div>
				</v-row>
			</v-container>
		</div>
		<v-container>
			<v-row class="py-5">
				<div class="col-12">
					<v-title size="md">Lead Passenger</v-title>
				</div>
				<div class="col-6">	
					<v-fieldset>
						<v-label for="first_customer_name" label="First name" :is-required="true" />
						<v-input-text 
							:dark="true" 
							id="first_customer_name" 
							placeholder="First name*"
							@input="updateTextValue" />
					</v-fieldset>
					<v-fieldset>
						<v-label for="first_customer_surname" label="Surname" :is-required="true" />
						<v-input-text 
							:dark="true" 
							placeholder="Surname*"
							id="first_customer_surname" 
							@input="updateTextValue" />
					</v-fieldset>
					<v-fieldset>
						<v-label for="first_customer_date_of_birth" label="Date of birth" :is-required="true" />
						<BirthDatePicker 
							:dark="true" 
							@saveData="updateBirthDate" 
							picker-id="first_customer_date_of_birth" />
					</v-fieldset>
				</div>
				<div class="col-6">
					<v-fieldset>
						<v-label for="email" label="Email address" :is-required="true" />
						<v-input-text 
							:dark="true" 
							id="email" 
							placeholder="example@example.com" 
							@input="updateTextValue($event, null, 'email')" />
					</v-fieldset>
					<v-fieldset>
						<v-label for="phone" label="Phone number" />
						<v-input-text 
							:dark="true" 
							id="phone" 
							placeholder="Phone number"
							@input="updateTextValue($event, null, 'phone')" />
					</v-fieldset>
					<v-fieldset>
						<v-label for="additional_information" label="Additional information" />
						<v-text-area 
							:dark="true"
							@input="updateTextValue($event, null, 'additional_information')"></v-text-area>
					</v-fieldset>
				</div>
			</v-row>
			<v-row class="py-5" v-if="formData.additional_passengers.length > 0">
				<template 
					v-for="passenger in formData.additional_passengers" >
					<div class="col-6" :key="`additional_passenger_${passenger.id}`">
						<v-title>Passenger {{ passenger.id + 1 }}</v-title>
						<v-fieldset>
							<v-label :for="`additional_passenger_${passenger.id}_name`" label="First name" :is-required="true" />
							<v-input-text 
								:dark="true" 
								:id="`additional_passenger_${passenger.id}_name`" 
								placeholder="First name*"
								@input="updateTextValue($event, passenger.id, 'name')" />
						</v-fieldset>
						<v-fieldset>
							<v-label :for="`additional_passenger_${passenger.id}_surname`" label="Surname" :is-required="true" />
							<v-input-text 
								:dark="true" 
								:id="`additional_passenger_${passenger}_surname`"
								@input="updateTextValue($event, passenger.id, 'surname')"
								placeholder="Surname*" />
						</v-fieldset>
						<v-fieldset>
							<v-label 
								:is-required="true"
								label="Date of birth" 
								:for="`additional_customer_${passenger}_date_of_birth`" />
							<BirthDatePicker 
								:dark="true" 
								@saveData="updateBirthDate" 
								:picker-id="`additional_customer_${passenger}_date_of_birth`" />
						</v-fieldset>
					</div>
				</template>
			</v-row>
			<v-row>
				<v-button option="outlined" size="block" @click="addPassenger">
					Add more passengers
				</v-button>
			</v-row>
			<v-row class="py-5">
				<!-- TODO: Make a checkbox -->
				<p>
					We'd love to contact you by email from time to time about exciting news, products and events we think will be of interest to you. Please tick this box if you are happy for us to do so. If you wish to unsubscribe, you can find an unsubscribe link at the bottom of all our marketing emails.
				</p>
				<p>All details provided by you will be held by Lekker Boutique Travel Ltd and used in accordance with our Privacy Policy.</p>
				<v-button class="m-auto my-5" @click="checkout">Proceed to checkout</v-button>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import VTitle from '@/components/base/VTitle/VTitle'
import VLabel from '@/components/base/VLabel/VLabel'
import VInputText from '@/components/base/VInputText/VInputText'
import VTextArea from '@/components/base/VTextArea/VTextArea'
import VFieldset from '@/components/base/VFieldset/VFieldset'
import BirthDatePicker from '@/components/ui/BirthDatePicker/BirthDatePicker'
import OrderSummary from '@/components/ui/OrderSummary/OrderSummary'
export default {
	components: {
		VButton,
		VTitle,
		VLabel,
		VInputText,
		VTextArea,
		VFieldset,
		BirthDatePicker,
		OrderSummary
	},
	data() {
		return {
			additionalPassengerCount: 0,
			formData: {
				first_customer_name: '',
				first_customer_surname: '',
				first_customer_date_of_birth: '',
				email: '',
				phone: '',
				additional_information: '',
				additional_passengers: [
					{ id: 1, name: '', surname: '', date_of_birth: '' }
				]
			}
		}
	},
	methods: {
		checkout() {
			console.log(this.formData)
		},
		updateTextValue({ target }, passengerId, key) {
			const { id, value } = target

			/* Which means if this is not a main passenger */
			if (passengerId) {
				const passenger = this.formData.additional_passengers.find(passenger => passenger.id == passengerId)
				passenger[key] = value
			} else {
				this.formData[id] = value
			}
		},
		updateBirthDate(payload, id) {
			console.log(payload, id)
		},
		addPassenger() {
			if (this.formData.additional_passengers.length < 4) {
				this.formData.additional_passengers.push(
					{ 
						id: this.formData.additional_passengers.length + 1, 
						name: '', 
						surname: '', 
						date_of_birth: ''
					}
				)
			}
		}
	}
}
</script>