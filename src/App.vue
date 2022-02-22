<template>
<!--  <div>-->
<!--    {{this.$store.state.title}} <br>-->
<!--    {{this.$store.getters.getTitle}} <br>-->
<!--    <button @click="changeTitle">Change Title</button>-->
<!--  </div>-->
  <div>
    <ComponentA></ComponentA>
    <ComponentB></ComponentB>
  </div>
</template>

<script>
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";
export default {
  name: 'App',
  methods:{
    changeTitle(){
      //this.$store.commit('setTitle', 'new Title')
      this.$store.dispatch('setTitleActions', 'big title')
    }
  },
  components:{
    ComponentA,
    ComponentB
  }
}
</script>