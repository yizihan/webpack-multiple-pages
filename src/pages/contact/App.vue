<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/Header'
export default {
  name: 'App',
  components: {
    'v-header': Header
  }
}
</script>

<style>

</style>
