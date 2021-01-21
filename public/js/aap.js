// fetch('http://localhost:3000/weather?city=').then((response) => {
//     response.json().then((data) => {
//         // console.log(data.features[0].center[0]);
//         console.log(data);
//         if (data.error) {
//             console.log(data.error);
//         }
//         else {
//             console.log(data.features[0].center[0]);
//         }
//     })
// })

const weatherForm = document.querySelector(".weather");
const search = document.querySelector(".weather_val");

weatherForm.addEventListener("submit", (e) => {
   e.preventDefault();
   const location = search.value;
   if (!location) {
        console.log('City not available!!')
   } else {
       const url = 'http://localhost:3000/weather?city=' + location;
        fetch(url).then((response) => {
            console.log(response);
            // response.json().then((data) => {
            //     // console.log(data.features[0].center[0]);
            //     console.log(data);
            //     if (data.error) {
            //         console.log(data.error);
            //     }
            //     else {
            //         console.log(data.features[0].center[0]);
            //     }
            // })
        })
   }
})