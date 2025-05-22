let patients = JSON.parse(localStorage.getItem("patients")) || [];

function renderPatients() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  patients.forEach((patient, index) => {
    list.innerHTML += `
      <div class="patient">
        <strong>${patient.name}</strong><br>
        Disease: ${patient.disease}<br>
        Doctor: ${patient.doctor}
        <button onclick="deletePatient(${index})">Delete</button>
      </div>
    `;
  });
}

function addPatient() {
  const name = document.getElementById("name").value.trim();
  const disease = document.getElementById("disease").value.trim();
  const doctor = document.getElementById("doctor").value.trim();

  if (!name || !disease || !doctor) {
    alert("Please fill all fields!");
    return;
  }

  patients.push({ name, disease, doctor });
  localStorage.setItem("patients", JSON.stringify(patients));
  renderPatients();

  document.getElementById("name").value = "";
  document.getElementById("disease").value = "";
  document.getElementById("doctor").value = "";
}

function deletePatient(index) {
  if (confirm("Are you sure you want to delete this patient?")) {
    patients.splice(index, 1);
    localStorage.setItem("patients", JSON.stringify(patients));
    renderPatients();
  }
}

renderPatients();
