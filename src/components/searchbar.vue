<script setup>
	import magnifier from "../assets/magnifier.svg"
</script>
<template>
	<div class="searchbar">
		<input
		  type="text"
		  v-model="query"
		  placeholder="Search here..."
		  class="query-field"
		/>
		<img :src="magnifier" class="magnifier">
	</div>
</template>
<style lang="css"></style>
