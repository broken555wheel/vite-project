<!-- template -->
<template>
<!-- top navigation -->
<div>
    <navigation :msg ="'Weclome to my ticketing app'"/>
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
import navigation from '../navigation/navigation.vue'
import Centre from '../centreSection/centresection.vue'
export default{
    components:{
        navigation,
        Centre
    }
}
</script>

<!-- style -->
<style>

</style>