<template>
  <main>
  <HeaderAppVue />
    <router-view></router-view> 
    <FooterApp />
  </main>
</template>

<script setup>
	import { useCatStore } from './store/catStore'
import FooterApp from './layouts/FooterApp.vue';
import HeaderAppVue from './layouts/HeaderApp.vue';
	const useCat = useCatStore()
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
		await useCat.checkLocalStorage()
    setTimeout(() => {
      let idBreeds = []
		useCat.catBreeds.listOfBreeds.some((breed) => {
			if (topBreeds.value.includes(breed.name)) {
				idBreeds.push({ imgId: breed.reference_image_id, name: breed.name })
			}
		})
    console.log({idBreeds})
		useCat.getTopSearch(idBreeds)

    }, 5000);

	}
  init()
</script>

<style >
:root{

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>