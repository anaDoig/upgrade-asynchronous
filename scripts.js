async function showData() {
    let response = await fetch('https://api.agify.io?name=michael');
    let data = await response.json();

    console.log(data);
}

showData();

console.log('-------------');

const button = document.querySelector('button');
const input = document.querySelector('input');

button.addEventListener('click', getData);

function getData() {
    let inputValue = input.value;
    let url = `https://api.nationalize.io/?name=${inputValue}`;

    fetch(url)
        .then( response => {
            return response.json();
        })
        .then( result => {
            console.log(result);
        })
        .catch( error => {
            console.log(error);
        })
};
