<!-- template -->
<template>
<!-- top navigation -->
<div>
    <Navigation :msg ="'Weclome to my ticketing app'"/>
</div>
<div>
    <Centre/>
</div>
<div>
    
</div>
<!-- center section -->
<!-- footer -->

</template>

<!-- script -->
<script>
//import components to component
import Navigation from '../navigation/navigation.vue'
import Centre from '../centreSection/centresection.vue'
export default{
    components:{
        Navigation,
        Centre
    }
}
</script>

<!-- style -->
<style>

</style>