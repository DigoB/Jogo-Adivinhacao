function handleClick() {
    event.preventDefault()

    // Buscando o elemento que quero tratar através do Id do HTML
    const inputNumber = document.querySelector("#inputNumber")

    // Para capturar o numero inserido no input, é necessário utilizar
    // o value e não o innetText, pois o input abre e fecha em si mesmo.
    console.log(inputNumber.value)
}