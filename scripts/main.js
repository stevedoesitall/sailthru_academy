generator_button.addEventListener("click", function submit_form() {
    alert(`Refreshing feed.`);
    $.ajax({
        type: "POST",
        url: "/email",
        success: function(response) {
            console.log(response);
        }
    });
});