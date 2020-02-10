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

                let localidade = document.querySelector("#cidade")
                localidade.setAttribute('value', val.localidade)
        

                let estado = document.querySelector("#estado")
                estado.setAttribute('value', val.uf)

        })
    }  
    
    if (tamanho != 9) {
        let localidade = document.querySelector("#cidade")
        localidade.setAttribute('value', 'buscando...')
        

        let estado = document.querySelector("#estado")
        estado.setAttribute('value', '...')
    }   


}

function erro() {

    if (tamanho == 9) {
    let localidade = document.querySelector("#cidade")
    localidade.setAttribute('value', ' CEP nao encontrado')
    
    let estado = document.querySelector("#estado")
    estado.setAttribute('value', '')
    }
}