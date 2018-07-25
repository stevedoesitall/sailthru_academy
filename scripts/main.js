$(".generator").on("click", function submit_form() {
    alert(`Refreshing feed.`);
    $.ajax({
        type: "POST",
        url: "/email"
    });
});