
function obtenerChiste() {
        const url = 'https://api.chucknorris.io/jokes/random';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const chisteElemento = document.getElementById('chiste');
                chisteElemento.innerHTML = `<p>${data.value}</p>`;
            })
                .catch(error => console.error('Error:', error));
        }