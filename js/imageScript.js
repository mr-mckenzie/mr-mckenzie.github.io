const nextScreenshotButton = document.getElementById("next-button");
const previousScreenshotButton = document.getElementById("previous-button");
const gravelTravelScreenshot = document.getElementById("gravel-travel-screenshot")
const imageBox = document.getElementById("image-box")

let index = 0

const screenshotURL = ["images/GravelTravelHome.png", "images/GravelTravelCountries.png", "images/GravelTravelLocations.png", "images/GravelTravelTrips.png", "images/GravelTravelWishlist.png", "images/GravelTravelCountry.png", "images/GravelTravelLocation.png"]

nextScreenshotButton.addEventListener("click", () => {
    index += 1
    if (index === 7) {
        index = 0
    }
    gravelTravelScreenshot.src = screenshotURL[index]
});

previousScreenshotButton.addEventListener("click", () => {
    index -= 1
    if (index === -1) {
        index = 6
    }
    gravelTravelScreenshot.src = screenshotURL[index]
});

imageBox.addEventListener("pointerover", () => {
    gravelTravelScreenshot.style.filter = "none"
});

imageBox.addEventListener("pointerout", () => {
    gravelTravelScreenshot.style.filter = null
});