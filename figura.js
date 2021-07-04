// Codigo cuadrado
console.group('square');

    // const ladoCuadrado = 5;

    // console.log(`The sides of the square are: ${ladoCuadrado}cm`);

    // const perimetroCuadrado = ladoCuadrado * 4;

    const perimetroCuadrado = (lado) => lado * 4;


    // console.log(`The perimeter of this square is: ${perimetroCuadrado}cm`);

    // const areaCuadrado = ladoCuadrado * ladoCuadrado;
    // console.log(`The area of the square is: ${areaCuadrado}cm^2`);

    const areaCuadrado = ( lado ) => console.log(`The area of the square is: ${ lado * lado }`);

console.groupEnd();

// Codigo Triangulo
console.group('Triangle');

    // const ladoTriangulo1 = 6;
    // const ladoTriangulo2 = 6;
    // const baseTriangulo3 = 4;

    // console.log(`The sides of the triangle are: ${ladoTriangulo1}cm ${ladoTriangulo2}cm ${baseTriangulo3}cm`);


    // const alturaTriangulo = 5.5;
    // console.log(`The height of the triangle is: ${alturaTriangulo}cm`);

    // const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;

    const trianglePerimeter = ( lado1, lado2, base) => console.log(`The perimeter of the triangle is: ${ lado1 + lado2 + base }cm`);  

    // console.log(`The perimeter of the triangle is: ${perimetroTriangulo}cm`);

    // const areaTriangulo = (baseTriangulo3 * alturaTriangulo) / 2;
    // console.log(`The area of the triangle is: ${areaTriangulo}cm^2`);

    const triangleArea = ( height, base) => console.log(`the area of the triangle is: ${(height * base) / 2}cm`);


    function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase){
        if(trianguloGrandeLadoA !== trianguloGrandeLadoB){
            console.error('Los lados a y b no son iguales');
        } else {
            
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura;
        }
    }

    function eightTriangle(lado1, lado2, base){
        if(lado1 === lado2 && lado1 != base){
            alert('isoceles')
            const altura = Math.sqrt(lado1**2 - base**2/ 4)
            console.log(altura)
        }
        else{
            alert('no lo se')
        }
    }

console.groupEnd();

// Codigo Del Circulo
console.group('Circle');

    // Radio
    const radioCirculo = 4;
    console.log(`The radius of the circle is: ${radioCirculo}cm`);

    //Diametro
    // const diametroCirculo = radioCirculo * 2;
    // console.log(`The diameter of the circle is: ${diametroCirculo}cm`);

    const circleDiameter = (radio) => console.log(`The diamerter of the circle is: ${ radio * 2 }`);

    //PI
    const PI = Math.PI;
    console.log(`The value of PI is: ${PI}`);

    // //Circunferencia
    // const perimetroCirculo = diametroCirculo * PI;
    // console.log(`The perimeter of the circle is: ${perimetroCirculo}cm`);

    const circlePerimeter = ( radio ) =>{
        diameter = radio * 2;
        return console.log(`The perimeter of the circle is: ${diameter * PI} `);
    };

    // //Area
    // const areaCirculo = (radioCirculo * radioCirculo) * PI;
    // console.log(`The area of the circle is: ${areaCirculo}cm^2`);
    const circleArea = (radio) => {
        return console.log(`The area of the circle is: ${(radio * radio) * PI}`);
    };



console.groupEnd();