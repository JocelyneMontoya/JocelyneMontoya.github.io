function temperatureConverter(celsius) {

    let temperaturaCelsius = Number(celsius);
    
   
    if (isNaN(temperaturaCelsius)) {
        console.log("Por favor ingresa un número válido.");
        document.getElementById("outputFahrenheit").textContent = "";
        document.getElementById("outputKelvin").textContent = "";
        return; 
    }
    
    
    let fahrenheit = (temperaturaCelsius * 9/5) + 32;
    let kelvin = temperaturaCelsius + 273.15;

    
    document.getElementById("outputFahrenheit").textContent = fahrenheit.toFixed(2);
    document.getElementById("outputKelvin").textContent = kelvin.toFixed(2);
}