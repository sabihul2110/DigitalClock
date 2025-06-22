function updateTime() {
    const now = new Date()

    const hours = now.getHours().toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`
    document.getElementById("clock").textContent = timeString;
}

function updateDate() {
    const now = new Date()

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Aug", "Oct", "Nov"," Dec"]
    const dayName = days[now.getDay()];
    const dayDate = now.getDate().toString().padStart(2, 0);
    const month = months[now.getMonth()];
    // const month = (now.getMonth() + 1).toString().padStart(2, 0); //if month in num format
    const year = now.getFullYear();

    const dateString = `${dayName}, ${dayDate} ${month} ${year}`
    document.getElementById("date").textContent = dateString;

}

updateTime();
updateDate();
setInterval(updateTime, 1000); //works like setTimeout()
setInterval(updateDate, 60000)