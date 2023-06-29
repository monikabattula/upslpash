<template>
    <footer class="rounded-t-xl bg-black ml-10 mr-10">
		
        <v-row  class="mt-2">
        <v-col cols="2" >
            <v-img src="../assets/CatwikiLogo.svg" class="catLogo"></v-img>
        </v-col>
        <v-col cols="10">
        
        <p class="d-flex justify-end mr-10 mt-4">© Created by Julio Campos - devChallenger.io 2023 </p>
        </v-col>
        </v-row>
    </footer>
</template>

<script setup>

</script>


<style scoped>
.catLogo {
		display: flex;
		align-content: flex-start;
		width: 100px; 
		 margin-left: 35px;
		filter: invert(100%) saturate(0);

	}
</style>
