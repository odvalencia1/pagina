var h = 0;
var m = 0;
var s = 0;
var hp = 0;
var mp = 0;
var sp = 0;
var principal;
var secundario;
var vuelta=1;
function Derecho(){
    if (document.getElementById('derecha').textContent =='Iniciar'){
        Iniciar();  
    }
    else{
        if (document.getElementById('derecha').textContent =='Detener'){
            Detener();  
        }
        else{
            Iniciar();
        }
    }

}
function Izquierdo(){
    if (document.getElementById('izquierda').textContent =='Vuelta'){
        Vuelta();  
    }
    else{
        location.reload();
    }
}
function Iniciar(){
    document.getElementById('demo').play()
    document.getElementById('derecha').innerHTML='Detener';
    document.getElementById('izquierda').innerHTML='Vuelta'; 
    Escribir();
    Escribir2();
    principal = setInterval(Escribir,10);
    secundario=setInterval(Escribir2,10);

}
function Detener(){
    document.getElementById('demo').pause()
    document.getElementById('derecha').innerHTML='Reanudar';
    document.getElementById('izquierda').innerHTML='Reiniciar'; 
    clearInterval(principal);
    clearInterval(secundario); 
}

function Escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>99){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux='0'+s;}else{sAux=s;}
    if (m<10){mAux='0'+m;}else{mAux=m;}
    if (h<10){hAux='0'+h;}else{hAux=h;}

    document.getElementById('contador').innerHTML = hAux + ':' + mAux + ':' + sAux; 
}

function Escribir2(){
    var hAux, mAux, sAux;
    sp++;
    if (sp>99){mp++;sp=0;}
    if (mp>59){hp++;mp=0;}
    if (hp>24){hp=0;}

    if (sp<10){sAux='0'+sp;}else{sAux=sp;}
    if (mp<10){mAux='0'+mp;}else{mAux=mp;}
    if (hp<10){hAux='0'+hp;}else{hAux=hp;}

    document.getElementById('contadorpeque').innerHTML = hAux + ':' + mAux + ':' + sAux; 
}
function Vuelta(){
    var item = document.createElement('li');
    item.innerHTML='Vuelta #' + vuelta+':  '+  document.getElementById('contadorpeque').textContent;
    vuelta ++;
    document.getElementById("lista").appendChild(item);
    hp = 0;
    mp = 0;
    sp = 0;
} 
