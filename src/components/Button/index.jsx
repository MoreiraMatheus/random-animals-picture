import { Container } from "./styles"

const Button = ({ children, callback }) => {
    return(
        <Container onClick={callback}>{children}</Container>
    )
}

export default Button