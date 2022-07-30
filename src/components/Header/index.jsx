import { HeaderContainer } from "./style";
import logo from '../../assets/logo-burguer-kenzie.png'
import Form from "../Form";

function Header ({burguers, setFilter}) {

    return (
        <HeaderContainer>
            <figure>
                <img src={logo} alt="" />
            </figure>
            <Form burguers={burguers} setFilter={setFilter}></Form>
            
        </HeaderContainer>
    )
}

export default Header