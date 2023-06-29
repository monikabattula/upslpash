<template>
    <header>
        <v-tooltip text="Go home">
  <template v-slot:activator="{ props }">
    
		<RouterLink to="/Home">
            <v-img v-bind="props" src="../assets/CatwikiLogo.svg" class="catLogo"></v-img>
        </RouterLink>
  </template>
</v-tooltip>

    </header>
</template>

<script setup>

</script>


<style scope>
.catLogo {
		display: flex;
		align-content: flex-start;
		width: 100px;
        margin-top: 15px;
        margin-left: 40px;
        z-index: 9999;
		filter: invert(0) saturate(100%);
	}
</style>
