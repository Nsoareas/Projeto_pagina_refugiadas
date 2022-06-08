function Enviar(){

    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var fone = document.getElementById("fone");
    var email = document.getElementById("email");
    var passaporte = document.getElementById("passaporte");
    var Data_nascimento = document.getElementById("nascimento");
    var imagemperfil = document.getElementById("imagemperfil");
    

   {
if((nome.value !="") && (fone.value=="") && (email.value=="") && (senha.value=="") && (passaporte.value=="") && (Data_nascimento.value== "") && (imagemperfil.value=="")== true){
alert('Campos obrigatórios não preenchidos!')
}else{
alert('Obrigado sr(a)' + nome.value +  ', cadastro enviado com sucesso!')

}
  }



}
