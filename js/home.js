document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = 'login.html';
        return;
    }

    document.getElementById('user-name').textContent = currentUser.usuario;
    document.getElementById('user-email').textContent = currentUser.email;

    const animeContainer = document.getElementById('anime-images');
    const animeImages = {
        'black clover': '../imagens/black_clover.jpg',
        'naruto': '../imagens/naruto.jpg',
        'one piece': '../imagens/one_piece.jpg',
        'zelda': '../imagens/zelda.jpg',
        'blue lock': '../imagens/blue_lock.jpg'
    };

    if (Array.isArray(currentUser.favoriteAnimes)) {
        currentUser.favoriteAnimes.forEach(anime => {
            const img = document.createElement('img');
            img.src = animeImages[anime] || '../images/default.jpg';
            img.alt = anime;
            img.className = 'anime-image';
            animeContainer.appendChild(img);
        });
    } else {
        animeContainer.textContent = 'Nenhum anime favorito selecionado.';
    }



    // Jose essa função aqui a cima de mostrar as imagens eu tentei de tudo pesquisei
    //tentei ate com ia pra ver se ela em ajudava e mesmo assim não conseguimos fazer com que as imagens desse certo.
});

function logout() {
    localStorage.removeItem('currentUser');
    alert('Você saiu com sucesso!');
    window.location.href = 'login.html';
}
