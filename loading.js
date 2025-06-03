//? This is a promise, when I set custom time 4s after that it will work with async-await
function loading() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Success");
        }, 4000);
    })
}
//? I made this as an asynchronous function to complete this operation
async function clicked() {
    let see = document.querySelector(".loading");
    see.classList.add("display-block");
    see.classList.remove("display-none");
    document.querySelector("#button").style.display = "none";
    await loading();
    document.querySelector("#button").style.display = "block";
    see.classList.add("display-none");
    see.classList.remove("display-block");
}
//? Assigning button to the variable
let click = document.getElementById("button");
//? Button with an event
click.addEventListener("click", clicked)