<script setup>
import { reactive, ref } from "vue"
import magnifier from "../assets/magnifier.svg"
let query = ref("");
let isFocus = ref(false)
</script>
<template>
  <div class="searchbar">
    <img :src="magnifier" class="magnifier" :class="{ rotate: isFocus }">
    <input type="text" v-model="query" placeholder="Search here..." class="query-field" @focus="isFocus = true"
      @blur="isFocus = false" />
  </div>
</template>
<style lang="css">
.searchbar {
  display: flex;
  font-size: 16px;
}

.query-field {
  margin-left: 8px;
  border-style: none;
  width: 100%;
}

.query-field::placeholder {
  color: var(--secondary);
  opacity: .8;
}

.query-field:focus-visible {
  border-style: none;
  outline: none;
  width: 412px;
  border-bottom: solid 1.5px var(--primary);
  transition: all .2s ease;
}

.rotate {
  animation: rotateImage360 0.6s ease;
}

@keyframes rotateImage360 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
