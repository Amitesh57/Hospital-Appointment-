const token = localStorage.getItem("token");
const data = JSON.parse(localStorage.getItem("appointmentData"));

if (!token) {
  window.location.href = "/login.html";
}

if (!data) {
  window.location.href = "/index.html";
}

const box = document.getElementById("summaryBox");

box.innerHTML = `
  <p><b>Name:</b> ${data.name}</p>
  <p><b>Gender:</b> ${data.gender}</p>
  <p><b>Birth:</b> ${data.birth}</p>
  <p><b>Age:</b> ${data.age}</p>
  <p><b>Doctor:</b> ${data.doctor}</p>
  <p><b>Date:</b> ${data.date}</p>
  <p><b>Time:</b> ${data.time}</p>
  <p><b>Reason:</b> ${data.reason}</p>
`;

function goHome() {
  window.location.href = "/index.html";
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("appointmentData");
  window.location.href = "/login.html";
}