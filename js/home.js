function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
      window.location.href = 'login.html';
    }

    document.getElementById('user-name').textContent = currentUser.name;
    document.getElementById('user-email').textContent = currentUser.email;

    const animeImagesContainer = document.getElementById('anime-images');
    

    currentUser.favoriteAnimes.forEach((anime) => {
        const img = document.createElement('img');
        img.src = `images/${anime}.jpg`; 
        img.alt = anime;
        img.style.width = '100px';  
        img.style.marginRight = '10px';  
        animeImagesContainer.appendChild(img);
    });
});
