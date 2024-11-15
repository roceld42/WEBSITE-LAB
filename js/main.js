// button
const d = new Date();
const buttondate = document.getElementById("buttondate");
buttondate.addEventListener("click", () => {
    if (d.getHours() <= 11) {
        alert("Good Morning!");
    }
    else if (d.getHours() <18) {
        alert("Good Afternoon!") 
    }
    else {
        alert("Good Evening!");
    }
})
