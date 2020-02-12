function buscarCep() {
    
    let valor = document.getElementById("cep")
    .value

    let tamanho = valor.length
    console.log(tamanho)
    
    if (tamanho == 9) {
         fetch('https://viacep.com.br/ws/'+valor+'/json/')
        .then(function (response) {
            return response.json()
        })
        .then(function (res) {
                val = res

                console.log(val)

                if (val.erro == true) {return erro()} else {

                let localidade = document.querySelector("#cidade")
                localidade.setAttribute('value', val.localidade)
        

                let estado = document.querySelector("#estado")
                estado.setAttribute('value', val.uf) }

        })
    } else {
        let localidade = document.querySelector("#cidade")
        localidade.setAttribute('value', 'buscando...')
        

        let estado = document.querySelector("#estado")
        estado.setAttribute('value', '...')
    }   


}

function erro() {

    let localidade = document.querySelector("#cidade")
    localidade.setAttribute('value', ' CEP invalido')
    
    let estado = document.querySelector("#estado")
    estado.setAttribute('value', '...')
    
}