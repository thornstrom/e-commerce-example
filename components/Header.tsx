import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { FC, useState } from 'react'
import styles from '../styles/Header.module.css'
import { ProfileButton } from './Header/ProfileButton'

export const Header: FC<{ title: string; login: boolean }> = ({ title, login }) => {
  const [profile, setProfile] = useState(true)
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/products">Product List</Link> |{' '}
          <a href="/api/users">Product API</a>
        </nav>
      </header>
      <button>
        <Image
          src="/shopping-cart.svg"
          alt="Vercel Logo"
          className={styles.vercelLogo}
          width={100}
          height={32}
          priority
        />
      </button>
      <ProfileButton />
      {profile ? (
        <button onClick={() => setProfile(!profile)}>
          <Image src="/profile.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={32} priority />
        </button>
      ) : (
        <button onClick={() => setProfile(!profile)} />
      )}
    </div>
  )
}

export default Header
