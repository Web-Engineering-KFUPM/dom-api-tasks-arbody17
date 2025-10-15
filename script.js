/*
=======================================
📘 JavaScript & Web APIs Lab
All tasks in one file (script.js)
=======================================
*/

/*  
=======================================
TODO1: Welcome Board
---------------------------------------
When the page loads, display a welcome message 
inside the <p> element with id="t1-msg".

✅ Task:
- Select the element with id "t1-msg".
- Change its text to "Hello, World!".

💡 Hint:
document.getElementById("t1-msg").innerHTML = "Hello, World!";
*/

document.addEventListener("DOMContentLoaded", function () {
    const t1Msg = document.getElementById("t1-msg");
    if (t1Msg) {
        t1Msg.innerHTML = "Hello, World!";
    }
});

/*  
=======================================
TODO2: Interaction Corner
---------------------------------------
There is a button with id="t2-btn".
When the button is clicked, change the text inside 
the <p> with id="t2-status" to:
    "You clicked the button!"

✅ Task:
- Get the button element.
- Add a click event listener.
- Inside the event, change the text of the status paragraph.

💡 Hint:
button.addEventListener("click", function () {
    // change text here
});
*/

const t2Button = document.getElementById("t2-btn");
if (t2Button) {
    t2Button.addEventListener("click", function () {
        const t2Status = document.getElementById("t2-status");
        if (t2Status) {
            t2Status.innerHTML = "You clicked the button!";
        }
    });
}

/*  
=======================================
TODO3: Inspiring Quote Board
---------------------------------------
Use the Quotable API to display a random quote.

🌍 API Link:
https://dummyjson.com/quotes/random

✅ Task:
- When the button with id="t3-loadQuote" is clicked:
    - Fetch a random quote from the API.
    - Display the quote text inside the <p> with id="t3-quote".
    - Display the author inside the <p> with id="t3-author".

💡 Hint:
The API returns JSON like:
{
  "content": "Do not watch the clock. Do what it does. Keep going.",
  "author": "Sam Levenson"
}

Use:
data.content   // the quote text
data.author    // the author
*/

const t3Button = document.getElementById("t3-loadQuote");
if (t3Button) {
    t3Button.addEventListener("click", function () {
        fetch("https://dummyjson.com/quotes/random").then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (data && data.quote && data.author) {
                const quote = document.getElementById("t3-quote");
                const author = document.getElementById("t3-author");
                if (quote && author) {
                    quote.innerHTML = data.quote;
                    author.innerHTML = data.author;
                }
            }
        })
        .catch(function (err) {
            throw new Error("HTTP " + err);
        });
    });
}

/*  
=======================================
TODO4: Dammam Weather Now
---------------------------------------
Use the OpenWeatherMap API to display live weather data.

🌍 API Link:
https://api.openweathermap.org/data/2.5/weather?q=Dammam&appid=API_KEY=metric

⚠️ Replace YOUR_API_KEY with your actual API key from:
https://openweathermap.org/api

✅ Task:
- When the button with id="t4-loadWx" is clicked:
    - Fetch current weather data for Dammam.
    - Show temperature in the element with id="t4-temp".
    - Show humidity in the element with id="t4-hum".
    - Show wind speed in the element with id="t4-wind".

💡 Hint:
data.main.temp      → temperature (°C)
data.main.humidity  → humidity (%)
data.wind.speed     → wind speed (m/s)
*/

const base  = "https://api.openweathermap.org/data/2.5/weather";
const city  = "Dammam";
const units = "metric";
const key   = "7ae5cf1e1321b961b778d04dd722dafe";
const url = `${base}?q=${encodeURIComponent(city)}&appid=${key}&units=${units}`;

const t4Button = document.getElementById("t4-loadWx");
if (t4Button) {
    t4Button.addEventListener("click", function () {
        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP " + response.status);
            }
            return response.json();
        })
        .then(function (data) {
            if (data) {
                const temperature = document.getElementById("t4-temp");
                const humidity = document.getElementById("t4-hum");
                const windSpeed = document.getElementById("t4-wind");
                if (temperature && humidity && windSpeed) {
                    temperature.innerHTML = data.main.temp;
                    humidity.innerHTML = data.main.humidity;
                    windSpeed.innerHTML = data.wind.speed;
                }
            }
        })
        .catch(function (err) {
            throw new Error("HTTP " + err);
        });
    });
}