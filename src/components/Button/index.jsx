import { ButtonContainer } from "./style";

function Button ({children, event}) {

    return (
        <ButtonContainer onClick={event}>{children}</ButtonContainer>
    )
}

export default Button