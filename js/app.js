// get id from DOM
const flags = document.querySelector('#flags');

// init load fetch data
document.addEventListener('DOMContentLoaded', (e) => {
    fetchData();
});

// get data from api.json
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        flagsData(data);
        formClient(data);
        filters(data);
    } catch (error) {
        console.log(error);
    }
};

// received data 
const flagsData = (data) => {
    let element = "";
    data.forEach(item => {
        element += `<article class="card">
                      <img src="${item.flag}" alt="flag" class="img-fluid">
                      <div class="card-content">
                          <h3>${item.name}</h3>
                          <p><b>Population:</b>${item.population}</p>
                          <p><b>Region:</b>${item.region}</p>
                          <p><b>Capital:</b>${item.capital}</p>
                          <p>
                             <a href="country.html?name=${item.name}">More info</a>
                          </p>
                      </div>
                    </article>`;
    });
    flags.innerHTML = element;
};