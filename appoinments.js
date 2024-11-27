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
