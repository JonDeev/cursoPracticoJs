// Crear funciones para interactuar con el DOM

// funciones

//Functions square cuadrado

//SquarePerimeter
const perimetroCuadrado = (lado) => lado * 4;

// SquareArea
const areaCuadrado = ( lado ) => lado * lado



const calculateSquarePerimeter = () => {
    const lados = document.getElementById('inputCuadrado').value;
   

    const SquarePerimeter = perimetroCuadrado(lados);

    alert(`The perimeter of the square is: ${SquarePerimeter}`);
}

const calculateSquareArea = () => {
    const squareSide = document.getElementById('inputCuadrado').value;
   

    const SquareArea = areaCuadrado(squareSide);

    alert(`The area of the square is: ${SquareArea}`);
}


