const nextScreenshotButton = document.getElementById("nextButton");
const gravelTravelScreenshot = document.getElementById("gravelTravelScreenshot")

let index = 0

const screenshotURL = ["images/GravelTravelHome.png", "images/GravelTravelCountries.png", "images/GravelTravelLocations.png", "images/GravelTravelTrips.png", "images/GravelTravelWishlist.png", "images/GravelTravelLocation.png", "images/GravelTravelCountry.png"]

nextButton.addEventListener("click", () => {
    index += 1
    if (index === 7) {
        index = 0
    }
    gravelTravelScreenshot.src = screenshotURL[index]
});