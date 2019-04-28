$(function () {
    $(".devour-button").on("click", function (event) {
        var id = $(this).data("id");


        var newDevourState={

        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
    }).then( function () {
        location.reload();
        }
    );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
    
        var newBurger = {
          name: $("#burger").val().trim(),
        //   devoured: $("[name=sleepy]:checked").val().trim()
        };
    
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            location.reload();
          }
        );
      });


})