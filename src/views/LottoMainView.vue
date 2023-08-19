<template>
  <div class="lotto">
    <header-common></header-common>
    <lotto-main></lotto-main>
    <FooterCommon></FooterCommon>
  </div>
</template>

<script>
import HeaderCommon from '../components/common/HeaderCommon.vue';
import FooterCommon from '../components/common/FooterCommon.vue';
import LottoMain from '../components/lotto/LottoMain.vue'

export default {
  name: 'LottoMainView',
  components:{
    HeaderCommon,
    FooterCommon,
    LottoMain
  },
}
</script>

<style scoped>

</style>