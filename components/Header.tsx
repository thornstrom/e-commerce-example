import Image from "next/image"
import ShoppingCartImage from "../public/shopping-cart.svg"
import ProfileImage from "../public/profile.svg"
import Head from "next/head"
import Link from "next/link"
import { FC } from "react"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"

export const Header: FC<{ title: string; login: boolean }> = ({ title }) => {
  const { openCart, cartQuantity } = useShoppingCart()
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Nav className="me-auto">
          <Link href="/" className="px-3">
            Home
          </Link>
          <Link href="/products" className="test">
            Products
          </Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-secondary"
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
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
        <NavDropdown
          id="basic-nav-dropdown"
          style={{ position: "relative" }}
          title={
            <Image
              src={ProfileImage}
              alt="Profile Image"
              width={25}
              height={25}
              priority
            />
          }
        >
          <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  )
}

export default Header
