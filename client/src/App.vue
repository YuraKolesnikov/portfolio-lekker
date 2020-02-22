<template>
	<div id="app">
		<nav style="display: flex; width: 100%; justify-content: center">
			<router-link to="/buttons">
				<v-button option="filled">Buttons</v-button>
			</router-link>
			<router-link to="/inputs">
				<v-button option="filled">Input</v-button>
			</router-link>
			<router-link to="/typography">
				<v-button option="filled">Typography</v-button>
			</router-link>
			<router-link to="/elements">
				<v-button option="filled">Elements</v-button>
			</router-link>
		</nav>
		<main>
			<HeroStatic />
			<div class="container">
				<router-view />
			</div>
		</main>
	</div>
</template>
<script>
import VButton from '@/components/base/VButton/VButton'
import HeroStatic from '@/components/ui/HeroStatic/HeroStatic'
export default {
	components: {
		VButton,
		HeroStatic
	}

}
</script>