<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    <input type="number" v-model.number="numb1"/> 
    <input type="number" v-model.number="numb2" @input="check(numb2)"/>
    <p> Итог: {{result}} </p>
    <button @click="sum (numb1, numb2)">+</button>
    <button @click="differ (numb1, numb2)">-</button>
    <button @click="mult (numb1, numb2)">*</button>
    <button @click="division (numb1, numb2)" :disabled="!isActive">/</button>
    <button @click="exponentiation (numb1, numb2)">X^</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

  data () {
  return {
        numb1:0,
        numb2:0,
        result:0,
        isActive: true
      }
  },

     methods: {
      sum (nub1, nub2) {
       this.result = nub1 + nub2;
      },

      differ (nub1, nub2) {
       this.result = nub1 - nub2;
      },

      mult (nub1, nub2) {
       this.result = nub1 * nub2;
      },

      check (nub2) {
        if (nub2 === 0) {
        this.isActive = false;
       } else this.isActive = true;
         
      },

      division (nub1, nub2) { 
       /* 1 вариант  if (nub2 === 0) this.result = 'На 0 делить нельзя'; */
       if (this.isActive === true);
       this.result = Math.floor(nub1 / nub2);
      },
      exponentiation (nub1, nub2) {
       this.result = Math.pow(nub1, nub2);
   }
   }
}
</script>
