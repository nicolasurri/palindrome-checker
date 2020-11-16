let answer = document.querySelector(".answer");

// Check palindrome
function palindrome(str) {
    // Only alphanumeric characters
    let alphanum = str.replace(/[^0-9a-z]/gi, '');

    // Only uppercase
    let string = alphanum.toUpperCase();

    // Reversa
    let reverse = "";

    for (let i = string.length - 1; i >= 0; i--) {
        reverse += string[i];
    }

    // Conditional
    if (reverse === string) {
        answer.innerText = "Yep";
        answer.classList.add("alert-success");
    } else {
        answer.innerText = "Nope";
        answer.classList.add("alert-danger");
    }

}

// Init gets called once and it sets everything up
function init() {
    document.querySelector("form")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            palindrome(event.target[0].value);
        });
}

init ();

// Reset
function reset() {
    document.querySelector("form")
        .addEventListener("reset", function() {
            answer.classList.remove("alert-success", "alert-danger");
            answer.innerText = "";
        });
}

reset();