var condicion = 1;
let expresion;
while(condicion==1){
    expresion = prompt("ingrese opcion:1-calcular suma,2-calcular presio,3-total propina,4-IMC,5-multiplicar numero,6-par o impar,7-empleado bono,8-contar numero,9-triangular,10-categorizar numeros,11-palindromo,12-cadena,13-conteo regresivo,14-asteriscos,15-promedio,16-salir");
switch (expresion) {
    case "1":
      let valor1 = prompt("ingrese valor 1");
      let valor2 = prompt("ingrese valor 2");
      let resultado = parseInt(valor1) + parseInt(valor2);
      console.log("el resultado es:"+(resultado))
      break;
    case "2":
        let articulo;
        let cantidad;
        let suma = 0;
        let descuento;
      for(let i=1;i<4;i++){
        articulo = prompt('ingrese precio articulo');
        cantidad = prompt('ingrese cantidad');
        suma = parseInt(articulo)*parseInt(cantidad) + parseInt(suma);
        descuento = parseInt(suma)*0.1;
      }
      console.log("Total compra:"+(parseInt(suma)-parseInt(descuento)))
      break;
    case "3":
        let montoTotal;
        let porcProp;
        let TotalPropina;
        montoTotal=prompt("Ingrese el costo total de de la comida");
        porcProp = parseInt(montoTotal)*0.15;
        //TotalPropina = parseInt(montoTotal)-porcProp;
        console.log("El total a dejar en propina es:"+porcProp)
        break;
    case "4":    
        let peso;
        let altura;
        let IMC;
        peso = prompt("Ingrese peso");
        altura = prompt("Ingrese altura");
        IMC = parseFloat(peso)/(parseFloat(altura)**2);
        console.log("Su IMC  es de: "+IMC)
        break;
    case "5":
        let numero = prompt("Ingrese numero a multiplicar")
        let Amultiplicar;
        let multiplicador;
        let total;
        Amultiplicar = numero;     
        total = parseInt(Amultiplicar *= 2) ;
        console.log("Total:"+total);
        break;
    case "6":
        let numero2 = prompt("Ingrese el numero")
        let mod = parseInt(numero2)%2;
        if (mod==0){
            console.log("Numero par")
        }else{
            console.log("Numero inpar")
        }
        break;    
    case "7":
        let rendimiento = parseInt(prompt("Ingrese rendimiento"));
        let bono;
        if(rendimiento>=90){
            bono = 500;
        }else if(rendimiento>=80&&rendimiento<=90){
            bono = 300;
        }else if(rendimiento<80){
            bono = 100;
        }
        console.log("el bono es de :"+bono);
        break;    
    case "8":
        let numero3 = prompt("Ingrese el numero")
        for(let i=1;i<=numero3;i++){
            console.log(i)
        } 
        break;
    case "9":
        var numero4 = 5;
        for (var i = 1; i < numero4 + 1; i++) {
        var linea = "";
        for (var j = 1; j < i; j++) {
            linea += j;
        }
        console.log(linea);
        }
        break;
    case "10":
        let numeros =[-2,-1,0,1,2]
        console.log("numeros:"+numeros)
        for(let i=0;i<numeros.length;i++){
            if(numeros[i]>=0){
                console.log("El numero "+numeros[i]+" Es positivo");
            }else{
                console.log("El numero "+numeros[i]+" Es negativo");
            }
        }
        break;
    case "11":
        let revisar = palindromo(prompt("Ingrese la palabra"));
        console.log(revisar);
        break;
    case "12":
        let cadena = prompt("Ingrese texto");
        let caracter = prompt("Ingrese caractér a buscar");
        let posicion = cadena.indexOf(caracter);
        console.log("El caracter"+caracter+" está en la posicion:"+posicion); 
        break;
    case "13":
        let inicio = prompt("Ingrese el numero")
        while(parseInt(inicio)>1){
            inicio = inicio -1;
            console.log(inicio)
        }
        break;
    case "14":
        var numero5 = 5;
        for (var i = 0; i < numero5 + 1; i++) {
        var linea = "";
        for (var j = 1; j < i; j++) {
            linea += "*";
        }
        console.log(linea);
        }
        break;
    case "15":
        var array = [];
        
        let numero_estudiantes = prompt("Ingrese cantidad estudiantes");
        let nota;
        let promedioEstudiante;
        promedioEstudiante=0;
        let promedioTotal = 0;
        //for(let e=0;e<=numero_estudiantes;e++){
        for(let i=0; i<numero_estudiantes;i++){
            array[i] = [];
            console.log("Ingrese notas del estudinte:"+(i));
            for(let j=0; j<2;j++){
                nota = parseFloat(prompt("ingrese nota"));
                array[i][j] = nota;
                promedioEstudiante = parseFloat(promedioEstudiante)+parseFloat(nota);
            }
            promedioEstudiante= (promedioEstudiante/2);
            console.log("El promedio del estudiante es:"+promedioEstudiante);
            promedioEstudiante=0;
        }

        let sumat = 0;
        for(let k=0; k<numero_estudiantes;k++){
            for(let j=0; j<2;j++){
                console.log(array[k][j]);
                sumat = promedioTotal+parseFloat(array[k][j]);
            }
        }
        promedioTotal = sumat/numero_estudiantes;
        console.log("promedio total estudiantes:"+promedioTotal);
        /*console.log(array[0][0]);
        console.log(array[0][1]);
        console.log(array[1][0]);
        console.log(array[1][1]);*/
        break;
    case "16":
            condicion = 0;    
            break;    
    default:
        console.log('opcion incorrecta');
        break;
}
}

function palindromo(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }