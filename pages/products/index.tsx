import { GetStaticProps } from 'next'
import Link from 'next/link'

import { Product } from '../../interfaces'
import { sampleFruitsData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { Col, Row } from 'react-bootstrap'
import { ProductItem } from '../../components/ProductItem'

type Props = {
  items: Product[]
}

const WithStaticProps = ({ items }: Props) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <div>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {sampleFruitsData.map((item) => (
          <Col key={item.id}>
            <ProductItem {...item}></ProductItem>
          </Col>
        ))}
      </Row>
    </div>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: Product[] = sampleFruitsData
  return { props: { items } }
}

export default WithStaticProps
