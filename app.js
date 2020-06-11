$(document).ready(function() { 

    $("#body_container").css("display", "block");
    $("#image_container").css("display", "none");
    $("#form_content").css("display", "none");

    $("#header").css("background", "lightgray");
    $("#header").css("width", "100%");
    $("#header").css("height", "10%");

    $("#body").css("background", "lightgreen");
    $("#body").css("width", "100%");
    $("#body").css("height", "10%");
    
    $("#footer").css("background", "lightgreen");
    $("#footer").css("width", "100%");
    $("#footer").css("height", "80%");

    $("#navigation_header").css("padding-top", "20px");
    $("#navigation_header").css("padding-bottom", "20px");

    $("#body_content").css("background", "lightgreen");

    $("#personal_photo").css("height", "250px");
    $("#personal_photo").css("width", "250px");
    
    $("#body_content").css("padding-top", "150px");
    $(".magic-image").css("height", "350px")
    $(".magic-image").css("width", "350px")

    $("#image_content").css("padding-top", "100px");
    $("#form_content").css("padding-top", "100px");


    $("#navigation_buttons p").click(function(){
        $(this).css("color","black");

        var text = $(this).text();

        if(text == "Ievads") {
            $("#body_container").css("display", "block");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "none");
        }

        if(text == "Datu bāze") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "block");
            $("#form_content").css("display", "none");
        }

        if(text == "Datu bāzes pievienošana") {
            $("#body_container").css("display", "none");
            $("#image_container").css("display", "none");
            $("#form_content").css("display", "block");
        }

    });

});