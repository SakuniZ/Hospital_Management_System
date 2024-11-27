const patientForm = document.getElementById("patient-form");
const patientList = document.getElementById("patient-list");

patientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("patient-name").value;
  const age = document.getElementById("patient-age").value;

  const li = document.createElement("li");
  li.textContent = `${name} (Age: ${age})`;
  patientList.appendChild(li);

  patientForm.reset();
});
