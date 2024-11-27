
function login(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password  = document.getElementById('login-password').value;
    const mensagem = document.getElementById('msg');

    mensagem.textContent = '';

    const user = { email, password };


async function logi(){
    try {
        const response = await fetch('https://projetoweb-api.vercel.app/auth/login', {
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(user), method: 'POST'
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

logi();
}    

