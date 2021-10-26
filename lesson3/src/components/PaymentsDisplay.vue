<template>
    <div class="wrapper">
    <table class="tableMain">
  <tr>
    <th>#</th>
    <th>Date</th>
    <th>Category</th>
    <th>Value</th>
  </tr>
    <tr class="trItem" v-for="(item, idx) in items" :key="idx"> 
        <td class="tdStyle">{{ idx+1 }}</td>
        <td class="tdStyle">{{ item.date }}</td>
        <td class="tdStyle">{{ item.category }}</td>
        <td class="tdStyle">{{ item.value }}</td>
        <br>
    </tr>

</table>
      
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
};
</script>

<style lang="scss" scoped>
.wrapper {
    background: #f5f5f5; 
}

.tdStyle {
    padding: 0 20px 0 20px;
    border-bottom: 1px solid #d0cece;
}
.tableMain {
    border-spacing: 0;
}

</style>