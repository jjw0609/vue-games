<template>
  <div class="container">
    <div class="row mt-sm-5">
      <lotto-ball v-for="num in lottoSet" :key="num" :lottoNum="num"></lotto-ball>
    </div>
  </div>
  <div class="refresh">
    <button @click="init">새로고침</button>
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue'

export default {
  name: 'LottoMain',
  components:{
    LottoBall
  },
  methods: {
    init() {
      this.lottoSet = new Set();
      console.log(typeof this.lottoSet)
      while (this.lottoSet.size != 6) {
        const lottoNum = Math.floor(Math.random() * 45 + 1)
        this.lottoSet.add(lottoNum);
        const sorted = Array.from(this.lottoSet).sort((a, b) => a-b);
        this.lottoSet = new Set(sorted);
      }
      for (let temp of this.lottoSet) {
        console.log(temp)
      }
    },
  },
  data() {
    return {
      lottoSet : new Set()
    }
  },
  created(){
    this.init();
    console.log(typeof this.lottoSet)
    while (this.lottoSet.size != 6) {
      const lottoNum = Math.ceil(Math.random() * 45 + 1)
      this.lottoSet.add(lottoNum)
    }

    for (let temp of this.lottoSet) {
      console.log(temp)
    }
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.refresh {
  text-align: center;
}
</style>