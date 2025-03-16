function calculateAttendance() {
    let totalClasses = parseInt(document.getElementById('totalClasses').value);
    let attendedClasses = parseInt(document.getElementById('attendedClasses').value);
    let resultElement = document.getElementById('result');
    let extraInfoElement = document.getElementById('extraInfo');

    if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0 || attendedClasses < 0 || attendedClasses > totalClasses) {
        resultElement.innerText = "Please enter valid numbers";
        resultElement.style.color = "black";
        extraInfoElement.innerText = "";
        extraInfoElement.className = "info-box";
        return;
    }

    let percentage = (attendedClasses / totalClasses) * 100;
    resultElement.innerText = "Attendance: " + percentage.toFixed(2) + "%";

    if (percentage >= 75) {
        resultElement.style.color = "green";
        let maxTotalClasses = Math.floor(attendedClasses / 0.75);  
        let maxBunks = maxTotalClasses - totalClasses;
        extraInfoElement.innerText = `✅ You can bunk ${maxBunks} more class${maxBunks !== 1 ? "es" : ""} and still maintain 75% attendance.`;
        extraInfoElement.className = "info-box success";
    } else {
        resultElement.style.color = "red";
        let requiredClasses = Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25);
        extraInfoElement.innerText = `⚠️ You need to attend ${requiredClasses} more class${requiredClasses !== 1 ? "es" : ""} to reach 75% attendance.`;
        extraInfoElement.className = "info-box warning";
    }
}