<template>
	<div class="home">
		<Hero />
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
				<v-title size="md" class="mb-5">Or pick one of our bestsellers</v-title>
				<swiper :options="swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="card in bestsellers" :key="`bestseller_${card.id}`">
						<best-seller-card :card="card" />
					</swiper-slide>
				</swiper>
			</v-container>
		</section>
	</div>
</template>
<script>
import Hero from '@/components/ui/HeroStatic/HeroStatic'
import DestinationsSelector from '@/components/ui/DestinationsSelector/DestinationsSelector'
import SearchControl from '@/components/ui/SearchControl/SearchControl'
import VTitle from '@/components/base/VTitle/VTitle'
import BestSellerCard from '@/components/ui/BestSellerCard/BestSellerCard'
export default {
	components: {
		Hero,
		DestinationsSelector,
		SearchControl,
		VTitle,
		BestSellerCard
	},
	data() {
		return {
			swiperOption: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				loop: true,
				pagination: {
          el: '.swiper-pagination'
        },
				autoplay: {
					delay: 5000
				}
			},
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
					title: 'Best of Botswana', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/kenya.png'
				},
				{ 
					id: 4, 
					title: 'Best of Tanzania', 
					disclaimer: 'Want something to blow your mind? Imagine a thousand flamingos standing at the side of Kenya’s Lake Nakuru. Or 15,000m2 of rolling savannah in the Serengeti. Or why not explore the aromatic plantations of Zanzibar, famous for its coconut palm beaches and snorkelling in the Indian Ocean?',
					img_url: '/static/img/trip-card-img.png'
				}
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