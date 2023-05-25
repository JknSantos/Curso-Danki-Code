$(function(){
    /* 
    var frase = 'jackson@gmail.com';
    var verifica = frase.match(/^(.*?)(@)(.*?)$/);

    if(verifica != null){
        console.log("Encontramos algo!")
        console.log(verifica[1]);
        console.log(verifica[2]);
        console.log(verifica[3])
    }else{
        console.log("Não encontramos nada")
    }
    */

    //Funções de abrir e fechar Formulário
    abrirJanela();
    verificarCliqueFechar();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        })
    }
    function verificarCliqueFechar(){

        var el = $('body, .closeBtn');

        el.click(function(){
            $('.bg').fadeOut();
        })
        $('.form').click(function(e){
            e.stopPropagation();
        })  
    }

    //Eventos do formulário
    
    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

    $('form#form1').submit(function(e){
        //e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if(verificarNome(nome) == false){
            aplicarCampoInvalido($('input[name=nome]'));
            return false;
        }else if(verificarTelefone(telefone) == false){
            aplicarCampoInvalido($('input[name=telefone]'));
            return false;
        }else if(verificarEmail(email) == false){
            aplicarCampoInvalido($('input[name=email]'));
            return false;
        }      
        else{
            alert("Formulario enviado com sucesso!")
        }
        
        //Se chegou até o final é por que está funcionando
    })

    //Funções para estilizar o campo do fomulário

    function aplicarCampoInvalido(el){
        el.css('color', 'red');
        el.css('border', '2px solid red');
        el.val('Campo Invalido!');
        //el.data('invalido','true');]
    }
    function resetarCampoInvalido(el){
        el.css('color', '#ccc');
        el.css('border', '1px solid #ccc');
        el.val('');
    }

    //Funções para verificar nossos campos
    function verificarNome(nome){
        //Contando a quantidade de espaços e os respectivos valores.

        if(nome == ' '){
            return false;
        }
        var amount = nome.split(' ').length;
        var splitStr = nome.split(' ');
        if(amount >= 2){
            for(var i = 0; i < amount; i++){
                if(splitStr[i].match(/[^[A-Z]{1}[a-z]{1,}$/)){
    
                }else{
                    return false;
                }
            }
        }else{
            return false;
        }
    }
    function verificarTelefone(telefone){
        if(telefone == ''){
            return false;
        }
        if(!telefone.match(/^\([0-9]{2}\)[0-9]{4}-[0-9]{4}$/) == null){
            return false;
        }
    }

    function verificarEmail(email){
        if(email == '')
            return false
        if(email.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
            return false;
        }
    }
})