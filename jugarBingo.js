var numeros = document.querySelectorAll('td.active');
var fila0 = [];
var fila1 = [];
var fila2 = [];
numeros.forEach(function(element) {
    element.onclick = function (e) {
        e.preventDefault();
        var celda = this.getAttribute('id');
        var fila = parseInt(celda.substring(4,5));
        switch (fila) {
            case 0:
                if (fila0.includes(celda)) {
                    fila0.splice(fila0.indexOf(celda),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    fila0.push(celda);
                    this.setAttribute('style', 'background: lightgreen; cursor: pointer;');
                }
                break;
            case 1:
                if (fila1.includes(celda)) {
                    fila1.splice(fila1.indexOf(celda),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    fila1.push(celda);
                    this.setAttribute('style', 'background: lightgreen; cursor: pointer;');
                }
                break;
            case 2:
                if (fila2.includes(celda)) {
                    fila2.splice(fila2.indexOf(celda),1);
                    this.setAttribute('style', '');
                    this.setAttribute('style', 'cursor: pointer;');
                } else {
                    fila2.push(celda);
                    this.setAttribute('style', 'background: lightgreen; cursor: pointer;');
                }
                break;
            default:
        }
        var victoria = new Audio("victoria.wav"); 
        if(/*fila0.length == 5 ||*/ fila1.length == 5 /*|| fila2.length == 5*/) {
            //console.log('LINEA');
            //var victoria = new Audio("victoria.wav"); 
            victoria.play();
            window.alert('LINEA: Ha hecho linea en la línea central!');
        
        }
        if(fila0.length == 5 && fila1.length == 5 && fila2.length == 5) {
            //console.log('BINGO');
            victoria.play();
            window.alert('BINGO: Ha hecho bingo!');
            
        }
    }
});