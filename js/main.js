/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */
 /*





669ca14c
http://www.omdbapi.com/?apikey=669ca14c

http://www.omdbapi.com/?apikey=669ca14c&s=star&y=1990
koden ovan söker efter filmer/serier med titlar "star" från 1990


http://www.omdbapi.com/?apikey=669ca14c + (sökkommando) + & + 


*/

/**
* According to documentation, you need at least 2 parameters when calling the API http://www.omdbapi.com/
* 1 Required parameter: apikey
* 2 Required parameter: One of the following i=, t= or s=
*
* 
* Example with parameter s=star trek
* http://www.omdbapi.com/?apikey=[669ca14c]&s=star trek
*
* Example with parameter s=star trek AND y=2020
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&y=2020
*
* Example with parameter s=star trek AND type=series
* http://www.omdbapi.com/?apikey=[yourkey]&s=star trek&type=2020
*
*/
//let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';

//snappa upp API,input, knapp och tomma listan från html
let baseUrl = 'http://www.omdbapi.com/';
let apiKey = '?apikey=669ca14c';
let input = document.getElementById("title");
let button = document.getElementById("searchBtn");
let list = document.getElementById("result");


//skapa funktion som hämtar data från API samt kollar om kontakt med server är upprätthållen
//i första .then blocket. i andra .then blocket splitta datan så man får strings och sätt ut dom på den tomma listan i html.
function fetchData () {
   let url = baseUrl + apiKey + input;
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Something wrong with the request');
        }

        return response.text();
    })
    .then((data) => {
        let words = data.split(',')

        for (let word of words) {
            list.innerHTML += '<li>' + word + '</li>';
        }
    })
    .catch((error) => {
        console.log(error);
    })
}


//När man trycker på knappen, använd fetchData funktionen
button.addEventListener('click', fetchData);

/*

    .then((response) => {
        if (!response.ok) {
        throw new Error('Something wrong with the request');
        }
        
    })

    */