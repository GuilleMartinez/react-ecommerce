function fetchWithDetaly(url, delay, callback) {
    setTimeout(function executeFetch() {
        fetch(url)
        .then( response => response.json() )
        .then( json => callback(json) ); 
    }, delay );
}

function getRandomIndex (array) {
    return Math.floor( Math.random() * (array.length-1) ) + 1;
}

export {fetchWithDetaly, getRandomIndex}; 