// creando los elementos de la paleta de colores.

const palleteContainer = document.querySelector('#palleteContainer');
const colorValue = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
const palleteSize = 5;


const createPallete = () => {
    for (let i = 0; i < palleteSize; i++) {
        const palleteElement = document.createElement('div');
        palleteElement.classList.add('palleteItem');
        
        palleteContainer.appendChild(palleteElement);
        
    }

    generarPaleta()
}


// creando funcion del boton que genera la paleta.

const palleteGenerate = document.getElementById('palleteGenerate');
palleteGenerate.addEventListener('click', () => {generarPaleta()})

function generarPaleta() {
    for (let i = 0; i < palleteContainer.children.length; i++) {
        colorize(palleteContainer.children[i])
    }
    console.log('funciona')
}


// creando funcion de generador de cada color independiente.

const colorize = (element) => {
    
    let color = '#';

    for (let i = 0; i < 6; i++) {
        const randomElement = colorValue[Math.floor(Math.random() * colorValue.length)];
        color += randomElement;
    };
    
    element.style.backgroundColor = color;
    element.innerHTML = `<span class="colorHex">${color}</span>`

}

// ejecucion

createPallete()