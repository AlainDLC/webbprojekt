/**
 * Created by Kungen on 2016-04-29.
 */
var xhr = new XMLHttpRequest();


xhr.onload = function(){
    //if(xhr.status === 200){
    responseObject = JSON.parse(xhr.responseText);

    var newContent = '';
    for (var i = 0; i < responseObject.questions.length; i++){
        newContent+='<div class="question">';
        newContent += '<p>' + responseObject.questions[i].question + '</p>';
        newContent+= '<input type="radio" value="' + responseObject.questions[i].answer1 + '" name="quest' + i + '" id="question' + i + '">';
        newContent+= responseObject.questions[i].answer1;
        newContent+= '<input type="radio" value="' + responseObject.questions[i].answer2 + '" name="quest' + i + '" id="question' + i + '">';
        newContent+= responseObject.questions[i].answer2;
        newContent+= '<input type="radio" value="' + responseObject.questions[i].answer3 + '" name="quest' + i + '" id="question' + i + '">';
        newContent+= responseObject.questions[i].answer3;
        newContent+= '</div>';
    }
    document.getElementById('content').innerHTML = newContent;

    // }

};

xhr.open('GET', '../data/prov.json', true);        // Prepare the request
xhr.send(null);