import { GetStaticProps } from 'next'
import { Product } from '../../interfaces'
import { sampleFruitsData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import { ProductItem } from '../../components/ProductItem'

type Props = {
  items: Product[]
}

const WithStaticProps = ({ items }: Props) => (
  <>
    <Layout title="Users List | Next.js + TypeScript Example">
      <div className="bg-gray-200">
        <h1 className="text-3xl font-bold underline">Store</h1>
        <div className="grid grid-cols-1 sm:grid-col2 lg:grid-cols-3 gap-8 pt-2">
          {sampleFruitsData.map(item => (
            <li key={item.id} className="product-item list-none">
              <ProductItem {...item}></ProductItem>
            </li>
          ))}
        </div>
      </div>
    </Layout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Product[] = sampleFruitsData
  return { props: { items } }
}

export default WithStaticProps
