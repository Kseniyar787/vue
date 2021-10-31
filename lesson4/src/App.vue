<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.header]">My personal costs</div>
      </header>
      <main>
        <button :class="[$style.btnShowForm]" @click="showForm = !showForm">ADD NEW COST +</button>
        <add-payment-form @addNewPayment="addDataToPaymentList"  v-show="showForm"/>
        <payments-display :items="currentPaymentList"/>
        <pagination :items="paymentList"
        @pageDataChanged="showData"
        :countOfRow="countOfRow" 
        :curPage="page"
        />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from './components/AddPaymentForm.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import Pagination from './components/Pagination.vue';
import { mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination
  },
  data() {
    return {
      showForm: false,
      countOfRow: 3,
      page: 1
    };
  },
    computed: {
       ...mapGetters({
      paymentList: 'getPaymentsList'
    }),
        currentPaymentList() {
            // const bindex = this.countOfRow * (this.page - 1);
            const bindex = this.paymentList.findIndex(el => el.ordernum === (this.page - 1) * this.countOfRow)
            console.log(bindex);
            return this.paymentList.slice(bindex, bindex + this.countOfRow);
        }
     },
  methods: {
     ...mapMutations({
      myMutationName: 'setPaymentListData',
      myMutationNameFiltred: 'addPaymentsListData'
    }),
     ...mapActions({
      fetchData: 'fetchData'
     }),

 addDataToPaymentList(item) {
      this.paymentList.push(item);
    },
    showData(page) {
        this.page = page;
        this.fetchData(page);
    }
  },
  created() {
    // console.log(this.fetchData());
    // this.myMutationName(this.fetchData()); 
    this.fetchData(this.page);
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