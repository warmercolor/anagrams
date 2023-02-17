const button = document.getElementById("myButton")
const spanAnagramas = document.getElementById("resultAnagramas")

button.addEventListener("click", function () {
    let typeText = document.getElementById("input").value
    getAnagramsOf(typeText)
})


function alphabetize(palavra) {
    return palavra.toLowerCase().split("").sort().join("").trim()
}

function getAnagramsOf(input) {
    let palavraUser = alphabetize(input)
    let arrayAnagramas = [input.toLowerCase()]
    let arrayPalavras = palavras.concat(words)

    for (let i =0; i < arrayPalavras.length; i++) {
        let palavra = arrayPalavras[i].toLowerCase()
        if (arrayPalavras[i].length == palavraUser.length && arrayAnagramas.includes(arrayPalavras[i]) == false) {
            let palavraOrdenada = alphabetize(palavra)
            if (palavraOrdenada == palavraUser) {
                arrayAnagramas.push(palavra)
            }
        }
    }
    
    spanAnagramas.innerText = arrayAnagramas.join(" ")

}