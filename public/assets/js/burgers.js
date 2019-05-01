// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    console.log(id);
    console.log(newDevoured);
    var newDevourState = {
      devoured: 1
    };
  console.log(newDevourState);
    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //submit button event 
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
    };
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
