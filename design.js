function changeImage()
{
   var pic=document.getElementById("bulb");    //pic is a variable
   console.log(pic);
   if(pic.src.match("on"))
   {
    console.log("ON");
    pic.src="./bulb_off.jpg";
   }
   else
   {
    console.log("OFF");
    pic.src="./bulb_on.jpg";
   }
}