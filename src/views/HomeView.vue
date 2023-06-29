<template>
	<v-container fluid class="center">
		<v-card class="ml-4 mr-4 rounded-t-xl" >
			<div class="buscador d-none d-sm-inline">
				<v-img src="../assets/CatwikiLogo.svg" class="catLogoLarge "></v-img>
				<p class="text-h5 text-white mb-10 mt-4 ml-4 d-none d-sm-flex">
					Get to know more about your cat breed
				</p>
				
				<v-autocomplete
					:items="useCat.catBreeds.breeds"
					item-text="name"
					append-inner-icon="mdi-magnify"
					v-model="searchTerm"
					auto-select-first
					class="flex-full-width "
					density="comfortable"
					item-props
					menu-icon=""
					placeholder="Select your breed"
					rounded="lg"
					theme="light"
					variant="solo"
					clearable
					@update:model-value="changeBreed()"
					@click:append-inner="changeBreed()"
				></v-autocomplete>
			</div>
			<div class="buscadorXS d-sm-none">
				<v-img src="../assets/CatwikiLogo.svg" class="catLogoXS"></v-img>
				<p class="text-white text-caption">
					Get to know more about<br> your cat breed
				</p>
				<v-autocomplete
					:items="useCat.catBreeds.breeds"
					item-text="name"
					append-inner-icon="mdi-magnify"
					v-model="searchTerm"
					auto-select-first
					class="buscadorPequeño mt-4"
					density="compact"
					item-props
					menu-icon=""
					placeholder="Search"
					rounded="xl"
					theme="light"
					variant="solo"
					@update:model-value="changeBreed()"
					@click:append-inner="changeBreed()"
				></v-autocomplete>
			</div> 
			<v-img
				v-if="name == 'xxl' || name == 'xl' || name == 'lg'"
				src="../assets/HeroImagelg.png"
				lazy:src="../assets/HeroImagelg.png"
				cover
			></v-img>
			<v-img
				v-if="name == 'md'"
				src="../assets/HeroImagemd.png"
				lazy:src="../assets/HeroImagemd.png"
				cover
			></v-img>
			<v-img
				v-if="name == 'sm' || name == 'xs'"
				src="../assets/HeroImagesm.png"
				lazy:src="../assets/HeroImagesm.png"
				cover
			></v-img>
		</v-card>
		
		<v-card class="bg-red-lighten-5 ml-4 mr-4 rounded-b-xl">
			<v-card-title class="ml-10 pl-10 mt-6 text-h6"
				><span class="most">Most</span> Searched Breeds</v-card-title
			>
			<v-card-text class="ma-10 pa-10">
				<v-row>
					<v-col cols="12">
						<p class="text-h3 d-none d-sm-inline">66+ breeds For you</p>
						<p class="text-h3 d-none d-sm-inline">to discover</p>
						<p class="text-h5 d-sm-none">66+ breeds For you</p>
						<p class="text-h5 d-sm-none">to discover</p>
						<RouterLink to="/TopSearch" class="read d-none d-sm-inline mt-2">
						<p class="text-right text-h6 mb-6 ">
							SEE MORE <v-icon class="mb-1" icon="mdi-arrow-right-thin"></v-icon>
						</p>
						</RouterLink>
						<RouterLink to="/TopSearch" class="read d-sm-none">
						<p class="text-right text-caption mb-6">
							SEE MORE <v-icon class="mb-1" icon="mdi-arrow-right-thin"></v-icon>
						</p>
						</RouterLink>
					</v-col>
					<v-col
						cols="12"
						xs="6"
						md="3"
						lg="3"
						xl="4"
						xxl="4"
						v-for="images in useCat.catBreeds.images"
						:key="images.imageUrl"
					>
						<v-card class="rounded-xl" >
							<v-img
								:src="images.imageUrl"
								:lazy:src="images.imageUrl"
								height="250"								
								cover
							></v-img>
						</v-card>
						<p class="mt-2 text-h6">{{ images.name }}</p>
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
	</v-container>
	<v-container class="center">
		<v-row>
			<v-col cols="6">
				<span class="text-h5 ">____</span>
				<p class="mt-4 text-h3">Why should you have a cat?</p>
				<p class="mt-10 text-h6">
					Having a cat around you can actually trigger the release of calming chemicals in
					your body which lower your stress and anxiety leves.
				</p>
				<RouterLink to="/TopSearch">
						<p class=" text-h6 mb-6 readmore mt-16">
							READ MORE <v-icon class="mb-1" icon="mdi-arrow-right-thin"></v-icon>
						</p>
						</RouterLink>
			</v-col>
			<v-col cols="6">
				<v-row>
					<v-col cols="6">
						<v-img src="../assets/image 2.png"></v-img>
						<v-img src="../assets/image 1.png" class="mt-4"></v-img>
					</v-col>
					<v-col cols="6">
						<v-img src="../assets/image 3.png"></v-img>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>

	<div class="loading" v-if="isLoader">
		<v-progress-circular color="primary" indeterminate :size="92"></v-progress-circular>
	</div>
