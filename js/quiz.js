var healthQuestions = [{
          question: "What is the recommended daily intake of water for an average adult?",
          options: ["2 liters", "3 liters", "4 liters", "5 liters"],
          correctAnswer: "2 liters"
     },
     {
          question: "Which nutrient is essential for strong bones and teeth?",
          options: ["Vitamin C", "Calcium", "Iron", "Vitamin D"],
          correctAnswer: "Calcium"
     },
     {
          question: "What is the primary function of the cardiovascular system?",
          options: ["Digestion", "Transportation of oxygen and nutrients", "Immune response", "Motor control"],
          correctAnswer: "Transportation of oxygen and nutrients"
     },
     {
          question: "Which food group is a good source of healthy fats?",
          options: ["Fruits and vegetables", "Dairy products", "Grains and cereals", "Nuts and seeds"],
          correctAnswer: "Nuts and seeds"
     },
     {
          question: "What is the recommended amount of physical activity for adults per week?",
          options: ["30 minutes", "60 minutes", "90 minutes", "120 minutes"],
          correctAnswer: "60 minutes"
     }
];

var mentalHealthQuestions = [{
          question: "What is the definition of mental health?",
          options: ["Absence of mental disorders", "State of well-being", "Being happy all the time", "Having a strong mind"],
          correctAnswer: "State of well-being"
     },
     {
          question: "Which neurotransmitter is often associated with feelings of happiness?",
          options: ["Serotonin", "Dopamine", "Endorphins", "GABA"],
          correctAnswer: "Dopamine"
     },
     {
          question: "What is a common symptom of anxiety?",
          options: ["Elevated mood", "Excessive worrying", "Decreased heart rate", "Increased appetite"],
          correctAnswer: "Excessive worrying"
     },
     {
          question: "Which therapy focuses on changing negative thought patterns and behaviors?",
          options: ["Psychoanalysis", "Cognitive-Behavioral Therapy (CBT)", "Humanistic therapy", "Exposure therapy"],
          correctAnswer: "Cognitive-Behavioral Therapy (CBT)"
     },
     {
          question: "What is the main purpose of mindfulness meditation in mental health?",
          options: ["Achieving altered states of consciousness", "Enhancing concentration", "Suppressing emotions", "Avoiding self-reflection"],
          correctAnswer: "Enhancing concentration"
     }
];

var anatomyQuestions = [{
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Liver", "Skin", "Lungs"],
          correctAnswer: "Skin"
     },
     {
          question: "Which bone protects the brain?",
          options: ["Femur", "Skull", "Tibia", "Radius"],
          correctAnswer: "Skull"
     },
     {
          question: "How many chambers are there in the human heart?",
          options: ["Two", "Three", "Four", "Five"],
          correctAnswer: "Four"
     },
     {
          question: "What is the function of the pancreas?",
          options: ["Digestion", "Blood sugar regulation", "Breathing", "Vision"],
          correctAnswer: "Blood sugar regulation"
     },
     {
          question: "Which muscle is responsible for breathing?",
          options: ["Biceps", "Quadriceps", "Diaphragm", "Pectoralis major"],
          correctAnswer: "Diaphragm"
     }
];

var quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
var quizResultsBody = document.getElementById('quizResults');
quizResultsBody.innerHTML = '';

function displayQuizResults() {
     quizResults.forEach(function (result, index) {
          var row = document.createElement('tr');
          row.innerHTML = `<td>${result.userName}</td>
                         <td>${result.quizName}</td>
                         <td>${result.timeTaken}</td>
                         <td>${result.correctAnswersCount}</td>
                         <td>
                              <button class="btn btn-danger" onclick="deleteQuizResult(${index})">Delete</button>
                         </td>`;
          quizResultsBody.appendChild(row);
     });
}

function openQuizModal(quizTitle, questions) {
     document.getElementById('quizTitle').innerText = quizTitle;
     var quizModal = new bootstrap.Modal(document.getElementById('quizModal'));
     quizModal.show();

     var timeLeft = 0;
     document.getElementById('timeLeft').innerText = timeLeft;
     var timer;

     var correctAnswersCount = 0;

     document.getElementById('numberOfQuestions').innerText = questions.length;

     var questionsContainer = document.getElementById('questionsContainer');
     questionsContainer.innerHTML = "";
     questions.forEach(function (q, index) {
          var questionHtml = `<div class="mb-3">
               <label for="question${index + 1}" class="form-label">${q.question}</label>`;
               q.options.forEach(function (option, optionIndex) {
                    questionHtml += `<div class="form-check">
                    <input class="form-check-input" type="radio" name="question${index + 1}" id="q${index + 1}Option${optionIndex + 1}" value="${option}">
                    <label class="form-check-label" for="q${index + 1}Option${optionIndex + 1}">${option}</label>
               </div>`;
          });
          questionHtml += `</div>`;
          questionsContainer.innerHTML += questionHtml;
     });

     document.getElementById('quizForm').addEventListener('submit', onSubmit);

     function onSubmit(event) {
          event.preventDefault();

          var userName = document.getElementById('userName').value;

          questions.forEach(function (q, index) {
               var answer = getSelectedRadioValue(`question${index + 1}`);
               if (answer === q.correctAnswer) {
                    correctAnswersCount++;
               }
          });

          saveQuizResult(userName, quizTitle, timeLeft, correctAnswersCount);

          var quizModal = bootstrap.Modal.getInstance(document.getElementById('quizModal'));
          quizModal.hide();

          document.getElementById('quizForm').removeEventListener('submit', onSubmit);

          clearInterval(timer);

          alert("Quiz completed! Number of correct answers is: " + correctAnswersCount + "/" + questions.length);

          quizResultsBody.innerHTML = "";
          displayQuizResults();
     }

     timer = setInterval(function () {
          timeLeft++;
          document.getElementById('timeLeft').innerText = timeLeft;
     }, 1000);

     function getSelectedRadioValue(questionName) {
          var options = document.getElementsByName(questionName);
          for (var i = 0; i < options.length; i++) {
               if (options[i].checked) {
                    return options[i].value;
               }
          }
          return null;
     }

     function saveQuizResult(userName, quizName, timeTaken, correctAnswersCount) {
          var existingResults = JSON.parse(localStorage.getItem('quizResults')) || [];

          existingResults.push({
               userName: userName,
               quizName: quizName,
               timeTaken: timeTaken,
               correctAnswersCount: correctAnswersCount
          });

          localStorage.setItem('quizResults', JSON.stringify(existingResults));
     }
}