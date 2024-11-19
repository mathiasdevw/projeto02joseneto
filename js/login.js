function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const usuario = JSON.parse(localStorage.getItem(email));

    if (usuario && usuario.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(usuario));
      window.location.href = 'home.html';
    } else {
      alert('Credenciais inválidas!');
    }
}
