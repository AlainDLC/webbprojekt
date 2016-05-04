/**
 * Created by Kungen on 2016-05-02.
 */
var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
    return {
        restrict: 'AE',
        scope: {},
        templateUrl: 'template.html',
        link: function(scope, elem, attrs) {
            scope.start = function() {
                scope.id = 0;
                scope.quizOver = false;
                scope.inProgress = true;
                scope.getQuestion();
            };

            scope.reset = function() {
                scope.inProgress = false;
                scope.score = 0;
            }

            scope.getQuestion = function() {
                var q = quizFactory.getQuestion(scope.id);
                if(q) {
                    scope.question = q.question;
                    scope.options = q.options;
                    scope.answer = q.answer;
                    scope.answerMode = true;
                } else {
                    scope.quizOver = true;
                }
            };

            scope.checkAnswer = function() {
                if(!$('input[name=answer]:checked').length) return;

                var ans = $('input[name=answer]:checked').val();

                if(ans == scope.options[scope.answer]) {
                    scope.score++;
                    scope.correctAns = true;
                } else {
                    scope.correctAns = false;
                }

                scope.answerMode = false;
            };

            scope.nextQuestion = function() {
                scope.id++;
                scope.getQuestion();
            }

            scope.reset();
        }
    }
});

app.factory('quizFactory', function() {
    var questions = [
        {
            question: "Vart ligger Golden Gate Bron?",
            options: ["San Fransico", "Stockholm", "Madrid", "Ryssland"],
            answer: 0
        },
        {
            question: "Vem är människans bästa vän?",
            options: ["Katt", "Hund", "Fågel", "Fisk"],
            answer: 1
        },
        {
            question: "Vad heter Sveriges tredje största ö?",
            options: ["Öland", "Hisingen", "Orust"],
            answer: 2
        },
        {
            question: "Vad är 1 + 1?",
            options: ["2", "4", "5", "7"],
            answer: 0
        },
        {
            question: "Vad är 8/10?",
            options: ["0,1", "1", "2", "1000"],
            answer: 0
        }
    ];

    return {
        getQuestion: function(id) {
            if(id < questions.length) {
                return questions[id];
            } else {
                return false;
            }
        }
    };
});