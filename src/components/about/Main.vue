<template>
  <div class="main-wrapper">
    <iframe v-if="iframeUrl" :src="iframeUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      iframeUrl: null,
      urlData: {
        'vue': 'https://cn.vuejs.org/index.html',
        'webpack': 'https://www.webpackjs.com/'
      }
    }
  },
  created () {
    this.toggleIframeUrl()
  },
  methods: {
    toggleIframeUrl () {
      var pathUrl = this.$route.path.substring(1)
      if (this.urlData[pathUrl]) {
        this.iframeUrl = this.urlData[pathUrl]
      }
    }
  },
  watch: {
    '$route': 'toggleIframeUrl'
  }
}
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
