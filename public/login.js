document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
       
        localStorage.setItem('token', data.token);
        alert(data.message);
        window.location.href = '/index.html'; 
    } else {
        alert(`Error: ${data.message}`);
    }
});



