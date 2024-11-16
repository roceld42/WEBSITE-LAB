// button
const button = document.getElementById("btn-alert");
button.addEventListener("click", () => {
    alert("Hello, world!");
})
button.addEventListener("mouseover", () => {
    document.getElementById("btn-alert").textContent="Nice to meet you!";
})
button.addEventListener("mouseout", () => {
    document.getElementById("btn-alert").textContent="Hello!";
})

// Footer 

const d = new Date();
console.log (d.getFullYear());
const footeryear = document.getElementById("footeryear");
footeryear.textContent = d.getFullYear();
