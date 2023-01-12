var elementos = document.querySelectorAll('[type=radio]');

                for(var i = 0; i <elementos.length; i++){
                    elementos[i].addEventListener('change', function(e){
                        let marcado = e.target.value;


                        
                        if(marcado == "correta"){
                            let marcadoOpc = e.target.parentNode; 
                            marcadoOpc.style.backgroundColor = 'green'; 
                            //parentNode.innerHTML = "Acertou!";
                    

                        
                            let els = marcadoOpc.parentNode.querySelectorAll('[type=radio]');

                            for(var n = 0; n < els.length; n++){
                                els[n].disabled = true; 
                            }

                        
                        }else if(marcado == "incorreta"){
                            let marcadoOpc = e.target.parentNode;
                            marcadoOpc.style.backgroundColor = 'red';
                            //parentNode.innerHTML = 'Errou!'


                        
                            let els = marcadoOpc.parentNode.querySelectorAll('[type=radio]');

                            for(var n = 0; n < els.length; n++){
                                els[n].disabled = true;
                            }
                        
                            let correta = marcadoOpc.parentNode.querySelector('[value=correta]')
                            correta.parentNode.style.backgroundColor = 'green'
                        }
                    })
                }
