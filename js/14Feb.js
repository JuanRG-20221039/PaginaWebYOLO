function crearPetalo() {
    const petalo = document.createElement("div");
    petalo.classList.add("petal");
    document.getElementById("petalos-container").appendChild(petalo);

    // Posición inicial aleatoria
    petalo.style.left = Math.random() * window.innerWidth + "px";
    petalo.style.animationDuration = (Math.random() * 3 + 3) + "s"; // Entre 3s y 6s
    petalo.style.opacity = Math.random();

    // Eliminar el pétalo después de que caiga
    setTimeout(() => {
        petalo.remove();
    }, 6000);
}

setInterval(crearPetalo, 300);

document.querySelector('.BottonSi').addEventListener('click', function() {
    const audio = document.getElementById('musica');
    audio.play().catch(error => {
        console.error('Error al intentar reproducir el audio:', error);
    });
});