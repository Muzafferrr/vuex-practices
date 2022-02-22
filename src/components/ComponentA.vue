<template>
<div>
  <input type="text" v-model="title">
  <button @click="sendTitle">Send Title</button>
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