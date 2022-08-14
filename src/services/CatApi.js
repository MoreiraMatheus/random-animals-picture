const CatApiQuery = async() => {
    console.log('buscando dados na api dos gatos')
    return(
        fetch("https://thatcopy.pw/catapi/rest/")
        .then(response => response.json())
        .then(response => console.log(response))
    )
}

export default CatApiQuery