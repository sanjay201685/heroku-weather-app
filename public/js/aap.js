const weatherForm = document.querySelector(".weather");
const search = document.querySelector(".weather_val");

weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const location = search.value;
   document.getElementById('loading').style.display = 'block';
   document.getElementById('curr_temp').style.display = 'none';
   if (!location) {
        console.log('City not available!!')
   } else {
       const url = '/weather?city=' + location;
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error);
                }
                else {
                    document.getElementById('loading').style.display = 'none';
                    document.querySelector(".location").innerHTML = data.address; 
                    document.querySelector(".temp").innerHTML = data.forecast; 
                    document.getElementById('curr_temp').style.display = 'block';
                }
            });
        })
   }
})