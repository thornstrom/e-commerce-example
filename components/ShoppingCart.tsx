import { useShoppingCart } from '../context/ShoppingCartContext'
import { CartItem } from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <div>
      <div>
        <div>Cart</div>
      </div>
      <div>
        <div>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
