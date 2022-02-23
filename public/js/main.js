const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp_real");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = "Please write your city name";
    dataHide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=bd17567668855041c9ccca90539f2aa5`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      const tempMood = arrData[0].weather[0].main;

      console.log(arrData[0].weather[0].main);
      city_name.innerText = `${arrData[0].name} ,${arrData[0].sys.country}`;
      temp.innerText = (arrData[0].main.temp - 272.15).toFixed(2);

      //condition to check sunny or cloudy
      if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rain") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
      dataHide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "Please check your city name";
      dataHide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
