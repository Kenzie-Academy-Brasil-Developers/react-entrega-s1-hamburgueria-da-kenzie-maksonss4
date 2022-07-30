import Card from "../Card";
import { UlContainer } from "./style";

function List ({burguers, setItensCart, itensCart, filter}) {

    return (
        <UlContainer>
          {
            filter.length > 0 ? (
              filter.map(burguer => {
                return <Card itensCart={itensCart} setItensCart={setItensCart} key={burguer.id} burguer={burguer} ></Card>
              })
            )
            : (
              burguers.map(burguer => {
                return <Card itensCart={itensCart} setItensCart={setItensCart} key={burguer.id} burguer={burguer} ></Card>
              })
            )
          }
        </UlContainer>
    )
}

export default List