document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

       try {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = '/login.html';
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (err) {
        alert('Network error. Please try again later.');
        console.error(err);
    }
});