<template>
  <div class="belle-controlanddata-container" @click="onclick()">
    <slot name="button"  v-if="isShow"/>
  </div>
</template>
<script>
export default {
  name: 'ControlAndData',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShow: true
    }
  },
  mounted () {
    const path = this.$router.options.routes[0].path
    let rule = localStorage.getItem('rule')
    const ruleobj = JSON.parse(rule)
    this.isShow = this.id ? !!ruleobj[path][this.id] : true
  },
  methods: {
    onclick () {
      // window._hmt.push(['_trackEvent', 'music', 'play', 'Hey Jude'])
    }
  }
}
</script>
<style>

</style>
