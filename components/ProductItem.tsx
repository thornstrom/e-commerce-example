import Image from 'next/image'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { Product } from '../interfaces'
import { currencyFormatter } from '../utils/currency'

export function ProductItem({ id, name, price, imgUrl }: Product) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <div className="outline outline-gray-300 bg-gray-100 rounded">
      <div style={{ position: 'relative', height: '200px' }}>
        <Image
          src={imgUrl}
          alt={`${name} Image`}
          fill={true}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <>
        <div className="flex flex-row justify-between">
          <p className={`text-3xl`}>{name}</p>
          <span className="not-italic">{currencyFormatter(price)}</span>
        </div>
        {quantity === 0 ? (
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => increaseCartQuantity(id)}
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200  text-center  w-36 h-12 rounded"
            >
              Buy
            </button>
          </div>
        ) : (
          <div className="flex flex-row justify-center">
            <button
              className={`text-gray-900 bg-gradient-to-r from-teal-200 to-blue-200 font-bold rounded w-12 h-12`}
              onClick={() => decreaseCartQuantity(id)}
            >
              -
            </button>
            <div className="w-12 h-12 bg-gray-300 font-bold rounded flex justify-center items-center">
              {quantity}
            </div>
            <button
              className={`text-gray-900 bg-gradient-to-r from-teal-200 to-blue-200 font-bold rounded w-12 h-12`}
              onClick={() => increaseCartQuantity(id)}
            >
              +
            </button>
          </div>
        )}
      </>
    </div>
  )
}

/* <Card className="h-100" >
      <div  style={{position: "relative",height: "200px"}}>
        <Image src={imgUrl} alt={`${name} Image`} fill={true} style={{objectFit: 'cover' }}/>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{currencyFormatter(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center flex-column" style={{ gap: '.5rem' }}>
              some text
              <div className="d-flex align-items-center justify-content-center" style={{ gap: '.5rem' }}>
                <Button className="w-100" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>*/
