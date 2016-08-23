$(document).ready(function(){

// Returns an alert in the console.
alert ("I can be quite annoying!")

// 1 This element is a clickable function that hides the paragraph once clicked
    $("p").click(function(){
        $(this).hide();
    });

// 2 This element is a button tab using element with id that is clicked off or hidden once clicked
    $(".cat").click(function(){
        $("#design").hide();
    }); 

// 3 This element list out table data and is highlighting odd on the table reference.  
  $("tr:odd").css("background-color", "pink")

// 4 This element hides the click me button
  $("button").click(function(){
        $(this).hide();
    });

// 5 This element alerts you as you hover over the p tag and will alert you once you click ok.
    $("#mouse").hover(function(){
       alert("You entered the mouse hover!");
    },
    function(){
       alert("Bye! You are now leaving the mouse hover");
    })

// 6 This element gives you the background color 
 $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });

 // 7- 10
 
 // hides the h1 header within 4 seconds, button to show the h1 again once clicked
 $("#title").click(function(){
        $("h1").hide(4000);
    });
    
    $("#show").click(function(){
        $("h1").show();
    });

// fading out dotted, solid and dashed boxes
  $(".example").click(function(){
        $("#div1").fadeToggle(5000);
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle(3000);
    });

//slide up and down
    $("#down").click(function(){
        $("#up").slideToggle("slow");
    });

//animate, the box will run to the right side of the page
       $(".ana").click(function(){
        $("#box").animate({left: '1200px'});
    });

});