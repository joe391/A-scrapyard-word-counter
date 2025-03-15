let typingStartTime;
let wordCount = 0;
let typingTimer;
let wpm = 0;

function startTyping() {
    const textInput = document.getElementById('textInput');
    const wpmDisplay = document.getElementById('wpm');
    
    // Start the timer when the user starts typing
    if (!typingStartTime) {
        typingStartTime = new Date();
    }

    // Clear any existing timers
    clearTimeout(typingTimer);

    // Set a timer to calculate words per minute
    typingTimer = setTimeout(() => {
        calculateWPM(textInput.value);
    }, 1000);  // Delay for 1 second to avoid calculation on every keystroke

    // Update the words per minute display every second
    calculateWPM(textInput.value);
}

function calculateWPM(text) {
    const textInput = document.getElementById('textInput');
    const words = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    
    if (words > 0 && typingStartTime) {
        const currentTime = new Date();
        const timeElapsedInMinutes = (currentTime - typingStartTime) / (1000 * 60);  // in minutes
        wpm = Math.round(words / timeElapsedInMinutes);
    }
    
    document.getElementById('wpm').textContent = wpm;
}
