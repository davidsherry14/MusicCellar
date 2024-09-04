console.log("JavaScript connected successfully");

// Access the image and store it in a variable
// Add click event listener to image that calls a function to change the heading's colour

document.getElementById("title").style.color = "brown";
const button = document.getElementsByTagName("button")[0];

// Declare function called onButtonClick
function onButtonClick() {
  // When the function is called, this message is printed to the console
  console.log("you clicked me!!!");
}

// Assign the function to the button's onclick property
button.onclick = onButtonClick;
