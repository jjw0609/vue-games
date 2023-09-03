<template>
  <body>
    <header-common></header-common>
    <rsp-main></rsp-main>
    <FooterCommon></FooterCommon>
  </body>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue';
import FooterCommon from '../components/common/FooterCommon.vue';
import RspMain from '../components/rsp/RspMain.vue'

export default {
  components: {
    HeaderCommon,
    RspMain,
    FooterCommon
  }
}
</script>

<style scoped>
body {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>