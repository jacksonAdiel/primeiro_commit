function randomDelay(maxDelay) {
    return Math.floor(Math.random() * maxDelay) + 1; // Retorna um número aleatório entre 1 e maxDelay
}

window.onload = function() {
    var background = document.getElementById('backgroundAnimation');
    var numberOfTriangles = 20; // Total de triângulos
    var maxDelay = 10; // O atraso máximo em segundos
    var triangles = '';

    for (var i = 0; i < numberOfTriangles; i++) {
        var delay = randomDelay(maxDelay);
        var style = 'top: -50px; left: ' + (Math.random() * 100) + '%; animation-delay: ' + delay + 's;';
        triangles += '<div class="triangle" style="' + style + '"></div>';
    }

    background.innerHTML = triangles;
};
