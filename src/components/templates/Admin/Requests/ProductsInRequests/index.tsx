import {
  Arrow,
  Header,
  Loupe,
  ProductData,
  ProductStyle,
  Products,
  Search,
  Style
} from './styles'

import { useState } from 'react'

export interface IProductProps {
  data: {
    name: string
    sector: string
    place: string
    barcodes: string[]
  }
}
const Product = ({ data }: IProductProps) => (
  <ProductStyle>
    <ProductData>
      {data.name}
      <br />
      {data.place}, {data.sector}
      <br />
      {data.barcodes[0]}
      <br />
    </ProductData>

    <button type='button'>Relacionar</button>
  </ProductStyle>
)

const ProductsInRequests = () => {
  const [showProducts, setShowProducts] = useState(false)

  const products = [
    {
      name: 'Monitor HP Full HD',
      sector: 'Almocharifado',
      place: 'Segundo andar',
      barcodes: ['1231231231231', '1231231231231', '12312312312312']
    },
    {
      name: 'Teclado',
      sector: 'Almocharifado',
      place: 'Segundo andar',
      barcodes: ['1231231231231', '1231231231231', '12312312312312']
    }
  ]

  return (
    <Style>
      <Header>
        <button type='button' onClick={() => setShowProducts(prev => !prev)}>
          <Arrow />
        </button>

        <Search>
          <Loupe />

          <input type='text' placeholder='Pesquisar produtos' />
        </Search>
      </Header>

      {showProducts && (
        <Products>
          {products.map(product => (
            <Product data={product} key={product.name} />
          ))}
        </Products>
      )}
    </Style>
  )
}

export default ProductsInRequests
