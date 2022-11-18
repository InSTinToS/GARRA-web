import { Button, Footer, Header, List, Style } from './styles'

import Info from './Info'

import { Search } from '@app/components/molecules/Search'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { formatDate } from '@app/utils/date/format'

import { AdminContext } from '..'
import { useRouter } from 'next/router'
import { useContext } from 'react'

const Products = () => {
  const router = useRouter()
  const adminContext = useContext(AdminContext)
  const user = useAppSelector(({ userStore }) => userStore.user)

  const onProductDeleteClick = async (req: any) => {
    if (user?.token) {
      await api.delete(`/products/${req.id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      adminContext.getProducts()
    }
  }

  const items = adminContext.products.map(product => ({
    onCloseClick: () => {
      onProductDeleteClick(product)
    },
    header: [
      `${product.name} (${product.quantity})`,
      `${formatDate(product.created_at)}`,
      `${product.author?.full_name}`
    ],
    content: <Info key={product.id} data={product} />
  }))

  return (
    <Style>
      <Header>
        <Search variant='secondary' placeholder='Pesquisar produtos' />
      </Header>

      <List variant='secondary' items={items} />

      <Footer>
        <Button
          type='button'
          onClick={() => {
            router.push('/admin/create-product')
          }}
        >
          Adicionar produto
        </Button>
      </Footer>
    </Style>
  )
}
export default Products
