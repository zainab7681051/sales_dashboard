<script setup>
	import {reactive,ref} from "vue"
	import bellImg from "../assets/bell.svg"
	import downArrow from "../assets/arrow-down.svg"
	import userImg from "../assets/admin-photo.png"
	let userInfo=reactive({
		img:userImg,
		name:"Musfiq",
		role: "Admin"
	})
</script>
<template>
  <div class="menu-container">
  	<div class="bell-container">
  		<img :src="bellImg">
  	</div>
  	<div class="user-img-container">
  		<div class="user-img">
  			<img :src="userInfo.img">
  		</div>
  		<div class="info">
  			<p class="username">{{userInfo.name}}</p>
  			<p class="user-role">{{userInfo.role}}</p>
  		</div>
  	</div>
  	<div class="down-arrow">
  		<img :src="downArrow">
  	</div>
  	<div class="menu"></div>
  </div>
</template>
<style lang="css"></style>
