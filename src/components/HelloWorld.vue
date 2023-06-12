<template>
  <div>
    <h1>{{ count }}</h1>
    <h1>name: {{ name }}</h1>
    <h1>session: {{ session }}</h1>
    <h1>date: {{ date }}</h1>
    <button @click="increaseCountValue">add</button><br/>
    <button @click="decreaseCountValue">reduce</button>
  </div>
</template>

<script>
export default {
  //this here is the props option
  props: ["msg"],
  //dat aoption
  data() {
    return {
      count: 0,
      name: "Ericson Lab",
      date: "12th June 2023",
      session: 10,
    };
  },

  //methods option
  methods: {
    //this method focuses on increasing the nth value of count
      increaseCountValue(){
      //get count variable from data option
      //increment it by one
      this.count++;
    },
    //this method focuses on decreasing the nth value of count
    decreaseCountValue(){
      //get count variable from data option
      //decrement it by one
      if(this.count === 0){
        this.count = 0;
      }else{
        this.count--;
      }
    },
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
