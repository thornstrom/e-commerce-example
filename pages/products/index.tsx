import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Product } from '../../interfaces'
import { sampleProductData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'


type Props = {
  items: Product[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List products={items} />
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Product[] = sampleProductData
  return { props: { items } }
}

export default WithStaticProps