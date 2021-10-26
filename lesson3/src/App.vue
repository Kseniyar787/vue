<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.header]">My personal costs</div>
      </header>
      <main>
        <button :class="[$style.btnShowForm]" @click="showForm = !showForm">ADD NEW COST +</button>
        <add-payment-form @addNewPayment="addDataToPaymentList"  v-show="showForm"/>
        <payments-display :items="paymentList"/>
        <pagination/>
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data() {
    return {
      paymentList: [],
      showForm: false
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532
        }
      ];
    },
    addDataToPaymentList(item) {
      this.paymentList.push(item)

    }
  },
  created() {
    this.paymentList = this.fetchData();
  }
};
</script>

<style lang="scss" module>
.btnShowForm {
    background: #a4cbdb;
    margin: 20px 0 20px 20px;
    border: 1px solid #79adc3;
}
.wrapper {
  background: #f5f5f5;
}
.header {
  color: black;
  font-weight: 400;
  font-size: 25px;
  margin-left: 20px ;
}
</style>