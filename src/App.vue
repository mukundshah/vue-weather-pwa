<template>
	<div class="main-container">
		<input
			type="text"
			class="search"
			placeholder="Type and press enter to search..."
			v-model="query"
			@keyup.enter="search"
		/>

		<div v-if="weather.main" class="city">
			<h2 class="city-name">
				<span>{{ weather.name }}</span>
				<sup>{{ weather.sys.country }}</sup>
			</h2>
			<div class="city-temp">
				{{ Math.round(weather.main.temp) }}
				<sup>&deg;C</sup>
			</div>
			<div class="info">
				<img
					class="city-icon"
					:src="
						'https://openweathermap.org/img/wn/' +
							weather.weather[0].icon +
							'@2x.png'
					"
					:alt="weather.weather[0].description"
				/>
				<p>{{ weather.weather[0].description }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { weatherApi } from "./api/weatherApi";
import "./App.css";

export default {
	name: "App",
	data() {
		return {
			query: "Kathmandu",
			weather: {},
		};
	},
	async beforeMount() {
		const data = await weatherApi(this.query);
		this.weather = data;
		this.query = "";
	},

	methods: {
		async search() {
			try {
				const data = await weatherApi(this.query);
				this.weather = data;
				this.query = "";
			} catch (error) {
				alert("Invalid location");
			}
		},
	},
};
</script>

<style></style>
