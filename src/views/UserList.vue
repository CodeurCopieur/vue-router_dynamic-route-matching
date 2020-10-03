<template lang="pug">
  #userlist
    .container-list
      .list-user( v-for="(user, i) in userlist" :key="i")
        span {{ user.name }} 
        span {{ user.role }} 
        router-link( to="/user") profile
</template>

<script>
 export default {
   data: () => {
     return {}
   },
   computed: {
     userlist() {
       return this.$store.getters.userlist;
     }
   }
  }
</script>

<style lang="scss" scoped>
  
</style>