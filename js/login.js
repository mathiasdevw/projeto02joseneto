export const apiUrl = 'https://projetoweb-api.vercel.app/';


async function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const mensagem = document.getElementById('msg');

    mensagem.textContent = '';

    const user = { email, password };


    try {
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user}) 
        });
    
        const data = await response.json(); 
    
        if (data.user) {
            localStorage.setItem('currentUser', JSON.stringify(data.user));
            alert('Login bem-sucedido!');
            window.location.href = 'home.html';
        } else {
            mensagem.textContent = 'E-mail ou senha incorretos. Tente novamente.';
        }
    } catch (error) {
        console.error(error);
        mensagem.textContent = 'Ocorreu um erro. Tente novamente.';
    }
}    

