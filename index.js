console.log("JavaScript connected successfully");

// Get the button, and store it in a variable
const button = document.getElementsByTagName("button")[0];
// Assign the function to the button's onclick property
button.onclick = onButtonClick;

// Declare function called onButtonClick
function onButtonClick() {
    // When the function is called, the colour of the title changes
    document.getElementById("title").style.color = "brown";
    document.getElementById("buttontext").innerHTML = "Click me again!"
    const catpic = document.createElement("img")
    catpic.src = "https://media.self.com/photos/57d8c2d150778cef321a5c63/master/w_1600%2Cc_limit/cute-kitty-rub-my-belly.jpg"
    document.body.appendChild(catpic)
    const imagebox = document.getElementsByClassName("imagebox")[0]
    imagebox.remove();
}