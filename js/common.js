$(document).ready(function(){
    //add group
   
    if($(window).width() <= '480'){
     VK.Widgets.Group("vk_groups", {mode: 3, width: "290"}, 129790079);
    }
    else if($(window).width() <= '768'){
     VK.Widgets.Group("vk_groups", {mode: 3, width: "350"}, 129790079);
    }
    else if ($(window).width() <= '992'){
        VK.Widgets.Group("vk_groups", {mode: 3, width: "130"}, 129790079);
    }
    else if($(window).width() <= '1200'){
        VK.Widgets.Group("vk_groups", {mode: 3, width: "200"}, 129790079);
    }
    else{
        VK.Widgets.Group("vk_groups", {mode: 3, width: "255"}, 129790079);
    }
    /*menu page*/
    $("body").on("click",".mnu_button i",function(){
        $(".mnu").slideToggle(500);
    });

    $(".HeadPage").load( "index.html header");
    $(".left_bar").load("index.html .bg_slidebar");
    $(".footer").load("index.html footer");
    //Regist Carousel
   $(".owl-carousel").owlCarousel({
        margin:10,
        nav:true,
        navText:["<img src='image/OwnPrevBtn.png'>","<img src='image/OwnNextBtn.png'>"]
        
    });
    
});
//create map
function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('mapmycontacnt'), {
          center: {lat: 48.923484, lng: 24.711290},
          scrollwheel: true,
          zoom: 8
        });
      }
    initMap();