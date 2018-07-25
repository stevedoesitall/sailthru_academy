$(".cleaner").on("generator", function submit_form() {
    alert(`Refreshing feed.`);
    $.ajax({
        type: "POST",
        url: "/email"
    });
});