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

import { AdminContext } from '../..'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { IProduct } from '@app/alltypes'
import { useContext, useState } from 'react'

export interface IProductProps {
  user: any
  data: IProduct
  requestId: string
  onRelationClick: (product_id: string) => void
}

const Product = ({ data, onRelationClick }: IProductProps) => (
  <ProductStyle>
    <ProductData>
      {data.name} ({data.quantity})
      <br />
      {/* 
        {
          data.place && data.sector ? (
            <>
              {data.place}, {data.sector}
              <br />
            </>
          ) : (
            ''
        )} 
        */}
    </ProductData>

    <button type='button' onClick={() => onRelationClick(data.id)}>
      Relacionar
    </button>
  </ProductStyle>
)

const ProductsInRequests = ({ request, getRequests }: any) => {
  const adminContext = useContext(AdminContext)
  const [showProducts, setShowProducts] = useState(false)
  const user = useAppSelector(({ userStore }) => userStore.user)

  const onRelationClick = async (product_id: string) => {
    try {
      await api.post(
        '/relations',
        { product_id, request_id: request.id },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )

      getRequests()
      adminContext.getProducts()
    } catch (error) {
      console.log(error)
    }
  }

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
          {adminContext.products.map(product => (
            <Product
              user={user}
              data={product}
              key={product.name}
              requestId={request.id}
              onRelationClick={onRelationClick}
            />
          ))}
        </Products>
      )}
    </Style>
  )
}

export default ProductsInRequests
