

let birthDate = document.getElementById("birth")
let ageNO = document.getElementById("ageNo")
birthDate.addEventListener("change",function(){
    let selectdate = new Date(this.value)
    let today = new Date();
   
    if (selectdate > today)
    {
        alert("Birth date cannot be in the futuer")
        ageNO.value="";
        birthDate.value = "";
        return
    }
    let age = today.getFullYear()- selectdate.getFullYear()
     let monthdiffrence = today.getMonth()- selectdate.getMonth()

     if(monthdiffrence < 0 ||( monthdiffrence === 0 &&  today.getDate()<selectdate.getDate())){
        age--;
     }
     ageNO.value=age;
})




let book = document.getElementById("date")

book.addEventListener("change",function(){
    let selectdate = new Date(this.value);
    let today = new Date();
        if(selectdate == today || selectdate > today){
            return
        }
        else{
            alert("Booking cannot be in past")
            book.value = ""
        }
})




document.getElementById('appointmentForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const data = {
    name: document.querySelector('input[name="name"]').value,
    gender: document.querySelector('select[name="gender"]').value,
    birth: document.querySelector('input[name="birth"]').value,
    age: document.getElementById('ageNo').value,
    doctor: document.querySelector('select[name="doctor"]').value,
    date: document.querySelector('input[name="date"]').value,
    time: document.querySelector('select[name="time"]').value,
    reason: document.querySelector('input[name="reason"]').value
  };

  try {
    const response = await fetch('http://localhost:3000/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json(); 

    if (response.ok) {
  // save form data
  localStorage.setItem("appointmentData", JSON.stringify(data));

  // redirect to summary page
  window.location.href = "/summary.html";
} else {
      alert(result.message || 'Error booking appointment.'); 
    }

  } catch (error) {
    console.error('Fetch error:', error);
    alert('Server error! Please try again later.');
  }
});


(function() {
    const token = localStorage.getItem('token');
    if (!token) {
        alert('You must be logged in to view this page.');
        window.location.href = '/login.html';
    }
})();


const logoutButton = document.getElementById('logoutButton');

logoutButton.addEventListener('click', () => {
  localStorage.removeItem('token');
  alert('You have been logged out.');
  window.location.href = '/login.html';
});


