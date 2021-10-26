<template>
   <div> 
    
    <div class="form">
        <input type="text" placeholder="DD.MM.YYYY" v-model="date">
        <input class="inutCategory" type="text" placeholder="Category" v-model="type">
        <input type="text" placeholder="Value" v-model="value">
        <button class="btnSaveInfo" @click="onSave">Save</button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    data() {
    return { 
      value:'',
      type:'',
      date:''
    }
    },
    computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    }
    },

    methods: {
    onSave() {
      const data = {
        date : this.date || this.getCurrentDate,
        category :  this.type,
        value : +this.value  
      }

      this.$emit('addNewPayment', data)
    }
    }
}
</script>

<style lang="scss" scoped>
.btnShowForm {
    background: #a4cbdb;
    margin: 20px 0 20px 20px;
    border: 1px solid #79adc3;
}
.form {
  margin-bottom: 20px;
  width: 50px;
}
.btnSaveInfo {
  margin-top: 7px;
}
.inutCategory {
  margin: 4px 0 4px 0;
}
</style>