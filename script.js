/// script.js
const identities = ['data scientist', 'data analyst', 'machine learning engineer', 'photographer'];
const dynamicText = document.querySelector('.dynamic-text');

let currentIndex = 0;
let currentCharacter = 0;

function typeWriter() {
    if (currentCharacter < identities[currentIndex].length) {
        dynamicText.textContent += identities[currentIndex].charAt(currentCharacter);
        currentCharacter++;
        setTimeout(typeWriter, 100); // Adjust typing speed (in milliseconds)
    } else {
        setTimeout(eraseText, 1500); // Wait before erasing the text
    }
}

function eraseText() {
    if (currentCharacter >= 0) {
        dynamicText.textContent = identities[currentIndex].substring(0, currentCharacter);
        currentCharacter--;
        setTimeout(eraseText, 50); // Adjust erasing speed (in milliseconds)
    } else {
        currentIndex = (currentIndex + 1) % identities.length;
        currentCharacter = 0;
        setTimeout(typeWriter, 500); // Wait before starting to type the next identity
    }
}

// Start the typewriter effect
typeWriter();

