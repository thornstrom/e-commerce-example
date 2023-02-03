import Image from 'next/image'
import ShoppingCartImage from '../public/shopping-cart.svg'
import ProfileImage from '../public/profile.svg'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
export const Header: FC<{ title: string; login: boolean }> = ({ title }) => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <div className="flex bg-gradient-to-b from-gray-400 to-gray-300 w-full h-12">
      <div className="flex justify-start w-1/12">logo</div>
      <div className="flex justify-start float-left  space-x-12  text-3xl  w-9/12">
        <Link href="/" className="justify-around">
          Home
        </Link>
        <Link href="/products" className="">
          Products
        </Link>
      </div>
      <div className="flex justify-around w-2/12">
        <button
          onClick={openCart}
          style={{ width: '3rem', height: '3rem', position: 'relative' }}
          className="rounded-sm outline flex justify-center items-center"
        >
          <Image
            src={ShoppingCartImage}
            alt="Shopping Cart Image"
            width={25}
            height={25}
            priority
          />
          {cartQuantity > 0 && (
            <div
              className="rounded-full bg-red-500"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              {cartQuantity}
            </div>
          )}
        </button>
        <button>login</button>
      </div>
    </div>
  )
}

export default Header

/*
    <div className="flex-auto flex-row justify-around">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className="flex-auto">
          <Link href="/" className="px-3">
            Home
          </Link>
          <Link href="/products" className="test">
            Products
          </Link>
        </div>
        <div className="flex-auto flex-row">
          <button
            onClick={openCart}
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            className="rounded-sm"
          >
            <Image
              src={ShoppingCartImage}
              alt="Shopping Cart Image"
              width={25}
              height={25}
              priority
            />
            {cartQuantity > 0 && (
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: 'white',
                  width: '1.5rem',
                  height: '1.5rem',
                  position: 'absolute',
                  bottom: 0,
                  right: 0,
                  transform: 'translate(25%, 25%)',
                }}
              >
                {cartQuantity}
              </div>
            )}
          </button>
          <div id="basic-nav-dropdown" style={{ position: 'relative' }}>
            <Image
              src={ProfileImage}
              alt="Profile Image"
              width={25}
              height={25}
              priority
            />
            <div>Login</div>
            <div>Sign up</div>
          </div>
        </div>
      </div>
    </div>
*/
