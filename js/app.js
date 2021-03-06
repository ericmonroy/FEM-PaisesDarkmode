// get id from DOM
const flags = document.querySelector('#flags');
flags.innerHTML = `Loading Countries...`;

// init load fetch data
document.addEventListener('DOMContentLoaded', (e) => {
    fetchData();
});

// get data from api.json
const fetchData = async () => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        flagsData(data);
        formClient(data);
        filters(data);
    } catch (error) {
        console.log(error);
        flags.innerHTML = load;
    }
};

// received data 
const flagsData = (data) => {
    let element = "";
    data.forEach(item => {
        element += `<article class="card">
                    <a href="country.html?name=${item.name}">
                      <img src="${item.flag}" alt="flag" class="img-fluid">
                    </a>
                      <div class="card-content">
                          <h3>${item.name}</h3>
                          <p><b>Population: </b>${item.population}</p>
                          <p><b>Region: </b>${item.region}</p>
                          <p><b>Capital: </b>${item.capital}</p>
                       </div>
                    </article>`;
    });
    flags.innerHTML = element;
};