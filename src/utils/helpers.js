
// Converts time to seconds
export function timeInSeconds(hours, minutes, seconds) {
    let totalSeconds = seconds; 
    totalSeconds += minutes * 60;
    totalSeconds += hours * 3600; 
    return totalSeconds;
}

