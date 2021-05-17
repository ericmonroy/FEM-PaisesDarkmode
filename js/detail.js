

const flagsDetail = document.getElementById("flagDetail");

const query = new URLSearchParams(window.location.search);
const params = query.get('name');

// init load fetch data
document.addEventListener('DOMContentLoaded', (e) => {
    fetchData();
});

// get data from api.json
const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        const filterData = data.filter(item => item.name === params);
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


    data.forEach(item => {
        if (item.topLevelDomain.length > 0) {
            domain += `<p><b>Top Level Domain: </b>${item.topLevelDomain}</p>`;
        }

        if (item.currencies.length > 0) {
            currencie += `<p><b>Currencies: </b>${item.currencies[0].name}</p>`;
        }

        if (item.languages.length > 0) {
            languages += `<p><b>Languages: </b>${item.languages[0].name}</p>`;
        }

        if (item.borders.length > 0) {
            borders += `<p>
           <b class="border-t">Border Countries: </b>
                <a class="btn-border-detail">${item.borders[0]}</a>
                <a class="btn-border-detail">${item.borders[1]}</a>     
                <a class="btn-border-detail">${item.borders[2]}</a>
           </p>`;
        }
        element += `<article class="card-detail">
                      <img src="${item.flag}" alt="flag" class="img-fluid">

                      <div class="card-content-detail">
                      <h3>${item.name}</h3>

                       <div class="detail-main">
                           <div class="detail-1">
                              <p><b>Native Name: </b>${item.nativeName}</p>
                              <p><b>Population: </b>${item.population}</p>
                              <p><b>Region: </b>${item.region}</p>
                              <p><b>Sub region: </b>${item.subregion}</p>
                              <p><b>Capital: </b>${item.capital}</p>
                          </div>
                          <div class="detail-2">
                              ${domain}
                              ${currencie}
                              ${languages}
                          </div>
                        </div>

                        <div class="borders-c">
                          ${borders}
                       </div>
                       
                      </div>
                    </article>`;
    });
    flagsDetail.innerHTML = element;
};
