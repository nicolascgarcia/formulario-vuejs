
$('#novoContato').submit(function(e) {
    e.preventDefault();
    let formulario = $(this);
    let retorno = inserirContato(formulario);
});

function inserirContato(dados) {
    $.ajax({
        type: "POST",
        data: dados.serialize(),
        url: "backend/cadastrarContato.php",
        assync: false
    }).then(sucesso, falha);

    function sucesso(data) {
        $sucesso = $.parseJSON(data)["sucesso"];
        $menssagem = $.parseJSON(data)["menssagem"];
        $('#menssagem').show("slow");
        if ($sucesso) {
            $('#menssagem').html($menssagem);
            limpar()
            Swal.fire(
                'Mensagem enviada com sucesso!',
                'Estamos verificando seus dados',
                'success'
              )
            
                
        } else {
            $('#menssagem').html($menssagem);
            limpar()
            Swal.fire({
                title: 'Falha ao enviar!',
                text: 'Verifique os campos e tente novamente',
                icon: 'error',
                confirmButtonText: 'Voltar'
              })
        }
    }
    function falha() {
        console.log("erro");
    }

    function limpar() {
            let formulario = document.getElementById("novoContato")
            let cidade = document.getElementById('cidade')
            let estado = document.getElementById('estado')
            cidade.setAttribute('value', '')
            estado.setAttribute('value', '')
            formulario.reset()
    }
}
