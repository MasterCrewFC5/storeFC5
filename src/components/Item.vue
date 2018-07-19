<template>
  <div>
    <b-card :title="item.title"
            :sub-title="item.value">
      <p class="card-text">
        {{ item.descripton }}
      </p>
      <PayPal
        :amount="item.value"
        currency="EUR"
        :client="credentials"
        env="sandbox"
        v-on:payment-authorized="payment">
      </PayPal>
    </b-card>
  </div>
</template>

<script>
  import PayPal from 'vue-paypal-checkout'

  export default {
    name: 'Item',
    data () {
      return {
        item: '',
        credentials: {
          sandbox: 'ATGx_lCT59S-knOhjlftcYvwZqQSzsimqsNTNEzjCBu3p54i1Tb_JpNttE_ayAgbXtUXyoINAXSN3VHq',
          production: ''
        }
      }
    },
    created () {
      this.$http.get('http://localhost:8000/api/storeitem/' + this.$route.params.id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.item = response.data.result
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    methods: {
      payment: function (event) {
        console.log(event)
      }
    },
    components: {
      PayPal
    }
  }
</script>
