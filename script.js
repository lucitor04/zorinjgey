function showRegister() {
    document.getElementById('auth-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('auth-container').style.display = 'block';
}

function register() {
    let username = document.getElementById('register-username').value;
    let password = document.getElementById('register-password').value;

    if (username === "" || password === "") {
        alert("Заполните все поля");
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.username === username);

    if (userExists) {
        alert("Уже есть аккаунт с таким логином");
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert("Успешно!");
        showLogin();
    }
}

function login() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert("Вы вошли в аккаунт");
        window.location.href = 'main.html';
    } else {
        alert("Неверный пароль либо логин");
    }
}
