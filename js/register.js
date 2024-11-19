function Cadastro(event) {
    event.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      alert('A senha deve ter no mínimo 8 caracteres, incluindo letras e números.');
      return;
    }

    if (localStorage.getItem(email)) {
      alert('E-mail já cadastrado!');
      return;
    }

    const selecaoanimes = [];
    const caixadeanimes = document.querySelectorAll('input[name="anime"]:checked');
    animeCheckboxes.forEach((checkbox) => {
      selectedAnimes.push(checkbox.value);
    });

    const usuario = { name, email, password, favoriteAnimes: selecaoanimes };
    localStorage.setItem(email, JSON.stringify(user));

    localStorage.setItem('currentUser', JSON.stringify(user));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}
