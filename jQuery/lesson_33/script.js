
// //Q1
$(document).ready(function(){
    $(".btn-hide").click(function(){
        $(".hw").hide();
    });
});

//Q2
$(document).ready(function(){
    $("#par1").click(function(){
        $(this).hide();
    });
    $("#par2").click(function(){
        $(this).hide();
    });
    $("#par3").click(function(){
        $(this).hide();
    });
});

//Q3
$(document).ready(function(){
    $(".btn-hide-first").click(function(){
        $("p:first").hide();
    });
});

//Q4
$(document).ready(function(){
    $(".hw").hover(function(){
        $(this).css("background-color", "green");
    });
    $(".hw").mouseleave(function(){
        $(this).css("background-color", "");
    });

});

//Q5

$(document).ready(function(){
    $(".db-click").dblclick(function(){
        $(".show").html("you clicked twice");
        $(".show").css("font-size", "100px");
        $("body").append("<div class='amir'>amir samoha</div>");
    });
});

$(document).ready(function(){
    $(".show").on({
        mouseenter: function(){
            $(this).css("color", "blue")
        },
        mouseleave: function(){
            $(this).css("background", "red")

        }
    });

});
