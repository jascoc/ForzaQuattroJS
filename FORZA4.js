window.onload = function (){
    var grid = document.getElementById('grid');
    for(var i=1; i<8; i++){
            var column = document.createElement('div');
            column.classList.add('column');
            grid.appendChild(column);
            column.id = i;
            for(var j=1;j<7;j++){
                var button = document.createElement('button');
                button.classList.add('cell');
                column.appendChild(button)
                button.id= j;
                button.id= i+button.id;
                column.onclick = function(){move(this.id);}
            }
        }
    }
    
    function move(i){
        var player = document.getElementById('player');
        var column = document.getElementById(i);
        if(column.lastChild.classList.length == 1){
            if(player.value == 1){
                document.getElementById(column.lastChild.id).classList.add('red');
                player.value=2; 
            } else{
                document.getElementById(column.lastChild.id).classList.add('yellow');
                player.value=1; 
            }   
        } else{
            for(let cell of column.childNodes){
                if(cell.classList.length > 1){
                    if(player.value == 1){
                        document.getElementById(parseInt(cell.id)-1).classList.add('red');
                        player.value=2; 
                    } else{
                        document.getElementById(parseInt(cell.id)-1).classList.add('yellow');
                        player.value=1; 
                    }
                    break;  
                }
            }
        }
       /* if(player.value == 1){
            console.log(column.id)
            cell.innerText = "X";
            player.value=2; 
        } else{
            console.log(column.id)
            cell.innerText = "O";
            player.value=1; 
        }*/
    }
