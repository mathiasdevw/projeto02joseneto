function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const mensagem = document.getElementById('msg');

    mensagem.textContent = '';

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login bem-sucedido!');
        window.location.href = 'home.html';
    } else {
        mensagem.textContent = 'E-mail ou senha incorretos. Tente novamente.';
    }
}
