var reasons=[
    "Trees provide shade",
     "Trees help in retaning rainwater",
     "Trees provide fruits",
     "Trees are natural medicines"
 ];
 
 var images=[
   "ada.jpg", "mom.png", "me.jpg"
 ];
 
 var i=0;
 function nextphoto(){
   document.getElementById("heading").innerHTML=reasons[i];
   document.getElementById("photos").src=images[i];
   i++;
 }


