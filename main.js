async function CountrysAPI() {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const countrys = await response.json()
    console.log(countrys);
    
const secction = document.querySelector("section")
countrys.forEach(e => {
    secction.innerHTML += `<div class="country">
    <h2>${e.name.common}</h2>
    <img src="${e.flags.png}" alt="${e.flags.alt}" width="320px" height="160px">
    <p>poblacion =${e.population}</p>
    <p>region= ${e.region}</p>
    <p>capital = ${e.capital}</p>
    <button class="moreInfo"><a href="./index2.html">more info</a></button> `
    
});

}
CountrysAPI()