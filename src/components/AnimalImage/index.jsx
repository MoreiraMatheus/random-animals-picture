import { Container } from "./styles"

const AnimalImage = ({ src, animal }) => {
    return(
        <Container>
            <img src={src} alt={animal} />
        </Container>
    )
}

export default AnimalImage