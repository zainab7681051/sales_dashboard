<script setup>
import { reactive, ref, computed } from "vue"
import us from "../assets/united-states.png"
import uk from "../assets/uk.png"
import iraq from "../assets/iraq.png"
import turkey from "../assets/turkey.png"
import germany from "../assets/germany.png"
import france from "../assets/france.png"
import china from "../assets/china.png"
import japan from "../assets/japan.png"
import downArrow from "../assets/arrow-down.svg"

const langList = reactive([
  { id: 1, flag: us, locale: { language: "eng", region: "us" }, active: true },
  { id: 2, flag: uk, locale: { language: "eng", region: "uk" }, active: false },
  { id: 3, flag: iraq, locale: { language: "ar", region: "iq" }, active: false },
  { id: 4, flag: turkey, locale: { language: "tr", region: "tr" }, active: false },
  { id: 5, flag: germany, locale: { language: "de", region: "de" }, active: false },
  { id: 6, flag: france, locale: { language: "fr", region: "fr" }, active: false },
  { id: 7, flag: china, locale: { language: "zh", region: "ch" }, active: false },
  { id: 8, flag: japan, locale: { language: "ja", region: "jp" }, active: false }
])
let currentLang = reactive({
  flag: langList[0].flag, //eng(us) as default locale
  locale: langList[0].locale
})
const langListDropdown = computed(() => {
  return langList.filter((l) => l.active != true)
})
const change_lang = (lang, i) => {
  currentLang.flag = lang.flag;
  currentLang.locale = lang.locale
  langList.forEach((l, i) => {
    if (l.id === lang.id) {
      langList[i].active = true
    } else {
      langList[i].active = false
    }
  })
}
let isHovered = ref(false)
</script>
<template>
  <div class="lang-container">

    <div class="current_lang_container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="flag"><img :src="currentLang.flag"></div>
      <div class="locale poppins-semibold">
        <span class="locale-language">{{ currentLang.locale.language }}</span>
        <span class="locale-region">&nbsp;({{ currentLang.locale.region }})</span>
      </div>
      <div class="down-arrow" :class="{ rotate180: isHovered }"><img :src="downArrow"></div>
    </div>

    <div class="lang-list-container" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <div class="language" v-for="lang in langListDropdown" :key="lang.locale" @click="change_lang(lang)">
        <div class="flag"><img :src="lang.flag"></div>
        <div class="locale poppins-semibold">
          <span class="locale-language">{{ lang.locale.language }}</span>
          <span class="locale-region">&nbsp;({{ lang.locale.region }})</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.lang-container {
  position: relative;
  display: flex;
  font-size: 16px;
  cursor: pointer;
}

.current_lang_container {
  display: flex;
  align-items: center;
  padding: 10px;
}

.flag {
  margin-right: 15px;
}

.locale {
  margin-right: 8px;
  color: var(--secondary);
}

.locale-language {
  text-transform: capitalize;
}

.locale-region {
  text-transform: uppercase;
}

.lang-list-container {
  position: absolute;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 0px;
  top: -50px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  background-color: white;
  transition: all .2s ease;
}

.language {
  display: flex;
  align-items: center;
  padding: 0 10px;
}

.language:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.current_lang_container:hover~.lang-list-container,
.lang-list-container:hover {
  opacity: 1;
  visibility: visible;
  top: 50px;
}

.rotate180 {
  transform: rotate(180deg);
  transition: transform .2s ease;
}
</style>
