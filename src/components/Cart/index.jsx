import { CartWithItens, CartWithoutItens, DivContainer, DivTotalPrice, ItemsCart } from "./style";

function Cart ({itensCart, setItensCart}) {

    function removeItem (event) {
        const filtrados = itensCart.filter(item => {

            if(parseInt(event.target.id) !== item.id){
                return item
            }
        })

        setItensCart([...filtrados])
    }

    function removeAll () {
        setItensCart([])
    }

    return(
        <DivContainer>
            <h3 className="cartTitle">Carrinho de compras</h3>
            {
                itensCart.length > 0 ? 
                <> 
                    <CartWithItens>
                        {
                            itensCart.map(({img, name, category, id}) => {
                                return  <ItemsCart key={id}>
                                            <figure>
                                                <img src={img} alt={name} />
                                            </figure>
                                            <div className="descItemCart">
                                                <h3>{name}</h3>
                                                <p>{category}</p>
                                            </div>
                                            <div className="divButtons">
                                                <button className="buttonRemove" id={id} onClick={removeItem}>remover</button>
                                                <div className="divQtd">
                                                    <button>+</button>
                                                    <button>-</button>
                                                    <span>0</span>
                                                </div>
                                            </div>
                                        </ItemsCart>                                    
                            })
                        }
                    </CartWithItens>
                    <DivTotalPrice>
                        <div>
                            <p>Total</p>
                            <span>
                                {itensCart.reduce((acc, next) =>  acc + next.price, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                            </span>
                        </div>
                        <button onClick={removeAll}>Remover Todos</button>
                    </DivTotalPrice>
                </>
                :   <CartWithoutItens>
                        <p>Sua sacola está vazia</p>
                        <span>Adicione itens</span>
                    </CartWithoutItens>            
            }
        </DivContainer>
    )
}

export default Cart