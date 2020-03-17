<template>
	<v-container>
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="card in bestsellers" :key="`bestseller_${card.id}`">
				<best-seller-card :card="card" />
			</swiper-slide>
		</swiper>
	</v-container>
</template>
<script>
import VInputText from '@/components/base/VInputText/VInputText'
import VSelect from '@/components/base/VSelect/VSelect'
import VInputDate from '@/components/base/VInputDate/VInputDate'
import VLabel from '@/components/base/VLabel/VLabel'
import VFieldset from '@/components/base/VFieldset/VFieldset'
import VTextArea from '@/components/base/VTextArea/VTextArea'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
import BirthDatePicker from '@/components/ui/BirthDatePicker/BirthDatePicker'
import { Dater } from '@/utils/dater'
import codes from '@/assets/data/dial-codes.json'
export default {
	components: {
		VInputText,
		VInputDate,
		VLabel,
		VFieldset,
		VSelect,
		VTextArea,
		BestSellerCard,
		BirthDatePicker
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				pagination: {
          el: '.swiper-pagination'
        }
			},
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
			],
			bestsellers: [
				{ 
					id: 1, 
					title: 'Best of South Africa', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/kenya.png'
				},
				{ 
					id: 2, 
					title: 'Best of Namibia', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/trip-card-img.png'
				},
				{ 
					id: 3, 
					title: 'Best of South Africa', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/kenya.png'
				},
				{ 
					id: 4, 
					title: 'Best of Namibia', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/trip-card-img.png'
				}
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