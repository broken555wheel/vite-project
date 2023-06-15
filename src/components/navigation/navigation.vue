<!-- tempelate -->
<template>
  <div>
    <!-- logo -->
    <div class="TopNavigationBar">
      <div :class="logo">tujengane</div>
      <!--vbind - creating a dynamic style-->
      <!-- routes -->
      <div class="routes">
        <div><a href="" class="route">home</a></div>
        <div><a href="" class="route">tickets</a></div>
        <div><a href="" class="route">about</a></div>
      </div>
    </div>
  </div>
  <div v-for="movie in movies" :key = "movie.id">
    <!-- name -->
  <div>{{ movie.name }}</div>
  <!-- type -->
  <div>{{ movie.type }}</div>
  <!-- year of production -->
  
  <!-- <div>{{ checkIfCurrnentYear(movie.yearOfProduction) }}</div> -->
  <!-- rating -->
  <div>{{ movie.rating}}</div>
  <!-- <div v-for="item in movie.rating" :key="item">
<svg class = "star" width="10px" height="10px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.65 8.93274L12.4852 4.30901C12.2923 3.89699 11.7077 3.897 11.5148 4.30902L9.35002 8.93274L4.45559 9.68243C4.02435 9.74848 3.84827 10.2758 4.15292 10.5888L7.71225 14.2461L6.87774 19.3749C6.80571 19.8176 7.27445 20.1487 7.66601 19.9317L12 17.5299L16.334 19.9317C16.7256 20.1487 17.1943 19.8176 17.1223 19.3749L16.2878 14.2461L19.8471 10.5888C20.1517 10.2758 19.9756 9.74848 19.5444 9.68243L14.65 8.93274Z" stroke="#464455" stroke-linecap="round" stroke-linejoin="round"/></svg>
  </div> -->
    </div>

</template>
<!-- script -->
<script>
export default {
  //props is tacked ith passing data from parent component to child component
 // computed option
  // computed:{
  //   for(let i = 0; i<this.movie.length;i++){
  //     console.log("==> ", this.movies[i])
  //     if(this.movies[i].yearOfProduction === 2023){
  //       return 'current'
  //     }
  //     else{
  //       return this.movies[i].yearOfProduction;
  //     }
  //   }
  //   },
  props: ["msg"],
  data() {
    return {
      text: "tujengane",
      logo: "logo",
      movies:[
        {
          id:'GOT2005',
          name:'Game of Thrones',
          rating:8,
          yearOfProduction:2005,
          type:'Fantasy'
        },
        {
          id:'FS2023',
          name:'Fast Saga',
          rating:9,
          yearOfProduction:2023,
          type:'Action'
        },
        {
          id:'VS2013',
          name:'Vinland Saga',
          rating:9,
          yearOfProduction:2013,
          type:'Anime'
        }
      ]
    };
  },
  methods: {}
}
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
  font-family: monospace;
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
