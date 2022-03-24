var velha = [
  ["+", "+", "+"],
  ["+", "+", "+"],
  ["+", "+", "+"]
];
   
//contagem de jogadas
var jogadas = 0;
        
function verificar(lin, col){
    if(velha[lin][col] == "+"){
        jogadas++;
        if(jogadas % 2 != 0){
            //jogador X  
            document.getElementById("B" + lin + col).innerHTML = "X";
            velha[lin][col] = "X";  
        }
        else{
            //jogador O
            document.getElementById("B" + lin + col).innerHTML = "O";
            velha[lin][col] = "O";
        }
        /*-- Verificar Ganhadores -- */
        //Ganhador X
        if(conferir("X") == true){
            
           document.getElementById("resposta").innerText = "X - Venceu !";
          
        }
        //Ganhador O
        else if (conferir("O") == true){
            document.getElementById("resposta").innerText = "O - Venceu !";
        }
        //Empate
        else if(jogadas == 9){  
            document.getElementById("resposta").innerText = "Velha ! ";            
        }
    }    
}

function conferir(jogador){
    //Verificar Horizontal
    var resultado = false;
    for(var lin = 0; lin < velha.length; lin++){
        if(velha[lin][0] == jogador && velha[lin][1] == jogador && velha[lin][2] == jogador){
            resultado = true;
            break;
        }
    }
    //Verificar Vertical
    for(var col = 0; col < velha.length; col++){
        if(velha[0][col] == jogador && velha[1][col] == jogador && velha[2][col] == jogador){
            resultado = true;
            break;
        }
    }
    //Verificar Diagonal Principal
    if(velha[0][0] == jogador && velha[1][1] == jogador && velha[2][2] == jogador){
        resultado = true;
    }
    //Verificar Diagonal Secundária
    if(velha[2][0] == jogador && velha[1][1] == jogador && velha[0][2] == jogador){
        resultado = true;
    }

    return resultado;
}

//Recarregar o jogo
var btn = document.querySelector("#refresh");
      btn.addEventListener("click", function () {
        location.reload();
      });