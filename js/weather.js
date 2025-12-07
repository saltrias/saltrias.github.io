/////////////
// weather //
/////////////

let temperature;
let temperatureP = document.getElementById("temperature");

let imageIcon = document.getElementById("weatherIcon");
let windSpeedP = document.getElementById("weatherWindSpeed");
let windDirectionP = document.getElementById("weatherWindDirection");
let elevationP = document.getElementById("weatherElevation");

// behold my magnum opus
const WEATHER_SUMMARY = {
  0: ["pretty clear", "Sunny"],

  1: ["theres some clouds", "Kinda cloudy"],
  2: ["theres some clouds", "Kinda cloudy"],
  3: ["theres some clouds", "Cloudy"],

  45: ["ooh foggy", "Fog"],
  48: ["ooh foggy", "Fog"],

  51: ["ooh drizzly", "Drizzle"],
  53: ["ooh drizzly", "Drizzle"],
  55: ["ooh drizzly", "Drizzle"],
  56: ["ooh drizzly", "Drizzle"],
  57: ["ooh drizzly", "Drizzle"],

  61: ["ooh kinda rainy", "Drizzle"],

  63: ["ooh rainy", "Rain"],
  80: ["ooh rainy", "Rain"],
  81: ["ooh rainy", "Rain"],

  65: ["is rain", "Rain"],
  86: ["is rain", "Rain"],

  66: ["ooh cold rain", "Rain"],
  67: ["ooh cold rain", "Rain"],

  71: ["it's kinda snowy", "Snowy"],
  73: ["it's kinda snowy", "Snowy"],
  75: ["it's kinda snowy", "Snowy"],
  77: ["it's kinda snowy", "Snowy"],

  82: ["it's very rainy", "Rain"],
  85: ["it's very rainy", "Rain"],

  95: ["ooh thunderstormy", "Thunderstorm"],
  96: ["ooh thunderstormy", "Thunderstorm"],
  99: ["ooh thunderstormy", "Thunderstorm"],
};

function getWeatherSummary(weatherCode) {
  return WEATHER_SUMMARY[weatherCode][0] ?? "idk man";
}

// function getWeatherIconPath(weatherCode) {
//   return WEATHER_SUMMARY[weatherCode][1] ?? "idk man";
// }

function changeIcon(weatherCode) {
  let imagePath = `/assets/images/${WEATHER_SUMMARY[weatherCode][1]}.png`;
  imageIcon.src = imagePath;
}

function getWindDirectionAbbreviation(degree) {
  const windRoseAbbreviations = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];

  degree = degree % 360; // normalize
  const index = Math.floor((degree + 11.25) / 22.5) % 16;

  return windRoseAbbreviations[index];
}

export async function getWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=-6.1818&longitude=106.8223&current_weather=true`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`bitch it said ${response.status}`);
    }

    let data = await response.json();
    let currentWeather = data.current_weather;
    let currentWeathercode = currentWeather.weathercode;
    let weatherSummary = getWeatherSummary(currentWeathercode);

    // change temperature
    temperature = currentWeather.temperature;
    temperatureP.innerText = `${temperature}°C. ${weatherSummary}`;

    // changes icons
    changeIcon(currentWeathercode);

    // change wind direction whatever
    let windDirection = currentWeather.winddirection;
    let windDirectionAbbreviation = getWindDirectionAbbreviation(windDirection);
    let windSpeed = currentWeather.windspeed;
    let elevation = data.elevation;

    windDirectionP.innerText = `Wind direction: ${windDirectionAbbreviation}`;
    windSpeedP.innerText = `Wind speed: ${windSpeed}km/h`;
    elevationP.innerText = `Elevation: ${elevation}m`;
  } catch (error) {
    console.log(`bitch you did a ${error}`);
  }
}