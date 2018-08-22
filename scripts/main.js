import { get_id, headers, cl } from "https://rawgit.com/stevedoesitall/ditkojs/master/ditko.js";

const generator_btn = get_id("generator");

generator_btn.addEventListener("click", function submit_form() {
    fetch("/server", {
        method: "post",
        headers: headers
    })
    .then(
    function(response) {
        if (response.status != 200) {
            cl("Error: " + response.status);
            return;
        }
        else {
            alert("Refreshing feed.");
        }
    })
});