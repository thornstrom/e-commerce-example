import Image from 'next/image';
import { Stack, Button } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { currencyFormatter } from "../utils/currency"
import { sampleFruitsData } from "../utils/sample-data"


type CartItemProps =  {
    id: number
    quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = sampleFruitsData.find(i => i.id === id)
    if (item == null) return null

    return (
        
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      
      <div  style={{position: "relative",height: "75px", width: "125px"}}>
      <Image src={item.imgUrl} alt={`${item.name} Image`} fill={true} style={{objectFit: 'cover' }}/>
      </div>
    
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {currencyFormatter(item.price)}
        </div>
      </div>
      <div> {currencyFormatter(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
    )

}