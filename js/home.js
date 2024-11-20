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
        'black clover': '../images/black_clover.jpg',
        'naruto': '../images/naruto.jpg',
        'one piece': '../images/one_piece.jpg',
        'zelda': '../images/zelda.jpg',
        'blue lock': '../images/blue_lock.jpg'
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
});

function logout() {
    localStorage.removeItem('currentUser');
    alert('Você saiu com sucesso!');
    window.location.href = 'login.html';
}
