import { useState } from "react";
import Button from "../Button";
import { FormContainer } from "./style";

function Form ({burguers, setFilter}) {
    const [inputValue, setInputValue] = useState(null)
    
    function teste (event) {
        event.preventDefault()
        const filterCategory = []
        burguers.forEach(burguer => {
            if(burguer.name.toUpperCase() === inputValue.toUpperCase()){
                setFilter([burguer])
            }
            if(burguer.category.toUpperCase() === inputValue.toUpperCase()){
                filterCategory.push(burguer)
            }
        })
        if(filterCategory.length > 0){
            setFilter(filterCategory)
        }
    }

    return (
        <FormContainer onSubmit={teste}>
            <input type="text" placeholder="Digitar pesquisa" onChange={(event) => setInputValue(event.target.value)} />
            <Button type="submit">Pesquisar</Button>
        </FormContainer>
    )
}

export default Form