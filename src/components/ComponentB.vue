<template>
<div>
  {{this.$store.getters.getTitle2}}
  <input type="text" v-model="title"
         :placeholder="this.$store.getters.getTitle"
          @keyup.enter="sendTitle()"
  >
</div>
</template>

<script>
export default {
  data(){
    return{
      title:''
    }
  },
  methods:{
    sendTitle(){
      this.$store.dispatch('setTitleActions2', this.title)
    }
  }
}
</script>

<style scoped>

</style>