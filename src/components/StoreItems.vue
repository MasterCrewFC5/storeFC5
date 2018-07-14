<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Value</th>
      <th scope="col">Description</th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items">
      <th scope="row">{{ item.title }}</th>
      <td>{{ item.value }}</td>
      <td>{{ item.description }}</td>
      <td><PayPal
        :amount="item.value"
        currency="EUR"
        :client="credentials"
        env="sandbox">
      </PayPal></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import PayPal from 'vue-paypal-checkout'

  export default {
    data () {
      return {
        items: [],
        credentials: {
          sandbox: 'ATGx_lCT59S-knOhjlftcYvwZqQSzsimqsNTNEzjCBu3p54i1Tb_JpNttE_ayAgbXtUXyoINAXSN3VHq',
          production: ''
        }
      }
    },
    created () {
      this.$http.post('http://localhost:8000/api/storeitems', {perPage: -1})
        .then(response => {
          // JSON responses are automatically parsed.
          this.items = response.data.result.items
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    components: {
      PayPal
    }
  }
</script>
