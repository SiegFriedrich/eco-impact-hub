<script setup lang="ts">
</script>

<template>
  <router-view />
</template>

<style lang="scss">
// If you add scoped in this style declaration, the font won't be active globally. 

//Problems Solutions
/**
When i use element select, i found the arrow is located in the upper area of the container, no matter how i solve it,
i cannot be fixed. Then i found its the [* -> margin 0 0 5px 0] did the wrong thing. You should not modify [*] coz it change every elements in the project.
*/
* {
  margin: 0px;
  padding: 0px;
}

html,
body,
#app {
  font-family: 'Helvetica Neue', Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  width: 100%;
}
</style>
