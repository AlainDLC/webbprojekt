
var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
    // The following conditional check will not work locally - only on a server
    //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '<table>';
    newContent += '<th>Namm</th><th>Klass</th><th>Betyg</th><th>Feedback</th>';
    for (var i = 0; i < responseObject.resultat.length; i++) { // Loop through object
        newContent += '<tr>';
        newContent += '<td>' + responseObject.resultat[i].namn + '</td>';
        newContent += '<td>' +responseObject.resultat[i].klass + '</td>';
        newContent += '<td>' +responseObject.resultat[i].betyg + '</td>';
        newContent += '</tr>';
    }
    newContent += '</table>';


    // Update the page with the new content
    document.getElementById('content').innerHTML = newContent;

}

xhr.open('GET', '../data/resultat.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request

// When working locally in Firefox, you may see an error saying that the JSON is not well-formed.
// This is because Firefox is not reading the correct MIME type (and it can safely be ignored).

// If you get it on a server, you may need to se the MIME type for JSON on the server (application/JSON).