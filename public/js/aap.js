const weatherForm = document.querySelector(".weather");
const search = document.querySelector(".weather_val");

weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const location = search.value;
   document.getElementById('curr_temp').style.display = 'none';
   document.getElementById('error').style.display = 'none';
   document.getElementById('loading').style.display = 'block';
   
   if (!location) {
        document.getElementById('loading').style.display = 'none';
        document.querySelector(".location").innerHTML = 'City not available.';
   } else {
       const url = '/weather?city=' + location;
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    document.querySelector("#error").innerHTML = data.error;   
                    document.getElementById('error').style.display = 'block';
                    document.getElementById('loading').style.display = 'none';
                }
                else {
                    document.getElementById('error').style.display = 'none';
                    document.getElementById('loading').style.display = 'none';
                    document.querySelector(".location").innerHTML = data.address; 
                    document.querySelector(".temp").innerHTML = data.forecast;
                    document.getElementById('curr_temp').style.display = 'block';
                }
            });
        })
   }
})