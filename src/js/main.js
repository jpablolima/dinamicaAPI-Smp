const id = document.querySelector("#id")
const sigla = document.querySelector("#sigla")


const showData = (dados) => {
    for (const campo in dados['dados']) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = dados[campo]
            console.log(campo)
        }
    }
}

id.addEventListener("blur", (e) => {
    let search = id.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }


    fetch(`https://dadosabertos.camara.leg.br/api/v2/partidos/${search}/`, options)
        .then(response => {
            response.json()
                .then(dados => showData(dados))
        })
        .catch(e => console.log('erro' + e, message))
        // console.log(id.value)
})
















// const showData = (result) => {
//     for (const campo in result) {
//         if (document.querySelector("#" + campo)) {
//             document.querySelector("#" + campo).value = dados[campo]

//         }
//     }
// }


// id.addEventListener("blur", (e) => {
//     let search = id.value.replace()
//     const options = {
//         method: 'GET',
//         mode: 'cors',
//         cache: 'default'
//     }
//     fetch(`https://dadosabertos.camara.leg.br/api/v2/partidos/${search}`, options)
//         .then(response => {

//             response.json()
//                 .then(data => showData(data))
//         })

//     .catch(e => console.log('erro' + e, message))
// })