import Image from 'next/image'
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { Product } from '../interfaces';
import { currencyFormatter } from '../utils/currency';

export function ProductItem({ id, name, price, imgUrl }: Product) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100" >
      <div  style={{position: "relative",height: "200px"}}>
        <Image src={`/../public${imgUrl}`} alt={`${name} Image`} fill={true} style={{objectFit: 'cover' }}/>
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
    </Card>
  );
}
