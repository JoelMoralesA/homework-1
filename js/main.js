/**
 *  OMDb template
 *	Documentation: http://www.omdbapi.com/
 *  Generate an API key here: http://www.omdbapi.com/apikey.aspx
 */
 /*





669ca14c
http://www.omdbapi.com/?apikey=669ca14c

http://www.omdbapi.com/?apikey=669ca14c&i=



NÄST SISTA (första API parameter)
http://www.omdbapi.com/?apikey=669ca14c&s=Rogue%20One:%20A%20Star%20Wars&Y=2017

SISTA FILMEN (andra API parametern)
http://www.omdbapi.com/?apikey=669ca14c&s=Star%20Wars:%20Episode%20IX&type=movie


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

    //hämta ny data när man ändrar film bland alternativen
    dataRequest = new XMLHttpRequest(),
    


}