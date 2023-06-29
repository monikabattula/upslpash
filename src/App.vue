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

const init = async () => {
		useCat.checkLocalStorage()
	}
  init()
</script>

<style >
:root{

  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>