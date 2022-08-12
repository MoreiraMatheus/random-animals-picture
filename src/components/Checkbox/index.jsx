import { Container } from "./styles"

const Checkbox = ({ name, id }) => {
    return(
        <Container>
            <input type="checkbox" name={name} id={id} />
            <label htmlFor={id}>{name}</label>
        </Container>
    )
}

export default Checkbox