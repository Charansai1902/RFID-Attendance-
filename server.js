let attendanceData = [];
const TOTAL_CLASSES = 60;

async function fetchAttendance() {
    try {
        let response = await fetch("http://10.123.26.112:3000/attendance");
        let data = await response.json();
        attendanceData = data.sort((a, b) => a.roll_number.localeCompare(b.roll_number));
        renderTable(attendanceData);
        updateAttendanceSummary(attendanceData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function renderTable(data) {
    let tableBody = document.getElementById("attendance-body");
    tableBody.innerHTML = "";
    data.forEach(student => {
        let attendancePercentage = parseFloat(student.attendance_percentage) || 0;

        let row = `<tr>
            <td>${student.roll_number}</td>
            <td>${student.name}</td>
            <td><code>${student.rfid_uid}</code></td>
            <td>${TOTAL_CLASSES}</td>
            <td>${student.attendance_count}</td>
            <td>${attendancePercentage.toFixed(2)}%</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function updateAttendanceSummary(data) {
    let totalAttendance = 0;
    data.forEach(student => {
        totalAttendance += parseFloat(student.attendance_percentage) || 0;
    });
    let avgAttendance = data.length ? (totalAttendance / data.length).toFixed(2) : "0.00";

    let summaryDiv = document.getElementById("attendance-summary");
    summaryDiv.innerHTML = `
        <p><strong>Total IoT Students:</strong> ${data.length}</p>
        <p><strong>Total Number Of Classes:</strong> ${TOTAL_CLASSES}</p>
        <p><strong>Average IoT Attendance:</strong> ${avgAttendance}%</p>
    `;
}

function searchTable() {
    let input = document.getElementById("search").value.toLowerCase();
    let filteredData = attendanceData.filter(student =>
        student.roll_number.toLowerCase().includes(input) ||
        student.name.toLowerCase().includes(input) ||
        student.rfid_uid.toLowerCase().includes(input)
    );
    renderTable(filteredData);
    updateAttendanceSummary(filteredData);
}

window.onload = () => {
    fetchAttendance();
    // Re-fetches data dynamically every 5 seconds
    setInterval(fetchAttendance, 5000);
};