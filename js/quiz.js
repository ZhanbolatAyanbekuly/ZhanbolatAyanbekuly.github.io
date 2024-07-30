var disinfectionQuestions = [{
     question: "Дезинфекция дегеніміз не?",
     options: ["Бөлмені тазарту", "Вирус пен бактерияларды жою", "Бөлмені безендіру", "Дыбыс оқшаулау"],
     correctAnswer: "Вирус пен бактерияларды жою"
},
{
     question: "Үйді немесе кеңсені дезинфекциялау қаншалықты жиі қажет?",
     options: ["Айына бір рет", "Аптасына бір рет", "Жылына бір рет", "Ешқашан"],
     correctAnswer: "Айына бір рет"
},
{
     question: "Дезинфекциялаушы заттарды қолданғанда не істеу керек?",
     options: ["Терезелерді ашу", "Қолғап кию", "Бетперде кию", "Барлық жауаптар дұрыс"],
     correctAnswer: "Барлық жауаптар дұрыс"
},
{
     question: "Дезинфекция қызметтерін кім атқарады?",
     options: ["Тек қана дәрігерлер", "Кәсіби мамандар", "Үй шаруасындағы әйелдер", "Балалар"],
     correctAnswer: "Кәсіби мамандар"
},
{
     question: "Дезинфекция не үшін қажет?",
     options: ["Тазалықты сақтау үшін", "Вирус пен бактерияларды жою үшін", "Ауа сапасын жақсарту үшін", "Барлық жауаптар дұрыс"],
     correctAnswer: "Барлық жауаптар дұрыс"
}];

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

          alert("Викторина аяқталды! Дұрыс жауаптар саны: " + correctAnswersCount + "/" + questions.length);

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