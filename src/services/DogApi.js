const DogApiQuery = async() => {
    let url = ""
    console.log('Buscando na Api dos cachorros')
    const foto = await fetch("https://random.dog/woof.json")
    .then(response => response.json())
    .then(response => url = response.url)
    return(url)
}

export default DogApiQuery