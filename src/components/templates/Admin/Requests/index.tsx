/* eslint-disable react-hooks/exhaustive-deps */
import { Description, Header, List, Style } from './styles'

import ProductsInRequests from './ProductsInRequests'

import { Search } from '@app/components/molecules/Search'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { formatDate } from '@app/utils/date/format'

import { useEffect, useState } from 'react'

const Requests = () => {
  const [requests, setRequests] = useState<any>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const getRequests = async () => {
    if (user?.token) {
      const res = await api.get('/requests', {
        headers: { Authorization: `Bearer ${user.token}` }
      })

      const resRequests = []

      for (const req of res.data.requests) {
        const resAuthor = await api.get(`/users/${req.user_id}`)

        const author = resAuthor.data.user.full_name

        resRequests.push({ ...req, author })
      }

      setRequests(resRequests)
    }
  }

  const items = requests.map((req: any) => ({
    lowOpacity: req.quantity <= 0,
    header: [formatDate(req.created_at), req.quantity, req.author],
    content: (
      <>
        <Description>{req.description}</Description>

        <ProductsInRequests request={req} getRequests={getRequests} />
      </>
    )
  }))

  useEffect(() => {
    getRequests()
  }, [user?.token])

  return (
    <Style>
      <Header>
        <Search placeholder='Pesquisar pedidos' />
      </Header>

      <List items={items} />
    </Style>
  )
}

export default Requests
