const today = new Date()

const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};

const todayString = today.toLocaleDateString('en-GB', options)

const dateElement = document.getElementById("date");

dateElement.innerHTML = todayString