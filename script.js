/////////////////////
// weather section //
/////////////////////

let temperature;
let temperatureP = document.getElementById("temperature");

async function getWeather() {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=64.1355&longitude=-21.8954&current_weather=true`
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      console.log(`bitch it said ${response.status}`);
    }
    
    const data = await response.json();
    const currentWeather = data.current_weather;
    temperature = currentWeather.temperature;
    
    temperatureP.innerText = `The weather in Reykjavik is: ${temperature}°C.`;

  } catch (error) {
    console.log(`bitch you did a ${error}`);
  }
}

getWeather();
