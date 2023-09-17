const today = new Date()

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const todayString = today.toLocaleDateString('en-GB', options)

const dateElement = document.getElementById("date");
const title = document.getElementById("title")

dateElement.innerHTML = todayString

if (today.getDay() === 0) {
    title.innerHTML = "The Sunday mr-mckenzie.github.io Chronicle"
}
