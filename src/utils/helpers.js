// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste
// everywhere.

// Converts time to seconds, primarily used by the progress bar animation
export function timeInSeconds(hours, minutes, seconds) {
    let totalSeconds = seconds; 
    totalSeconds += minutes * 60;
    totalSeconds += hours * 3600; 
    
    return totalSeconds;
}

// setTimerInputs 