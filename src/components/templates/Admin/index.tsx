import { Header } from './styles'

import Products from './Products'
import Requests from './Requests'

import { TNextPageWithLayout } from '@app/types/next.types'

import Head from 'next/head'
import { useState } from 'react'

const Admin: TNextPageWithLayout = () => {
  const [showProducts, setShowProducts] = useState(true)

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Header>
        <button type='button' onClick={() => setShowProducts(true)}>
          Produtos
        </button>

        <button type='button' onClick={() => setShowProducts(false)}>
          Pedidos
        </button>
      </Header>

      {showProducts ? <Products /> : <Requests />}
    </>
  )
}

export default Admin
