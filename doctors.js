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
