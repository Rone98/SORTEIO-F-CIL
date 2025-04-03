function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-esquerdo").value)
    const max = Math.floor(document.querySelector(".input-direito").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min);

    const sorteado = document.querySelector(".Resultado").value = result
    // const result = Math.floor(Math.random() * (max - min + 1) + min);
    // alert(result)


}