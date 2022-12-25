import Head from "next/head"
import Link from "next/link"
import { FC } from "react";

export const Header: FC<{ title: string;}> = ({ title }) => {
    return (
        <div>
        <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{' '}
        <Link href="/products">Product List</Link> |{' '}
        <a href="/api/users">Product API</a>
      </nav>
    </header>
    </div>
    )
}

export default Header