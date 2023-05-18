//controle de alteração titulo

let fechar = $('.fechar');
let alerta = $('.alerta ');
fechar.click(function(){
	alerta.css('display','none');
});
$('#formulario').submit(function(){
	alerta.css('display','block');
});