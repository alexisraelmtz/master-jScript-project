
function day() {
    const heading = document.querySelector("#message");

    if (heading.innerHTML === "Hi,") {
        heading.innerHTML = "Good Night!";
    } if (heading.innerHTML === "Good Morning!") {
        heading.innerHTML = "Good Night!";
    } else {
        heading.innerHTML = "Good Morning!";
    }

}
let counter = 0;

function count() {
    // let counter = 0;
    counter++;
    document.querySelector("h2").innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`counter is now ${counter}`)
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // document.querySelector("button").onclick = count;
    document.querySelector("button").addEventListener("click", count);
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").onsubmit = function () {
        const user = document.querySelector("#user").value;
        alert(`Hello, ${user}!!!`);
    };
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#colors").forEach(button => {
        button.onclick = function () {
            document.querySelector("#message").style.color = button.dataset.color;
        }
    });
});



