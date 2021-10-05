const loginForm = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').nodeValue.trim();
    const password = document.querySelector('#password-login').nodeValue.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};

const signupForm = async (event) => {
    event.preventDefault();

    const user = document.querySelector('#user-sinup').nodeValue.trim();
    const email = document.querySelector('#email-signup').nodeValue.trim();
    const password = document.querySelector('#password-signup').nodeValue.trim();

    if (user && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ user, email, password }),
            headers: {'Content-Type': 'application/json' },
        });
        if (response.ok) {
            document.location.replace('/post');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);