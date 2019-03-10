function crearCarton(filas, columnas) {
    var carton = document.getElementById('carton');
    var valores = generarValores(1, 99);
    var tabla = llenarTabla(valores, filas, columnas);
    tabla = taparTabla(tabla,filas,columnas);
    escribirCarton(tabla, carton, filas, columnas);
    //generarArray();
}

function escribirCarton(tabla, carton, filas, columnas) {
    var tablaHtml = '<table>';
    for (var i = 0; i < filas; i++) {
        tablaHtml += '<tr>';
        for (var j = 0; j < columnas; j++) {
            var id = 'fila' + i + 'col' + j;
            tabla[i][j] == 0 ? tablaHtml += '<td style="background: black;">' : tablaHtml += '<td class="active" id="' + id + '" style="cursor: pointer;">';
            tablaHtml += tabla[i][j];
            tabla[i][j] == 0 ? tablaHtml += '</td>' : tablaHtml += '</td>';
        }
        tablaHtml += '</tr>';
    }
    tablaHtml += '</table>';
    carton.innerHTML = tablaHtml;
}

function taparTabla(tabla, filas, columnas) {
    var cantTapasFila = 4;
    var tapas = [];
    var valores = generarValores(0, columnas - 1);
    for (var i = 0; i < filas; i++) {
        var tapasFila = [];
        if (i < filas - 1) {
            for (var j = 0; j < cantTapasFila; j++) {
                var valor = 0;
                [valor, valores] = escogerValor(valores);
                tapasFila.push(valor);
            }
        } else {
            tapasFila.push(valores[0]);
            valores = generarValores(0, columnas - 1);
            for (var j = 0; j < cantTapasFila - 1; j++) {
                var valor = 0;
                [valor, valores] = escogerValor(valores);
                tapasFila.push(valor);
            }
        }
        tapas.push(tapasFila);
    }
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < cantTapasFila; j++) {
            tabla[i][tapas[i][j]] = 0;
        }
    }
    return tabla;
}



function llenarTabla(valores, filas, columnas) {
    var tabla = [];
    for (var i = 0; i < filas; i ++) {
        var fila = [];
        for (var j = 0; j < columnas; j++) {
            var valor = 0;
            [valor, valores] = escogerValor(valores);
            fila.push(valor);
        }
        tabla.push(fila);
    }
    return tabla;
}

function escogerValor(valores) {
    var indice = Math.round(Math.random() * (valores.length - 1));
    var valor = valores[indice];
    valores.splice(indice,1);
    return [valor, valores];
}

function generarValores(inicio, fin) {
    var valores = [];
    for (var i = inicio; i <= fin; i++) {
        valores.push(i);
    }
    return valores;
}

window.onload = crearCarton(3,9);