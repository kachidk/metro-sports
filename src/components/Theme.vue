<script>
import { ref, onMounted } from "@vue/composition-api";
import 'vue-awesome/icons/lightbulb';
import 'vue-awesome/icons/moon';

export default {
  setup() {
    const themeIconState = ref(true);

    function toggleDarkMode() {
      document.body.classList.toggle("dark");
      // Let's say the theme is equal to light
      let theme = "light";
      // If the body contains the .dark-theme class...
      if (document.body.classList.contains("dark")) {
        // ...then let's make the theme dark
        theme = "dark";
      }
      // Then save the choice in localStorage
      localStorage.setItem("theme", theme);

      // toggle the icon state to change the icon  
      themeIconState.value = !themeIconState.value;
    }

    onMounted(() => {
      const currentTheme = localStorage.getItem("theme");

      // If the current theme in localStorage is "dark"...
      if (currentTheme == "dark") {
        // ...then use the .dark-theme class
        document.body.classList.add("dark");
      }

      if (document.body.classList.contains("dark")) {
            themeIconState.value = false;
      }

      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

      if(!currentTheme){
        if (prefersDarkScheme.matches) {
        document.body.classList.add('dark');
        } 
      }

    });

    return {
      toggleDarkMode,
      themeIconState
    };
  },
};
</script>

<template>
  <div @click="toggleDarkMode()">
    <div v-if="themeIconState">
      <v-icon name="lightbulb" scale="1.5" />
    </div>
    <div v-if="!themeIconState">
      <v-icon name="moon" scale="1.5" />
    </div>
  </div>
</template>

<style lang="scss">

</style>
