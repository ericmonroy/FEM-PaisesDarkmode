const form = document.getElementById("form");
const inputForm = document.getElementById("inputForm");


// search data received data from fetch
const formClient = (data) => {
    form.addEventListener('keyup', (e) => {
        e.preventDefault();
        const wordClient = inputForm.value.toLowerCase();
        console.log(wordClient);

        // save elements
        const filterArray = data.filter(item => {
            // get word
            const wordApi = item.name.toLowerCase();
            // return item only item coincidence
            if (wordApi.indexOf(wordClient) !== -1) {
                return item;
            }
        });

        // get flags filters
        flagsData(filterArray);
    });
};