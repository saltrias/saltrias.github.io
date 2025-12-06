/////////////////////
// weather section //
/////////////////////

let temperature;
let temperatureP = document.getElementById("temperature");
let imageIcon = document.getElementById("weatherIcon");

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
  let imagePath = `/assets/images/${WEATHER_SUMMARY[weatherCode][1]}.png`
  imageIcon.src = imagePath;
}

async function main() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=64.1355&longitude=-21.8954&current_weather=true`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`bitch it said ${response.status}`);
    }

    const data = await response.json();
    const currentWeather = data.current_weather;
    const currentWeathercode = currentWeather.weathercode;
    const weatherSummary = getWeatherSummary(currentWeathercode);
    
    temperature = currentWeather.temperature;
    temperatureP.innerText = `${temperature}°C. ${weatherSummary}`;

    changeIcon(currentWeathercode);

  } catch (error) {
    console.log(`bitch you did a ${error}`);
  }
}

main();

/* 
\\//\\//\\//\\//\\//
// Stock Section! \\
\\ Stock Section! //
////\\//\\//\\//\\\\
*/

