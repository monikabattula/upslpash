<template>
	<v-container fluid>
		<v-card class="ml-4 mr-4 rounded-t-xl bg-transparent" v-if="loader" elevation="0">
			<v-skeleton-loader
				class="mt-10"
				elevation="12"
				type="table-heading,article,avatar,heading, list-item-two-line, image"
			></v-skeleton-loader>
		</v-card>
		<v-card
			class="rounded-xl ml-10 pl-10 mr-10 pr-10 mt-10 pt-10"
			v-if="!loader"
			elevation="0"
		>
			<v-row>
				<v-col cols="6" xs="12">
					<v-card
						class="rounded-xl"
						max-width="300"
						max-height="300"
						min-width="150"
						min-height="150"
					>
						<v-img :src="useCat.dataForBreed.principalImage" cover></v-img>
					</v-card>
				</v-col>
				<v-col cols="6">
					<v-card elevation="0" class="bg-transparent">
						<v-card-title class="font-weight-bold text-h5">{{
							breedInfoToShow.name
						}}</v-card-title>
						<v-list>
							<v-list-item>{{ breedInfoToShow.description }}</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Temperature:</p>
									</v-col>
									<v-col cols="9">
										<span class="ml-1 d-flex justify-center">{{
											breedInfoToShow.temperament
										}}</span>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Origin:</p>
									</v-col>
									<v-col cols="9">
										<span class="text-subtitle ml-2">{{ breedInfoToShow.origin }}</span>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Origin:</p>
									</v-col>
									<v-col cols="9">
										<span class="text-subtitle ml-2">{{
											breedInfoToShow.life_span
										}}</span>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Adaptability:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.adaptability"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Affection level::</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.affection_level"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Child Friendly:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.child_friendly"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Grooming:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.grooming"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Intelligence:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.intelligence"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Health issues:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.health_issues"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Social needs:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.social_needs"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
							<v-list-item>
								<v-row>
									<v-col cols="3">
										<p class="textList">Strange friendly:</p>
									</v-col>
									<v-col cols="9">
										<v-rating
											v-model="breedInfoToShow.stranger_friendly"
											background-color="grey lighten-2"
											color="black"
											dense
											readonly
											empty-icon="mdi-circle-outline"
											full-icon="mdi-circle"
											half-icon="mdi-circle-half"
											half-increments
											class="flat-icon"
										></v-rating>
									</v-col>
								</v-row>
							</v-list-item>
						</v-list>
					</v-card>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
	<v-container fluid>
		<v-card class="bg-transparent ml-10 pl-10 mr-10 pr-10" elevation="0" v-if="!loader">
			<v-card-title class="text-h4 mt-4 mb-4">Other photos</v-card-title>
			<v-card-text>
				<v-row>
					<v-col
						cols="12"
						xs="6"
						sm="3"
						md="3"
						xl="4"
						xxl="4"
						v-for="images in useCat.dataForBreed.arrayOfImages"
						:key="images.id"
					>
						<v-card class="rounded-xl">
							<v-img
								:src="images.url"
								cover
								aspect-ratio="1/1"
								width="250"
								height="250"
							></v-img>
						</v-card>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-container>
	<div class="loading" v-if="isLoader">
		<v-progress-circular color="primary" indeterminate :size="72"></v-progress-circular>
	</div>
</template>

<script setup>
	import { ref, computed } from 'vue'
	import { useRouter, useRoute } from 'vue-router'
	import { useCatStore } from '../store/catStore'
	import { VSkeletonLoader } from 'vuetify/lib/labs/components.mjs'
	import { useDisplay } from 'vuetify'
	const useCat = useCatStore()
	const searchTerm = ref('')
	const breedInfoToShow = ref([])
	const route = useRoute()
	const loader = ref(false)
	const isLoader = ref(false)
	searchTerm.value = route.params.searchTerm

	//funciona para crear un rating de iconos
	const getRatingIcons = (rating) => {
		const icons = []
		const filledIcon = 'mdi-circle' // Ícono para representar un valor lleno
		const emptyIcon = 'mdi-circle-outline' // Ícono para representar un valor vacío

		for (let i = 0; i < 5; i++) {
			if (i < rating) {
				icons.push(filledIcon)
			} else {
				icons.push(emptyIcon)
			}
		}
		return icons
	}
	const init = async () => {
		// loader.value = true
		const foundParam = useCat.catBreeds.listOfBreeds.some((breed) => {
			if (breed.name.includes(searchTerm.value)) {
				breedInfoToShow.value = breed
				return true
			} else {
				breedInfoToShow.value = []
				return false
			}
		})

		if (!foundParam) {
			setTimeout(() => {
				loader.value = false
			}, 4000)
			router.push({ name: 'Home' })
			return
		}
		await useCat.getBreedImage(
			breedInfoToShow.value.reference_image_id,
			breedInfoToShow.value.id
		)
		setTimeout(() => {
			loader.value = false
		}, 4000)
		// console.log(breedInfoToShow.value)
	}
	init()

	const { name } = useDisplay()

	const displayHeight = computed(() => {
		// name is reactive and
		// must use .value
		switch (name.value) {
			case 'xs':
				return 220
			case 'sm':
				return 400
			case 'md':
				return 500
			case 'lg':
				return 600
			case 'xl':
				return 800
			case 'xxl':
				return 1200
		}

		return undefined
	})
</script>

<style scoped>
	.catLogo {
		display: flex;
		align-content: flex-start;
		width: 100px;
		margin-left: 25px;
	}
	.loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
	}
	.textList {
		font-weight: bold;
		margin-top: 15px;
		font-size: small;
	}
	.flat-icon {
		transform: scaleY(0.4);
		border-radius: 0;
	}
</style>
