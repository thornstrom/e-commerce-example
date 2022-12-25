import * as React from 'react'

import { Product } from '../interfaces'

type ListDetailProps = {
  item: Product
}

const ListDetail = ({ item: product }: ListDetailProps) => (
  <div>
    <h1>Detail for {product.name}</h1>
    <p>ID: {product.id}</p>
    <p className='test'>Price: {product.price}</p>
  </div>
)

export default ListDetail