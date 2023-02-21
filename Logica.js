function Programas() {
  const ObtenrValor = document.getElementById("TxtSeleccion");
  const Valor = ObtenrValor.value;
  const ValorEntero = parseInt(Valor);
  switch (ValorEntero) {
    case 1:
      let a = parseInt(prompt("Ingrese el primer número:"));
      let b = parseInt(prompt("Ingrese el segundo número:"));
      let Valor1 = Math.min(a, b);
      let Valor2 = Math.max(a, b);
      let Resultado = "";
      for (let i = Valor1; i <= Valor2; i++) {
        Resultado += i + " ";
      }
      console.log(Resultado);
      document.getElementById("Resultado").innerHTML = Resultado;

      break;

    case 2:
      // Leer los dos números
      let Entrada2_1 = parseInt(prompt("Ingrese el primer número: "));

      // Valida que sean solo numeros
      while (Entrada2_1 == null || /\D/.test(Entrada2_1) || Entrada2_1 == "") {
        Entrada2_1 = prompt("Entre un número VÁLIDO: ");
      }

      let Entrada2_2 = parseInt(prompt("Ingrese el segundo número: "));

      // Valida que sean solo numeros
      while (Entrada2_2 == null || /\D/.test(Entrada2_2) || Entrada2_2 == "") {
        Entrada2_2 = prompt("Entre un número VÁLIDO: ");
      }

      // Determinar el rango de números a iterar
      let Inicio = Math.min(Entrada2_1, Entrada2_2);
      let Final = Math.max(Entrada2_1, Entrada2_2);

      // Imprimir todos los números terminados en 4
      //document.write("Números terminados en 4 comprendidos entre " + num1 + " y " + num2 + ":<br>");
      let Resultado3 =
        "Números terminados en 4 comprendidos entre " +
        Entrada2_1 +
        " y " +
        Entrada2_2 +
        ":\n";
      for (let i = Inicio; i <= Final; i++) {
        if (i % 10 === 4) {
          //Resultado3 += i + "/n";
          Resultado3 += i + ", ";
        }
      }
      document.getElementById("Resultado").value = Resultado3;
      ///console.log(Resultado3)

      break;
    case 3:
      let num = parseInt(prompt("Entre un numero entero de 3 digitos "));
      let numString = num.toString();
      let num3_1 = parseInt(numString[0]);
      let num3_2 = parseInt(numString[1]);
      let num3_3 = parseInt(numString[2]);
      let salida3 = "";
      salida3 += "Números comprendidos entre : 1 y " + num3_1 + ":" + "\n";
      for (let i = 1; i <= num3_1; i++) {
        salida3 += i + "\n";
      }
      salida3 += "\n";
      salida3 +=
        "Números comprendidos entre : " + num3_1 + " y " + num3_2 + ":" + "\n";

      for (let j = 1; j <= num3_2; j++) {
        salida3 += j + "\n";
      }
      salida3 += "\n";
      salida3 +=
        "Números comprendidos entre : " + num3_2 + " y " + num3_3 + ":" + "\n";
      for (let k = 1; k <= num3_3; k++) {
        salida3 += k + "\n";
      }

      document.getElementById("Resultado").value = salida3;
      break;

    case 4:
      let numeros = "";
      for (let i = 1; i <= 100; i++) {
        numeros += i + " ";
      }
      document.getElementById("Resultado").innerHTML = numeros;
      break;
    case 5:
      let numbers = "";
      for (let w = 20; w <= 200; w += 2) {
        numbers += w + " \n";
      }
      document.getElementById("Resultado").innerHTML = numbers;
      break;

    case 6:
      let Numero6 = "";
      let Resultado6 = "";
      for (let y = 26; y <= 205; y++) {
        if (y % 10 === 6) {
          Resultado6 += y + "\n";
        }
      }
      document.getElementById("Resultado").innerHTML = Resultado6;
      break;
    case 7:
      let Totalsring = "Total de la suma" + "\n";
      let Entrada7 = parseInt(prompt("Introduce un número entero:"));
      let Resultado7 = 0;

      for (let z = 1; z <= Entrada7; z++) {
        Resultado7 += z;
      }

      document.getElementById("Resultado").innerHTML =
        "Las suma de todos los numeros comprendidos entre 1 y " +
        Entrada7 +
        " es igual a : " +
        Resultado7;
      break;
    case 8:
      let Entrada8 = parseInt(prompt("Entre un numero entero de dos digitos"));
      let numString8 = Entrada8.toString();
      let num8_1 = parseInt(numString8[0]);
      let num8_2 = parseInt(numString8[1]);

      let Resultado8 = "";
      Resultado8 +=
        "Números comprendidos entre " + num8_1 + " y " + num8_2 + ":" + "\n";

      for (let j = 1; j <= num8_2; j++) {
        Resultado8 += j + "\n";
      }
      Resultado8 += "\n";

      document.getElementById("Resultado").value = Resultado8;
      break;
    case 9:
      let Entrada9 = parseInt(prompt("Ingrese un número de tres dígitos: "));

      if (
        Math.floor(Entrada9 / 100) === 1 ||
        Math.floor(Entrada9 / 10) % 10 === 1 ||
        Entrada9 % 10 === 1
      ) {
        document.getElementById("Resultado").value =
          "El número ingresado contiene el dígito 1.";
      } else {
        document.getElementById("Resultado").value =
          "El número ingresado no contiene el dígito 1.";
      }
      break;
    case 10:
      let Entrada10 = parseInt(prompt("Ingrese un número entero: "));
      let resultado10 = 0;
      for (let p = 1; p <= Entrada10; p++) {
        if (p % 5 === 0) {
          resultado10 += p + "\n";
        }
      }
      document.getElementById("Resultado").value =
        "Los múltiplos de 5 comprendidos entre 1 y " +
        Entrada10 +
        " son:" +
        "\n" +
        resultado10;

      break;
    case 11:
      let Entrada11 = 3;
      let resultado11 = "";

      for (let h = 1; h <= 20; h++) {
        resultado11 += 3 * h + "\n";
      }
      document.getElementById("Resultado").value =
        "Los 20 primeros múltiplos de 3 son:" + "\n" + resultado11;

      break;
    case 12:
      let Entrada12 = parseInt(prompt("Ingrese un número de tres dígitos: "));

      if (Math.floor(Entrada12 / 100) === Entrada12 % 10) {
        document.getElementById("Resultado").value =
          "El primer dígito es igual al último.";
      } else {
        document.getElementById("Resultado").value =
          "El primer dígito no es igual al último.";
      }
      break;
    case 13:
      let Entrada13 = parseInt(
        prompt("Ingrese un número entero de 3 dígitos:")
      );
      let Digitos_13 = Entrada13.toString().split("").map(Number);
      let Contador13 = 0;

      for (let i = 0; i < Digitos_13.length; i++) {
        let EsPrimo = true;
        for (let j = 2; j < Digitos_13[i]; j++) {
          if (Digitos_13[i] % j === 0) {
            EsPrimo = false;
          }
        }
        if (EsPrimo) {
          Contador13++;
        }
      }
      document.getElementById("Resultado").value =
        "El número tiene " + Contador13 + " dígitos primos";

      break;
    case 14:
      let Entrada14 = parseInt(prompt("Ingrese un número de tres dígitos: "));
      let count = 0;

      let PrimerDigito_14 = Math.floor(Entrada14 / 100);
      let SegundoDigito_14 = Math.floor(Entrada14 / 10) % 10;
      let TercerDigito_14 = Entrada14 % 10;

      count +=
        isEven(PrimerDigito_14) +
        isEven(SegundoDigito_14) +
        isEven(TercerDigito_14);

      console.log("El número tiene " + count + " dígitos pares.");
      document.getElementById("Resultado").value =
        "El número tiene " + count + " dígitos pares.";

      function isEven(Entrada14) {
        if (Entrada14 % 2 === 0) {
          return 1;
        } else {
          return 0;
        }
      }
      break;
    case 15:
      let Entrada15 = parseInt(prompt("Ingrese un número de tres dígitos: "));

      let PrimerDigito_15 = Math.floor(Entrada15 / 100);
      let SegundoDigito_15 = Math.floor(Entrada15 / 10) % 10;
      let TercerDigito_15 = Entrada15 % 10;

      if (
        PrimerDigito_15 === SegundoDigito_15 + TercerDigito_15 ||
        SegundoDigito_15 === PrimerDigito_15 + TercerDigito_15 ||
        TercerDigito_15 === PrimerDigito_15 + SegundoDigito_15
      ) {
        document.getElementById("Resultado").value =
          "Uno de los dígitos es igual a la suma de los otros dos.";
      }

      {
        document.getElementById("Resultado").value =
          "Ninguno de los dígitos es igual a la suma de los otros dos.";
      }

      break;
    case 16:
      const Entrada16 = parseInt(prompt("Ingrese un número de 4 dígitos: "));

      // Separamos los dígitos del número
      const d1 = Math.floor(Entrada16 / 1000);
      const d2 = Math.floor((Entrada16 % 1000) / 100);
      const d3 = Math.floor((Entrada16 % 100) / 10);
      const d4 = Entrada16 % 10;

      // Calculamos la suma de los dígitos
      const suma = d1 + d2 + d3 + d4;

      // Imprimimos el resultado
      document.getElementById("Resultado").value =
        "La Suma de los numero de : " +
        Entrada16 +
        " Es igual a : " +
        "\n" +
        suma;
      break;
    case 17:
      let Entrada17 = parseInt(prompt("Ingrese un número de 4 dígitos: "));
      let Contador17 = 0;
      let PrimerDigito_17 = Math.floor(Entrada17 / 1000);
      let SegundoDigito_17 = Math.floor(Entrada17 / 100) % 10;
      let TercerDigito_17 = Math.floor(Entrada17 / 10) % 10;
      let CuartoDigito_17 = Entrada17 % 10;

      Contador17 +=
        isEven(PrimerDigito_17) +
        isEven(SegundoDigito_17) +
        isEven(TercerDigito_17) +
        isEven(CuartoDigito_17);

      console.log("El número tiene " + Contador17 + " dígitos pares.");
      document.getElementById("Resultado").value =
        "El número tiene " + Contador17 + " dígitos pares.";
      function isEven(num) {
        if (num % 2 === 0) {
          return 1;
        } else {
          return 0;
        }
      }
      break;
    case 18:
      Numero18();
      function Numero18() {
        let Entrada18 = parseInt(
          prompt("Ingrese un número entero menor que 50 y positivo: ")
        );

        // Verificamos que el número sea menor que 50 y positivo
        if (Entrada18 >= 50 || Entrada18 <= 0) {
          Numero18();
        } else {
          // Verificamos si el número es primo
          let esPrimo = true;
          for (let i = 2; i < Entrada18; i++) {
            if (Entrada18 % i === 0) {
              esPrimo = false;
              break;
            }
          }

          // Imprimimos el resultado
          if (esPrimo) {
            document.getElementById("Resultado").value =
              "El número : " + Entrada18 + " es primo";
            c;
          } else {
            document.getElementById("Resultado").value =
              "El número : " + Entrada18 + " no es primo";
          }
        }
      }

      break;
    case 19:
      Numero19();
      function Numero19() {
        let Entrada19 = parseInt(
          prompt("Ingrese un número entero de 5 dígitos: ")
        );

        // Verificamos que el número sea de 5 dígitos
        if (Entrada19 < 10000 || Entrada19 > 99999) {
          Numero19();
        } else {
          // Obtenemos los dígitos del número
          let Entrada19String = Entrada19.toString();
          let primerDigito = Entrada19String[0];
          let segundoDigito = Entrada19String[1];
          let tercerDigito = Entrada19String[2];
          let cuartoDigito = Entrada19String[3];
          let quintoDigito = Entrada19String[4];

          // Verificamos si el número es capicúo
          if (primerDigito === quintoDigito && segundoDigito === cuartoDigito) {
            document.getElementById("Resultado").value =
              "El número : " + Entrada19 + "  es capicúo";
          } else {
            document.getElementById("Resultado").value =
              "El número : " + Entrada19 + " no es capicúo";
          }
        }
      }

      break;
    case 20:
      Numero20();
      function Numero20() {
        let Entrada20 = parseInt(
          prompt("Ingrese un número entero de 4 dígitos: ")
        );

        // Verificamos que el número sea de 5 dígitos
        if (Entrada20 < 1000 || Entrada20 > 9999) {
          Numero20();
        } else {
          // Obtenemos los dígitos del número
          let Entrada20String = Entrada20.toString();
          let PrimerDigito_20 = Entrada20String[0];
          let SegundoDigito_20 = Entrada20String[1];
          let TercerDigito_20 = Entrada20String[2];
          let cuartoDigito = Entrada20String[3];
          if (SegundoDigito_20 === TercerDigito_20) {
            document.getElementById("Resultado").value =
              "El segundo dígito " +
              SegundoDigito_20 +
              " Es igual al penúltimo " +
              TercerDigito_20;
          } else {
            document.getElementById("Resultado").value =
              "El segundo dígito " +
              SegundoDigito_20 +
              " No es igual al penúltimo " +
              TercerDigito_20;
          }
        }
      }
      break;
    case 21:
      let Entrada21 = parseInt(prompt("Ingrese un número entero: "));

      if (Entrada21 === 10) {
        document.getElementById("Resultado").value =
          "el numero ingresado es igual a 10 ";
      } else {
        document.getElementById("Resultado").value =
          "el numero ingresado  no es igual a 10 ";
      }
      break;
    case 22:
      const Entrada22 = parseInt(prompt("Ingrese un número entero: "));

      if (Entrada22 % 7 === 0) {
        document.getElementById("Resultado").value =
          "el numero ingresado: " + Entrada22 + " es multiplo de 7";
      } else {
        document.getElementById("Resultado").value =
          "el numero ingresado: " + Entrada22 + "  no es multiplo de 7";
      }
      break;

    default:
      alert("Digite una opcion valida");
  }
}
