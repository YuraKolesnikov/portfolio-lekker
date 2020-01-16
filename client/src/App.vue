<template>
	<div id="app">
		<nav style="display: flex; width: 100%; justify-content: center">
			<router-link to="/inputs">Inputs</router-link>
			<router-link to="/typography">Typography</router-link>
		</nav>
		<main>
			<div class="container">
				<router-view />
			</div>
		</main>
	</div>
</template>