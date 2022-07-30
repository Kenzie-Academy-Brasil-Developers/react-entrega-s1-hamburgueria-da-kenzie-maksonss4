import Button from "../Button";
import { LiContainer } from "./style";

function Card ({burguer, itensCart, setItensCart}) {
    const {name, category, price, img, id, qtd = 0} = burguer

    function addTocart (){
        const validation = itensCart.find(item => {
            return item.id === id
        })
        

        itensCart.length > 0 
        ?   (
            validation  ? console.log("oi")                            
                        :   (
                            setItensCart([burguer, ...itensCart])
                            )
            )

        :   (
            setItensCart([burguer])
            )            
        
    }

    return (
        <LiContainer id={id}>
            <figure>
                <img src={img} alt={name} />
            </figure>
            <div>
                <h3>{name}</h3>
                <span>{category}</span>
                <p>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
                <Button event={addTocart} type="submit">Adicionar</Button>
            </div>
        </LiContainer>
    )
}

export default Card 