<!-- tempelate -->
<template>
<div id = "CenterSection">
            <!-- Photo -->
        <div class = "photo">
            <img src="../../assets/marcel-strauss-fzqxoFJytiE-unsplash 1.png" alt=""/>
        </div>
        <!-- Title, paragraph and button -->
        <div class = "descriptionSection">
            <div class = "pnt">
                <h2 class = "title">What is Tujengane?</h2>
                <p class = "paragraph">Tujengane is a mental health club that deals with the destigmatization of mental health in minority groups with a focus in African Communities</p>
            </div>
            <!-- Button -->
            <button class = "button">sign up</button>
        </div>
        
    </div>

</template>
<!-- script -->
<script>

</script>
<!-- style -->
<style>
/* Styling the CenterSection */
#CenterSection{
    display:flex;
    
}

/* Styling the image */
.picha{
    width: 365px;
    height: 358px;
    width: 50%;
    margin: 30px;
    
    
}

/*Styling the button, title and paragraph  */
.descriptionSection{
    width: 50%;
    margin: 30px;
    text-align: center;
}



/* Styling the title */
.title{
    text-decoration: none;
    font-family: monaco, monospace;
    color:#054DF6;
    
}

/* Styling the paragraph */
.paragraph{
    color: #054DF6;
}


/* Styling the button */
.button{
    
    position: relative;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
    background-color: #054DF6;
    color:#F6AE05;
    text-align: center;
    border-radius: 20px;  
    border-color: #F6AE05;

}

/* Styling the button when a person hovers over it */
.button:hover{
    font-size: 100%;
    background-color:#336FFB;
    border-width: 5px;
    border-color:#FBBF33 ;
}

/* Styling the button when pressed */
.button:active{
    background-color:#2159de;
   
}

</style>
