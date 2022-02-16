<template>
  
  <div>
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layouts/layouts-header.vue"
export default {
  name: "App",
  components: {
    Header
  }
}
</script>
