/////////////////////
// weather section //
/////////////////////

let temperature;
let temperatureP = document.getElementById("temperature");

// behold my magnum opus
const WEATHER_SUMMARY = {
  0: "pretty clear",

  1: "theres some clouds",
  2: "theres some clouds",
  3: "theres some clouds",

  45: "ooh foggy",
  48: "ooh foggy",
  
  51: "ooh drizzly",
  53: "ooh drizzly",
  55: "ooh drizzly",
  56: "ooh drizzly",
  57: "ooh drizzly",

  61: "ooh kinda rainy",

  63: "ooh rainy",
  80: "ooh rainy",
  81: "ooh rainy",

  65: "is rain",
  86: "is rain",

  66: "ooh cold rain",
  67: "ooh cold rain",
  
  71: "it's kinda snowy",
  73: "it's kinda snowy",
  75: "it's kinda snowy",
  77: "it's kinda snowy",

  82: "it's very rainy",
  85: "it's very rainy",

  95: "ooh thunderstormy",
  96: "ooh thunderstormy",
  99: "ooh thunderstormy",
};

function getWeatherSummary(weatherCode) {
  return WEATHER_SUMMARY[weatherCode] ?? "idk man";
}

async function getWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=64.1355&longitude=-21.8954&current_weather=true`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`bitch it said ${response.status}`);
    }

    const data = await response.json();
    const currentWeather = data.current_weather;
    const weatherSummary = getWeatherSummary(currentWeather.weathercode);
    temperature = currentWeather.temperature;

    temperatureP.innerText = `${temperature}°C. ${weatherSummary}`;
  } catch (error) {
    console.log(`bitch you did a ${error}`);
  }
}

getWeather();
