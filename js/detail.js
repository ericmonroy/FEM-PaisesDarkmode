const flagsDetail = document.getElementById("flagDetail");
flagsDetail.innerHTML = `Loading Detail country...`;
const query = new URLSearchParams(window.location.search);
let code;

// init load params url
document.addEventListener('DOMContentLoaded', (e) => {
    if (window.location.search.includes('name')) {
        code = query.get('name');
        fetchDataName(code);
    } else if (window.location.search.includes('code')) {
        code = query.get('code');
        fetchDataCode(code);
    }
});

// get data from api countries all
const fetchDataName = async (code) => {
    try {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        const filterData = data.filter(item => item.name === code);
        flagsData(filterData);

    } catch (error) {
        console.log(error);
        flags.innerHTML = `Error get detail country.`;
    }
};


// get data from api countries all
const fetchDataCode = async (code) => {
    try {
        const res = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${code}`);
        const data = await res.json();
        console.log(data)
        const filterData = data.filter(item => item.alpha3Code === code);
        flagsData(filterData);

    } catch (error) {
        console.log(error);
    }
};



// received data 
const flagsData = (data) => {
    let element = "";
    let borders = "";
    let domain = "";
    let currencie = "";
    let languages = "";
    for (let i = 0; i < data.length; i++) {
        if (data[i].topLevelDomain.length > 0) {
            domain += `<p><b>Top Level Domain: </b>${data[i].topLevelDomain}</p>`;
        }
        if (data[i].currencies.length > 0) {
            currencie += `<p><b>Currencies: </b>${data[i].currencies[0].name}</p>`;
        }
        if (data[i].languages.length > 0) {
            languages += `<p><b>Languages: </b>${data[i].languages[0].name}</p>`;
        }
        if (data[i].borders.length > 0) {
            for (let e = 0; e < data[i].borders.length; e++) {
                borders += `<a href="country.html?code=${data[i].borders[e]}" class="btn-border-detail">${data[i].borders[e]}</a>`;
            }
        } else {
            borders += `No borders`;
        }

        element += `<article class="card-detail">
                      <img src="${data[i].flag}" alt="flag" class="img-fluid">
                      <div class="card-content-detail">
                      <h3>${data[i].name}</h3>
                       <div class="detail-main">
                           <div class="detail-1">
                              <p><b>Native Name: </b>${data[i].nativeName}</p>
                              <p><b>Population: </b>${data[i].population}</p>
                              <p><b>Region: </b>${data[i].region}</p>
                              <p><b>Sub region: </b>${data[i].subregion}</p>
                              <p><b>Capital: </b>${data[i].capital}</p>
                          </div>
                          <div class="detail-2">
                              ${domain}
                              ${currencie}
                              ${languages}
                          </div>
                        </div>
                        <div class="borders-c">
                           <p class="border-t"><b>Border Countries: </b>${borders}</p>
                       </div>
                      </div>
                    </article>`;
    }
    /*    data.forEach(item => {
   
       }); */
    flagsDetail.innerHTML = element;
};
