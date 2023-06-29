<template>
	<v-container fluid>
		<!-- {{ useCat.topSearch }} -->
		<v-card class="rounded-t-xl ml-6 mr-6" elevation="0">
        <p class="text-h5 font-weight-bold mb-10 ml-2">Top 10 most searched breeds</p>
			<v-row v-for="(topCat, index) in useCat.topSearch" :key="topCat.name">
				<v-col md="3" lg="3" xs="6">
					<v-card width="200" height="200" class="rounded-xl" elevation="0">
						<v-img class="rounded-image" cover  :src="topCat.imgUrl"  ></v-img>
					</v-card>
				</v-col>
				<v-col md="9" lg="9" xs="6">
					<p class="font-weight-bold text-h6">{{ index + 1 }} - {{ topCat.name }}</p>
					<p class="text-caption mt-4 text-center">{{ topCat.description }}</p>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
	<div class="loading" v-if="isLoader">
		<v-progress-circular color="primary" indeterminate :size="72"></v-progress-circular>
	</div>
</template>

<script setup>
	import { useCatStore } from '../store/catStore'
	import { ref } from 'vue'
	const useCat = useCatStore()
	const isLoader = ref(true)
	setTimeout(() => {
		isLoader.value = false
	}, 3000)
</script>

<style scoped>
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
    .rounded-image {
  object-fit: cover; 
  width: 100%; 
  height: 100%; 
  /* border-radius: 100%; */
}
</style>
