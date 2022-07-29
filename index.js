

var $showSidemenu = $('#cir');
var $sidemenuShowButton = $('#heels');

$(document).ready(function(){
    $sidemenuShowButton.on('mouseover',function(){
        $('#cir').addClass("cir2");
    });
    $('#heels').on('mouseout',function(){
        $('#cir').removeClass("cir2");
    });
});

var $showSidemenu1 = $('#cir3');
var $sidemenuShowButton2 = $('#dress');

$(document).ready(function(){
    $sidemenuShowButton2.on('mouseover',function(){
        $('#cir3').addClass("cir2");
    });
    $('#dress').on('mouseout',function(){
        $('#cir3').removeClass("cir2");
    });
});

var $showSidemenu2 = $('#cir4');
var $sidemenuShowButton3 = $('#sneak');

$(document).ready(function(){
    $sidemenuShowButton3.on('mouseover',function(){
        $('#cir4').addClass("cir2");
    });
    $('#sneak').on('mouseout',function(){
        $('#cir4').removeClass("cir2");
    });
});

var $showSidemenu3 = $('#cir5');
var $sidemenuShowButton4 = $('#crop');

$(document).ready(function(){
    $sidemenuShowButton4.on('mouseover',function(){
        $('#cir5').addClass("cir2");
    });
    $('#crop').on('mouseout',function(){
        $('#cir5').removeClass("cir2");
    });
});

var $showSidemenu4 = $('#cir6');
var $sidemenuShowButton5 = $('#gown');

$(document).ready(function(){
    $sidemenuShowButton5.on('mouseover',function(){
        $('#cir6').addClass("cir2");
    });
    $('#gown').on('mouseout',function(){
        $('#cir6').removeClass("cir2");
    });
});

var $showSidemenu5 = $('#cir7');
var $sidemenuShowButton6 = $('#bag');

$(document).ready(function(){
    $sidemenuShowButton6.on('mouseover',function(){
        $('#cir7').addClass("cir2");
    });
    $('#bag').on('mouseout',function(){
        $('#cir7').removeClass("cir2");
    });
});

var $showSidemenu6 = $('#cir8');
var $sidemenuShowButton7 = $('#skirt');

$(document).ready(function(){
    $sidemenuShowButton7.on('mouseover',function(){
        $('#cir8').addClass("cir2");
    });
    $('#skirt').on('mouseout',function(){
        $('#cir8').removeClass("cir2");
    });
});

var $showSidemenu7 = $('#cir9');
var $sidemenuShowButton8 = $('#hls');

$(document).ready(function(){
    $sidemenuShowButton8.on('mouseover',function(){
        $('#cir9').addClass("cir2");
    });
    $('#hls').on('mouseout',function(){
        $('#cir9').removeClass("cir2");
    });
});

// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
    
  // If the count down is over, write some text 
  
}, 1000);

$("input").focus( function() {
   console.log("you just got focused");
   
   
    
});



