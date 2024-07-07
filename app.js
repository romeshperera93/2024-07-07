// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let row = document.getElementById("card-row");

let cardBody ="";

let tableBody = `<tr>
                    <th class="text-center">Name</th>
                    <th class="text-center">Falg</th>
                </tr>` ;

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        // cardBody+=`<div class="col-6">
        //                 <div class="card" style="width: 18rem;">
        //                     <img src="${element.flags.png}" class="card-img-top" alt="...">
        //                         <div class="card-body">
        //                           <h5 class="card-title">${element.name.official}</h5>
        //                           <p class="card-text">${element.flags.alt}</p>
        //                           <a href="#" class="btn btn-primary">Go somewhere</a>
        //                         </div>
        //                       </div>
        //                 </div>`

        tableBody+=`<tr>
                        <td>

                        <h1>${element.name.common}</h1> <br>
                        <p>Official Name : ${element.name.official}</p>
                        <p>Region : ${element.region} </p>
                        <p>Population : ${element.population} </p>
                        <a class="btn btn-primary" href="${element.maps.googleMaps}" target="">Go To Map</a>
                        
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        console.log(element.currencies);

        // for(let [key,value] in Object.entries(element.currencies)) { 
        //     console.log(key,element.currencies); 
        //   } 
    });

    row.innerHTML=cardBody;

    tblCountries.innerHTML=tableBody;
})


function searchCountry(){
    let userInput = document.getElementById("txtInput").value;

    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById("officialName");
    let region = document.getElementById("region");
    let population = document.getElementById("population");

    fetch(`https://restcountries.com/v3.1/name/${userInput}`)
    .then(res=>res.json())
    .then(data=>{
        data.forEach(obj=>{
            console.log(obj);
            flagImg.src=obj.flags.png
            name.innerText=obj.name.common
            officialName.innerText=obj.name.official

            region.innerText=obj.region;
            population.innerText=obj.population
        })
    })
}
