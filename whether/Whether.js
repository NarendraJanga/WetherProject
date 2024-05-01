async function fun() {
    try {
        const name=document.querySelector(".input").value.toLowerCase();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8538d687aa1cdd74a0180f486f2d8bed&units=metric`);
        if (!response.ok) {
            throw new Error("Could not fetch the data");
        }
        
        const data = await response.json();
        console.log(data);
        
        const city = document.querySelector(".city");
        const temp = document.querySelector(".temp");
        const wind = document.querySelector(".wind");
        const humidity = document.querySelector(".humidity");

        city.textContent = data.name;
        temp.textContent = data.main.temp+"°C";
        wind.textContent = data.wind.speed +"kmph";
        humidity.textContent = data.main.humidity+"%";
    } catch (error) {
        console.error(error);
    }
}

fun();
