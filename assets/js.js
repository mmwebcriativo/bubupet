
  
function reveal(id){ //Função para revelar Menu e Search mobile
        
        if(document.getElementById(id).style.display =='flex'){
            
          document.getElementById(id).style.display ='none';    
            
        }else{
            document.getElementById(id).style.display ='flex';
        }
        
    
    } 

//               BANNER -------- //      

function preload(){ //Pre carregamento das imagens
        imgs=Array('assets/img/f1.jpg','assets/img/f2.jpg','assets/img/f3.jpg',)
        imgQtde = imgs.length;
        for(i=0; i<imgQtde; i++){
            var preload = new Image();
            preload.src=imgs[i];
        }
    }

    function startSlider(){
        preload();
        max = 3; //quanditade máxima de fotos
        min = 1; //quantidade mínima
        fi = min; //fi recebe min que tem 1 por padrão definido
        transition = true; //Evitar a mudança durante a transição
        loadPhoto("assets/img/f1.jpg"); //Carrega foto
        document.getElementById('bg').addEventListener('transitionend', endtr); //escultando o fim da transição
    }

    function endtr(){ //após o fim da transição, permite a mudança
        transition = true;
    }

    function prox(){ //Passar BG
        
        if(transition){
            transition =false
            fi++
            if(fi > max){
            fi = min;
        }     
        loadPhoto("assets/img/f"+fi+".jpg");   
        }     
    }
    
    function backPhoto(){ // Voltar BG
        if(transition){
            transition = false
            fi--
            if(fi < min){
                fi = max;
        }
        loadPhoto("assets/img/f"+fi+".jpg");
        }
    }

    function loadPhoto(photo){ //Insere o bg na sessão
        document.getElementById('bg').style.backgroundImage="url("+photo+")"
    }