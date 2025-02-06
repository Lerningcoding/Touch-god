const cat = document.getElementById('cat');

// Function to move the cat to a specific position
function moveCatTo(event) {
    const rect = cat.getBoundingClientRect(); // Get the cat's current position
    const catWidth = rect.width; // Get the width of the cat
    const catHeight = rect.height; // Get the height of the cat

    // Calculate the new position for the cat
    const posX = event.clientX - catWidth / 2; // Center the cat horizontally
    const posY = event.clientY - catHeight / 2; // Center the cat vertically

    // Set the new position of the cat
    cat.style.transform = `translate(${posX}px, ${posY}px)`;
}

// Event listeners for touch and click
document.addEventListener('click', moveCatTo);
document.addEventListener('touchstart', moveCatTo);
