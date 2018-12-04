

var off1 = true;
var off2 = true;

$(function() {


    //resize the row height dynamically so that it always matches the height of the icon within (before, the height was much larger than the icon, which made for wasted space).
    var brainHeight = $(".icon-image2").height();
    $(".manage-row-height2").css("height", brainHeight);

    var bodyHeight = $(".icon-image").height();
    $(".manage-row-height").css("height", bodyHeight);

    $(window).on('resize',function(){
         var bodyHeight = $(".icon-image").height();
         $(".manage-row-height").css("height", bodyHeight);
         var brainHeight = $(".icon-image2").height();
         $(".manage-row-height2").css("height", brainHeight);
    });

    // resizing carosel dynamically so it's height is as large as the largest quote within. This way, all information is always displayed and carosel remains a consistent size between slides that fits content perfectly.
    var maxHeight = $("#longest").height();
    $(".carousel-item").css("height", maxHeight);
    $(window).on('resize',function(){
        $(".carousel-item").css("height", ""); //when window resizes, reset the carousel item height so that it once again dynamically changes according to how much content is inside
        var maxHeight = $("#longest").height();  //get the height of the largest carosel item
        $(".carousel-item").css("height", maxHeight); //make the height of all carousel items match that of the longest
    });










    // when hover over icons on home page, fill icon with color and display descriptive text below
        $(".icon-link").mouseover(
            function() {
                let colored = $(this).find(".colored");
                colored.fadeTo("fast", 1);
                $( "#" + colored.attr("id") + "-grey" ).fadeTo("fast", 0);
                $("#" + colored.attr("id") + "-text").fadeTo("fast", 1);

    });

    // when move mouse away from icon on home page, icon fades back to grey and descriptive text dissapears
      $(".icon-link").mouseout(
            function() {
        let colored = $(this).find(".colored");
        colored.fadeTo("fast", 0);
       $( "#" + colored.attr("id") + "-grey" ).fadeTo("fast", 1);
       $("#" + colored.attr("id") + "-text").fadeTo("fast", 0);

    });

    // when hover, highlight specific body parts and display corresponding info box
        $(".body-highlights").mouseover(
            function() {
        $(this).fadeTo("fast", 1);
        $( "#" + $(this).attr("id") + "-box").fadeTo("fast", 1);

    });

        $(".body-highlights").mouseout(
            function() {
                 if(off1) { //"view-all" button is off, then fade highlights and info box on mouseout
                  $(this).fadeTo("fast", 0);
              $( "#" + $(this).attr("id") + "-box").fadeTo("fast", 0);
    }
    });

    // when hover, highlight specific brain regions and display corresponding info box
        $(".brain-highlights").mouseover(
            function() {
                $(this).fadeTo("fast", 1);
                $( "#" + $(this).attr("id") + "-box").fadeTo("fast", 1);

    });

        $(".brain-highlights").mouseout(

            function() {
                 if(off2) {
                    $(this).fadeTo("fast", .3);
                    $( "#" + $(this).attr("id") + "-box").fadeTo("fast", 0);
    }
    });


    // when click voew-all button for the brain section
    $("#brain-button").on("click", function() {
        if(off2) { //if button is off, then show all content and make button bright yellow
            off2=false;
             $(this).css("opacity", 1);
                $(".brain-highlights").fadeTo("fast", 1);
                $( ".info-box2").fadeTo("fast", 1);
        } else {
            off2=true;  //button was already turned on, hide info boxes, fade button color, and hide highlights
            $(this).css("opacity", .6 );
            $(".brain-highlights").fadeTo("fast", .3);
            $( ".info-box2").fadeTo("fast", 0);


        }




        });


    // when click voew-all button for the body section (performs same functions as above)
    $("#body-button").on("click", function() {
        if(off1) {
            off1=false;
             $(this).css("opacity", 1);
               $(".body-highlights").fadeTo("fast", 1);
               $( ".info-box").fadeTo("fast", 1);
        } else {
            off1=true;
        $(this).css("opacity", .6 );
             $(".body-highlights").fadeTo("fast", 0);
             $( ".info-box").fadeTo("fast", 0);
          }




        });

// star generator function. Source: Codepen (https://codepen.io/WebSonick/pen/vjmgu)
    var generateStars = function(){
        var $galaxy = $(".galaxy");
        var iterator = 0;
        while (iterator <= 100){
            var xposition = Math.random();
            var yposition = Math.random();
            var star_type = Math.floor((Math.random() * 3) + 1);
            var position = {
                "x" : $galaxy.width() * xposition,
                "y" : $galaxy.height() * yposition,
            };
            $('<div class="star star-type' + star_type + '"></div>').appendTo($galaxy).css({
                "top" : position.y,
                "left" : position.x
            });
             iterator++;
        }

};

generateStars();



});