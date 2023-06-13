<!-- tempelate -->
<template>
  <div>
    <!-- logo -->
    <div class="TopNavigationBar">
      <div :class="logo">{{ text }}</div>
      <!--vbing - creating a dynamic style-->
      <!-- routes -->
      <div class="routes">
        <div><a href="" class="route">home</a></div>
        <div><a href="" class="route">tickets</a></div>
        <div><a href="" class="route">about</a></div>
      </div>
    </div>
  </div>
  <div>{{ msg }}</div>
  <div v-if="imageOfCar">
    <img class="picha" :src="imageOfCar" />
  </div>
  <div v-else>No image found</div>
  <div>{{ age }}</div>

  <button @click="increaseAge">add age</button>
  <button @click="decreaseAge">reduce age</button>
</template>
<!-- script -->
<script>
export default {
  //props is tacked ith passing data from parent component to child component
  props: ["msg"],
  data() {
    return {
      text: "tujengane",
      logo: "logo",
      age: 0,
      imageOfCar: "",
    };
  },
  methods: {
    // alterColor(){
    //   console.log("alterColor");
    //   this.logo = 'test';
    //   this.text="Hello David"
    // this.imageOfLand='./src/assets/vue.svg'

    toggleImage() {
      if (this.age >= 10 && this.age <= 20) {
        this.imageOfCar =
          "https://images.pexels.com/photos/249344/pexels-photo-249344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      } else if (this.age >= 21) {
        this.imageOfCar =
          "https://images.pexels.com/photos/12393012/pexels-photo-12393012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
      } else {
        this.imageOfCar = "";
      }
    },
    //increment age
    increaseAge() {
      //increment by 1
      this.age++;
      //check if age has reached 10
      //if so change image
      this.toggleImage();
    },
    decreaseAge() {
      this.age--;
      this.toggleImage();
    },
  },
};
</script>
<!-- style -->
<style>
/* Styling to handle top navigation */
.TopNavigationBar {
  display: flex;
  position: relative;
  justify-content: space-between;
}

/* Styling the logo */
.logo {
  margin-top: 48px;
  font-size: 36px;
  color: #f63505;
  font-family: courier new, monospace;
  text-decoration: none;
}

.but {
  background-color: aqua;
}
.test {
  font-family: roboto;
  color: aqua;
}
/* Styling the navigation buttons */
.route {
  color: #f63505;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}
.route:hover {
  background-color: #33d3fb;
  font-size: 150%;
  border-radius: 2px;
  animation-name: bounce;
  animation-duration: 3s;
}

/* Styling the navigation buttons */
.routes {
  display: flex;
  font-size: 22px;
}
.picha {
  width: 100px;
}
</style>
