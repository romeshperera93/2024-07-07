// https://restcountries.com/v3.1/all


let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr>
                    <th>Name</th>
                    <th>Falg</th>
                </tr>` ;

fetch("https://restcountries.com/v3.1/all")
.then((res)=>res.json())
.then(data=>{

    data.forEach(element => {

        tableBody+=`<tr>
                        <td>
                        <h1>${element.name.common}</h1> <br>
                    
                        Official Name : ${element.name.official}
                        <p>Region : ${element.region} </p>
                        <p>Population : ${element.population} </p>
                        <a class="btn btn-primary" href="${element.maps.googleMaps}"target ="blank">Go To Map</a>
                        </td>
                        <td><img src="${element.flags.png}" alt=""></td>
                    </tr>`
        console.log(element.currencies);
    });

    tblCountries.innerHTML=tableBody;
})
