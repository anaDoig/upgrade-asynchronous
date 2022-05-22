async function showData() {
    let response = await fetch('https://api.agify.io?name=michael');
    let data = await response.json();

    console.log(data);
}

showData();

console.log('-------------');

const button = document.querySelector('button');
button.addEventListener('click', getData);

function getData() {
    const url = 'https://api.nationalize.io';

    fetch(url)
        .then( response => {
            return response.json();

        })
        .then( result => {
            console.log(result);
        })
};

