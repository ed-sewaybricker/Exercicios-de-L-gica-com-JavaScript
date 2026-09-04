function mediaAritmetica(n1, n2, n3) {
    let soma = Number(n1) + Number(n2) + Number(n3);
    let media = soma / 3;
    return document.getElementById("mediaAritmetica").innerHTML = media;
}

function parImpar(numero) {
    let num = Number(numero);
    if (num % 2 === 0) {
        return document.getElementById("parImpar").innerHTML = "Par";
    }
    return document.getElementById("parImpar").innerHTML = "Impar";
}

function maiorNumero(n1, n2, n3) {
    // let maior = Math.max(Number(n1), Number(n2), Number(n3));
    let lista = [Number(n1), Number(n2), Number(n3)]
    for (let i = 0; i < lista.length; i++) {
        for (let j = 0; j < lista.length - 1; j++) {
            if (lista[j] < lista[j + 1]) {
                let temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    return document.getElementById("maiorNumero").innerHTML = lista[0];
}

function potencia(n1, n2) {
    let resultado = 1;
    let base = Number(n1);
    let exponente = Number(n2);
    // let resultado = Math.pow(base, expoente);

    if (exponente >= 0) {
        for (let i = 0; i < exponente; i++) {
            resultado *= base;
        }
    } else {
        for (let i = 0; i < -exponente; i++) {
            resultado *= base;
        }

        resultado = 1 / resultado;
    }
    return document.getElementById("potencia").innerHTML = resultado;
}

function tabuada(n1) {
    let numero = Number(n1);
    const listaTabuada = document.getElementById("tabuada");
    listaTabuada.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li");
        item.textContent = numero + " x " + i + " = " + (numero * i);
        listaTabuada.appendChild(item);
    }
}

function notas(letra) {
    let escolha = letra.toLowerCase();
    const span = document.getElementById("nota");

    switch (escolha) {
        case "c":
            return span.innerHTML = "Dó";
        case "d":
            return span.innerHTML = "Ré";
        case "e":
            return span.innerHTML = "Mi";
        case "f":
            return span.innerHTML = "Fá";
        case "g":
            return span.innerHTML = "Sol";
        case "a":
            return span.innerHTML = "Lá";
        case "b":
            return span.innerHTML = "Si";
        default:
            return span.innerHTML = "Escolha uma entre aquelas letras.";
    }
}