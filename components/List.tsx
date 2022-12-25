import * as React from 'react'
import ListItem from './ListItem'
import { Product } from '../interfaces'

type Props = {
  products: Product[]
}

const List = ({ products }: Props) => (
  <ul>
    {products.map((product) => (
      <li key={product.id}>
        <ListItem data={product} />
      </li>
    ))}
  </ul>
)

export default List