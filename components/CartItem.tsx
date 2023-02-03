import Image from 'next/image'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { currencyFormatter } from '../utils/currency'
import { sampleFruitsData } from '../utils/sample-data'

type CartItemProps = {
  id: number
  quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const item = sampleFruitsData.find(i => i.id === id)
  if (item == null) return null

  return (
    <div className="">
      <div style={{ position: 'relative', height: '75px', width: '125px' }}>
        <Image
          src={item.imgUrl}
          alt={`${item.name} Image`}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="">
        <div>
          {item.name}{' '}
          {quantity > 1 && (
            <span className="" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="" style={{ fontSize: '.75rem' }}>
          {currencyFormatter(item.price)}
        </div>
      </div>
      <div> {currencyFormatter(item.price * quantity)}</div>
      <button onClick={() => removeFromCart(item.id)}>&times;</button>
    </div>
  )
}
