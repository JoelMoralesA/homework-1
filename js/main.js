/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */
 /*





669ca14c
http://www.omdbapi.com/?apikey=669ca14c

http://www.omdbapi.com/?apikey=669ca14c&i=



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

//let url = 'http://www.omdbapi.com/?apikey=[yourkey]=star trek';
*/




//==========LÖSNING============

//Skapar en function som hämtar url + value från de olika titlarna som syns i HTML
//samt länka dessa till dom tomma "div"sen samt tomma img i HTML

function showMovie(sw) {
    var url = "http://www.omdbapi.com/?apikey=669ca14c&i=" + sw,

    //skapa en ny variabel som hämtar ny data när man ändrar film bland alternativen
    dataRequest = new XMLHttpRequest(),
    

    //skapa variabel som länkas till "img" i HTML så filmens poster kan läggas där
    poster = document.querySelector("img");

    //öppna en request till URL:en för att hämta data
    dataRequest.open('GET', url);

    //ange att jag vill ha tillbaka datan i .responseType = 'json'; för att få objects tillbaka, för att enkelt kunna komma åt den olika datan man får tillbaka
    dataRequest.responseType = "json";

    //skicka requesten till servern
    dataRequest.send();




    //skapa en till function som applicerar datan hämtat från URL. Endast efter att allting har hämtats från API:n

    dataRequest.onload = function() {
        //skapar en variabel "data" som sparar all respons från requesten
        var data = dataRequest.response;

        //snappa upp filmens poster källa och applicera det i src i html
        poster.src = `${data.Poster}`;

        //lägg till alt. till bilden,  dvs kort info om bilden. snappa upp filmens text + titel 
        poster.alt = `Movie poster for ${data.Title}`;

        //snappa upp filmens titel samt år den kom ut. applicera det i den tomma content div:en
        content.innerHTML = ` <h2>${data.Title} ${data.Year} </h2>`;

        //snappa upp filmens beskrivning 
        content.innerHTML += `<p id="p1">${data.Plot} </p><br> <br> <p id="p2">I rate this movie 1/5, based on the only fact that I have never seen any Star Wars movie.</p> <p id="p3">Ever. </p>`;
    }
}

//använd movies från listan i html. "change" attributen ändrar det som visas beroende på vilken film man tryckt på.
movies.addEventListener("change", function() {
    showMovie(movies.value);
})
showMovie(movies.value);