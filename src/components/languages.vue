<script setup>
	import {reactive,ref,computed} from "vue"
	import united from "../assets/united.svg"
	import downArrow from "../assets/arrow-down.svg"
	const langList=reactive([
		{id:1,flag:united, locale:"eng (us)", active: true},
		{id:2,flag:united, locale:"eng (uk)", active: false},
		{id:3,flag:united, locale:"ar (iq)", active: false},
		{id:4,flag:united, locale:"krd (iq)", active: false}
	])
	let currentLang=reactive({
		flag:langList[0].flag, 
		locale:langList[0].locale
	})
	const langListDropdown=computed(()=>{
		return langList.filter((l)=>l.active!=true)
	})
	const change_lang=(lang,i)=>{
		currentLang.flag=lang.flag; 
		currentLang.locale=lang.locale
		langList.forEach((l,i)=>{
			if(l.id===lang.id){
				langList[i].active=true
			}else{
				langList[i].active=false
			}
		})
			console.log(langList.filter((l)=>l.active!=true))
	}
	let isHovered=ref(false)
</script>
<template>
  <div class="lang-container">
	
	<div class="current_lang_container"
	@mouseenter="isHovered=true"
	@mouseleave="isHovered=false">
		<div class="flag"><img :src="currentLang.flag"></div>
		<div class="locale poppins-semibold">{{currentLang.locale}}</div>
		<div class="down-arrow" :class="{rotate180:isHovered}"><img :src="downArrow"></div>
	</div>

	<div class="lang-list-container"
	@mouseenter="isHovered=true"
	@mouseleave="isHovered=false">
		<div class="language" v-for="lang in langListDropdown" :key="lang.locale" 
		@click="change_lang(lang)">
			<div class="flag"><img :src="lang.flag"></div>
			<div class="locale poppins-semibold">{{lang.locale}}</div>
		</div>
	</div>
  </div>
</template>
<style lang="css" scoped>
	.lang-container{
		position: relative;
		display: flex;
		font-size: 18px;
		cursor: pointer;
	}
	.current_lang_container{
		display: flex;
		padding: 10px;
	}
	.flag{
		margin-right: 15px;
	}
	.locale{
		margin-right: 8px;
		text-transform: uppercase;
		color: var(--secondary);
	}
	.lang-list-container{
		position: absolute;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 10px 0px;
		transform: translateY(-10%);
		opacity: 0;
		visibility: hidden;
		cursor: pointer;
		transition: all .1s ease;
	}
	.language{
		display: flex;
		padding: 0 10px;
	}
	.language:hover{
		background-color:rgba(0, 0, 0, 0.1);
	}
	.current_lang_container:hover~.lang-list-container,
	.lang-list-container:hover{
		opacity: 1;
		visibility: visible;
		transform: translateY(40%);
	}
	.rotate180{
		transform: rotate(180deg);
		transition: transform .2s ease;
	}
</style>
