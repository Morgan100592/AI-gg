const loginForm = document.getElementById('loginForm');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const response = await fetch('https://mycool-profile.free.beehiiv.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        if (data.success) {
            localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = 'AIdashboard.html';
        } else {
            document.getElementById('message').innerText = 'Wrong email or password!';
        }
    });
}

if (document.getElementById('name')) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('name').innerText = user.name;
        document.getElementById('age').innerText = user.age;
        document.getElementById('color').innerText = user.color;
        document.getElementById('country').innerText = user.country;
    }
}