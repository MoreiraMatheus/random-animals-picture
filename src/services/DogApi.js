const DogApiQuery = async() => {
    let data;
    console.log('Buscando na Api dos cachorros')
    await fetch("https://random.dog/woof.json")
    .then(response => data = response.json())
    return(data)
}

export default DogApiQuery