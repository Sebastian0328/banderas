const querySelector = window.location.search;
const urlparams= new URLSearchParams(querySelector);
const country = urlparams.get('name')
async function getData() {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await response.json()
console.log(data);    
const section = document.querySelector('body')
data.forEach(e => {
    section.innerHTML=`<div class="country">
    <h2>${e.name.common}</h2>
    <img src="${e.flags.png}" alt="${e.flags.alt}" width="320px" height="160px">
    <p>Poblacion =${e.population}</p>
    <p>Region = ${e.region}</p>
    <p>Capital = ${e.capital}</p>
    <p>Idiomas =${Object.values(e.languages)}</p>
    <p>Subregion =${e.subregion} </p>
    <p>Monedas =${(Object.values(e.currencies))[0].name}</p>`
});

}
getData()