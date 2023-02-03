import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="">Hello Next.js 👋</h1>
    <p>Testing Next.js 13, link to products:</p>
    <Link href="/products">Products</Link>
  </Layout>
)

export default IndexPage
