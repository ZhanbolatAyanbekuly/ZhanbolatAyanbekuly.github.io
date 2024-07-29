let registrationData = [];

document.addEventListener('DOMContentLoaded', function () {
     const userDataContainer = document.getElementById('userData');
     registrationData = JSON.parse(localStorage.getItem('registrationData')) || [];
     updateTable();
});

function editUser(user) {
     const newName = prompt('Enter a new name:', user.fullName);
     if (newName !== null) {
          user.fullName = newName;
          updateTable();
          localStorage.setItem('registrationData', JSON.stringify(registrationData));
     }
}

function deleteUser(user) {
     const confirmation = confirm('Are you sure you want to delete ' + user.fullName + '?');
     if (confirmation) {
          const index = registrationData.indexOf(user);
          if (index !== -1) {
               registrationData.splice(index, 1);
               updateTable();
               localStorage.setItem('registrationData', JSON.stringify(registrationData));
          }
     }
}

function updateTable() {
     const userDataContainer = document.getElementById('userData');
     userDataContainer.innerHTML = '';

     for (const user of registrationData) {
          const row = document.createElement('tr');

          const fullNameCell = document.createElement('td');
          fullNameCell.textContent = user.fullName;

          const emailCell = document.createElement('td');
          emailCell.textContent = user.email;

          const ageCell = document.createElement('td');
          ageCell.textContent = user.age;

          const actionsCell = document.createElement('td');

          const editButton = document.createElement('button');
          editButton.textContent = "Edit";
          editButton.classList.add("edit");
          editButton.addEventListener('click', () => editUser(user));

          const deleteButton = document.createElement('button');
          deleteButton.textContent = "Delete";
          deleteButton.classList.add("delete");
          deleteButton.addEventListener('click', () => deleteUser(user));

          actionsCell.appendChild(editButton);
          actionsCell.appendChild(deleteButton);

          row.appendChild(fullNameCell);
          row.appendChild(emailCell);
          row.appendChild(ageCell);
          row.appendChild(actionsCell);

          userDataContainer.appendChild(row);
     }
}

document.addEventListener("DOMContentLoaded", function () {
     displayFormData();
});

function displayFormData() {
     const formDataSection = document.getElementById("formData");

     const formData = JSON.parse(localStorage.getItem('formData')) || [];

     formData.forEach((data, index) => {
          const formDataCard = document.createElement("div");
          formDataCard.classList.add("card", "m-3", "col-md-4");

          formDataCard.innerHTML = `
               <div class="card-body">
                    <h5 class="card-title">${data.patientName}</h5>
                    <p class="card-text">Age: ${data.patientAge}</p>
                    <p class="card-text">Reason for Hospitalization: ${data.reasonForHospitalization}</p>
                    <p class="card-text">Admission Date: ${data.admissionDate}</p>
                    <p class="card-text">Contact Number: ${data.contactNumber}</p>
                    <p class="card-text">Type of Room: ${data.roomPreference}</p>
                    <button class="btn btn-danger delete-button" onclick="deleteFormData(${index})">Delete</button>
               </div>
          `;

          formDataSection.appendChild(formDataCard);
     });
}

function deleteFormData(index) {
     const formData = JSON.parse(localStorage.getItem('formData')) || [];

     const confirmation = confirm('Are you sure you want to delete this form data?');
     if (confirmation) {
          formData.splice(index, 1);

          localStorage.setItem('formData', JSON.stringify(formData));

          const formDataSection = document.getElementById("formData");
          formDataSection.innerHTML = "";

          displayFormData();
     }
}



var quizResults = JSON.parse(localStorage.getItem('quizResults')) || [];
var quizResultsBody = document.getElementById('quizResults');
quizResultsBody.innerHTML = '';

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

function deleteQuizResult(index) {
     const confirmation = confirm('Are you sure you want to delete this quiz result?');
     if (confirmation) {
          quizResults.splice(index, 1);
          localStorage.setItem('quizResults', JSON.stringify(quizResults));
          location.reload();
     }
}