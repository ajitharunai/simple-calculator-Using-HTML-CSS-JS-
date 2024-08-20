const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

const generateCalendar = (month, year) => {
    const datesElement = document.getElementById("dates");
    datesElement.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = daysInMonth(month, year);

    document.getElementById("month-year").innerHTML = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        datesElement.innerHTML += `<div class="date"></div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        datesElement.innerHTML += `<div class="date">${i}</div>`;
    }
};

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentMonth = new Date().getMonth();
let currentYear = 2024;

generateCalendar(currentMonth, currentYear);

prevButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});
