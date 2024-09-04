console.log("JavaScript connected successfully");

// Get the button, and store it in a variable
const button = document.getElementsByTagName("button")[0];
// Assign the function to the button's onclick property
button.onclick = onButtonClick;

// Declare function called onButtonClick
function onButtonClick() {
    // When the function is called, the colour of the title changes
    document.getElementById("title").style.color = "brown";
}