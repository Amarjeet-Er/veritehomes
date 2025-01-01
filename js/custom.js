// project Function to open modal and display clicked image
function openModal(imagePath) {
    var modalImage = document.getElementById('fullImage');
    modalImage.src = imagePath;
}

// const texts = ["Welcome to Verite Homes", "Life Products as they should be"];
// let currentIndex = 0;
// const textElement = document.getElementById("dynamic-text");

// // Function to update the text and reset animation
// function updateText() {
//     textElement.textContent = texts[currentIndex];
//     textElement.classList.remove('slide-animation');
//     void textElement.offsetWidth;
//     textElement.classList.add('slide-animation');
//     currentIndex = (currentIndex + 1) % texts.length;
// }
// // Change text every 10 seconds
// setInterval(updateText, 2000); // Adjust interval based on your animation timing
