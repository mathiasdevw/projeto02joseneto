function registro(event) {
    event.preventDefault();

    const usuario = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-senha').value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
        alert('A senha deve ter no mínimo 8 caracteres, incluindo letras e números.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find((user) => user.email === email)) {
        alert('E-mail já cadastrado!');
        return;
    }

    const selecaoanimes = [];
    const caixadeanimes = document.querySelectorAll('input[name="anime"]:checked');
    caixadeanimes.forEach((checkbox) => {
        selecaoanimes.push(checkbox.value);
    });

    if (selecaoanimes.length === 0) {
        alert('Por favor, selecione ao menos um anime favorito.');
        return;
    }

    const user = { usuario, email, password, favoriteAnimes: selecaoanimes };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    localStorage.setItem('currentUser', JSON.stringify(user));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}
