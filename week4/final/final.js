  var myIndex = -1;

$(document).on("ready",function(){

   $(".contact").animate({
    left: '400px',
    height: '500px',
    width: '500px',
  },2000);



  carousel();

  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
     
      myIndex++;
      if (myIndex >= x.length) {myIndex = 0}
         console.log (myIndex, x)
      x[myIndex].style.display = "block";
      setTimeout(carousel, 9000);
  }

});

