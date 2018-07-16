<template>
  <b-alert :variant="variant" show>{{  }}</b-alert>
</template>

<script>
  export default {
    name: 'Registration',
    data () {
      return {
        variant: 'danger',
        msg: ''
      }
    },
    created () {
      this.$http.get('http://localhost:8000/api/users/activateAccount/' + this.$route.params.token)
        .then(response => {
          // JSON responses are automatically parsed.
          this.msg = 'Vous êtes désormais inscrits'
          this.variant = 'success'
        })
        .catch(e => {
          this.msg = 'Une erreure est survenue'
          this.variant = 'danger'
        })
    }
  }
</script>
