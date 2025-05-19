<script setup>
import { reactive, ref } from "vue"
import bellImg from "../assets/bell.svg"
import downArrow from "../assets/arrow-down.svg"
import userImg from "../assets/admin-photo.png"
let userInfo = reactive({
  img: userImg,
  name: "Musfiq",
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
        <p class="username poppins-semibold">{{ userInfo.name }}</p>
        <p class="user-role poppins-light">{{ userInfo.role }}</p>
      </div>
    </div>
    <div class="down-arrow">
      <img :src="downArrow">
    </div>
    <div class="menu"></div>
  </div>
</template>
<style lang="css" scoped>
.menu-container {
  display: flex;
  align-items: center;
  gap: 21px;
  position: relative;
  cursor: pointer;
}

.user-img-container {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.username {
  font-size: 18px;
}

.user-role {
  color: var(--secondary);
}

.down-arrow {
  transform: translateY(-16px);
}

.bell-container {
  position: relative;
  padding: 5px;
}

.bell-container::before {
  position: absolute;
  content: "";
  background: red;
  border-radius: 5px;
  width: 6.6px;
  height: 6.6px;
  top: 0;
  right: 0;
  transition: transform 0.2s;
}

.bell-container:hover {
  animation: bellRing 0.6s ease-in-out;
}

@keyframes bellRing {
  0% {
    transform: rotate(0);
  }

  15% {
    transform: rotate(25deg);
  }

  30% {
    transform: rotate(-25deg);
  }

  45% {
    transform: rotate(15deg);
  }

  60% {
    transform: rotate(-15deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0);
  }
}
</style>
