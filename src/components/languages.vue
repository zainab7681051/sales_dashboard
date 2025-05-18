<script setup>
	import {reactive,ref} from "vue"
	import united from "../assets/united.svg"
	import downArrow from "../assets/arrow-down.svg"
	const langList=reactive([
		{flag:united, locale:"eng (us)"},
		{flag:united, locale:"eng (uk)"},
		{flag:united, locale:"ar (iq)"},
		{flag:united, locale:"krd (iq)"}
	])
	let currentLang=reactive({
		flag:langList[0].flag, 
		locale:langList[0].locale
	})
</script>
<template>
  <div class="lang-container">
	<div class="flag"><img :src="currentLang.flag"></div>
	<div class="locale">{{currentLang.locale}}</div>
	<div class="down-arrow"><img :src="downArrow"></div>
	<div class="lang-list-container">
		<div class="language" v-for="lang in langList" :key="lang.locale" 
		@click="()=>{currentLang.flag=lang.flag; currentLang.locale=lang.locale}">
			<div v-if="currentLang.flag!=lang.flag" class="flag"><img :src="lang.flag"></div>
			<div v-if="currentLang.locale!=lang.locale" class="locale">{{lang.locale}}</div>
		</div>
	</div>
  </div>
</template>
<style lang="css"></style>