</template>

<script setup>
	import { ref, computed, watchEffect } from 'vue'
	import { useCatStore } from '../store/catStore'
	import { useDisplay } from 'vuetify'
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const searchTerm = ref()
	const useCat = useCatStore()
	const isLoader = ref(false)
	const loader = ref(false)
	// watchEffect(() => {
	// 	console.log(searchTerm.value)
	// })

	const changeBreed = () => {
		if (searchTerm.value == undefined) return
		loader.value = true
		setTimeout(() => {
			loader.value = false
			router.push({ name: 'BreedInfo', params: { searchTerm: searchTerm.value } })
		}, 3000)
	}

	const { name } = useDisplay()

	const displayHeight = computed(() => {
		// name is reactive and
		// must use .value
		console.log(name.value)
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

	const topBreeds = ref([
		'Siamese',
		'Persian',
		'Maine Coon',
		'Ragdoll',
		'Bengal',
		'Abyssinian',
		'Birman',
		'Sphynx',
		'Devon Rex',
		'Himalayan',
	])
	const init = async () => {
		isLoader.value = true
		let idBreeds = []
		useCat.catBreeds.listOfBreeds.some((breed) => {
			if (topBreeds.value.includes(breed.name)) {
				idBreeds.push({ imgId: breed.reference_image_id, name: breed.name })
			}
		})
		// console.log({idBreeds})
		setTimeout(() => {
			isLoader.value = false
		}, 3000)
		await useCat.getTopSearch(idBreeds)
		
		
	}
	setTimeout(() => {
		
		init()
	}, 5000);
</script>

<style scoped>
	
	.most {
		text-decoration-line: underline;
		text-decoration-color: rgb(0, 0, 11);
		text-decoration-style: solid; /* Puedes ajustar el estilo según tus preferencias */
		text-decoration-thickness: 35%;
	}
	.buscador {
		position: absolute;
		top: 30%;
		left: 10%;
		width: 350px;
		z-index: 9999;
	}
	.buscadorXS {
		position: absolute;
		top: 10%;
		left: 10%;
		width: 350px;
		z-index: 9999;
	}
	.buscadorPequeño{
		width: 150px;
		height: 10px;
	}
	.catLogoLarge {
		display: flex;
		align-content: center;
		width: 200px;
		margin-left: 50px;
		color: white;
		filter: invert(100%) saturate(0);
	}
	.catLogoXS {
		display: flex;
		align-content: start;
		width: 80px;
		/* margin-left: 50px; */
		color: white;
		filter: invert(100%) saturate(0);
	}
	.center {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 9999;
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
	.readmore{
		font-size: large;
		font-weight: bold;
	}
	a:link,
	a:visited,
	a:active{
		text-decoration: none;
		color: black;
	}
</style>
