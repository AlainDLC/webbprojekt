/**
 * Created by Soniiqaah on 2016-05-04.
 */
var xhr = new XMLHttpRequest();

xhr.onload = function() {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);

        var newContent = '';
        var username = '';
        var userpassword = '';
        var usertype = '';
        var confirmpass = '';
        var admin = '';
        var student = '';

        for (var i = 0; i < responseObject.users.length; i++) {
            newContent += '<div>';
            newContent += '<p>' + responseObject.users[i].username + '</p>';
            newContent += '</div>';
            // Kontrollera anändarnamn och lösenord -- if satser

            if (username.length < 5) {
                elMsg.textContent = 'The username is not long enough, please try again';

            } else {
                elMsg.textContent = '';

                if (userpassword.length < 5) {
                    elMsg.textContent = ' You have to at least type in six characters for the password';

                } else if
                (userpassword != confirmpass) {
                    elMsg.textContent = "The both password must match!";

                } else {
                    elMsg.textContent = ' You are logged in!';
                }

                // Om man är admin skickas till admin (med Javascript)
                if (usertype === admin) {
                    elMsg.textContent = "länka till admin sidan";


                } else {
                    elMsg.textContent = '';
                    if (usertype === student) {
                        elMsg.textContent = "länka till student";

                        // Om man är student skickas till student
                    }
                    document.getElementById('content').innerHTML = newContent;

                }

            }
            xhr.open('GET', '../data/inlog.json', true); // Prepare the request
            xhr.send(null);}
    }
};







