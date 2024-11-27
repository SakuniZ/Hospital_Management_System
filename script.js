// Patients Management
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

// Doctors Management
const doctorForm = document.getElementById("doctor-form");
const doctorList = document.getElementById("doctor-list");

doctorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("doctor-name").value;
  const specialty = document.getElementById("doctor-specialty").value;

  const li = document.createElement("li");
  li.textContent = `${name} (Specialty: ${specialty})`;
  doctorList.appendChild(li);

  doctorForm.reset();
});

// Appointments Management
const appointmentForm = document.getElementById("appointment-form");
const appointmentList = document.getElementById("appointment-list");

appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const patient = document.getElementById("appointment-patient").value;
  const doctor = document.getElementById("appointment-doctor").value;
  const time = document.getElementById("appointment-time").value;

  const li = document.createElement("li");
  li.textContent = `Appointment: ${patient} with ${doctor} at ${time}`;
  appointmentList.appendChild(li);

  appointmentForm.reset();
});
