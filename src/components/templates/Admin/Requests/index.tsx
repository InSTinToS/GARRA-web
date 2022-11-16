/* eslint-disable react-hooks/exhaustive-deps */
import { Aside, Loupe, Radio, Search, Section, Style } from './styles'

import ProductsInRequests from './ProductsInRequests'

import List from '@app/components/organisms/List'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { formatDate } from '@app/utils/date/format'

import { useEffect, useState } from 'react'

const Requests = () => {
  const [requests, setRequests] = useState<any>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const items = requests.map((req: any) => ({
    header: [formatDate(req.created_at), req.quantity, req.author],
    content: (
      <>
        <p key='1' style={{ marginBottom: 16 }}>
          {req.description}
        </p>

        <ProductsInRequests />
      </>
    )
  }))

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

  useEffect(() => {
    getRequests()
  }, [user?.token])

  return (
    <Style>
      <Aside>
        <form>
          <Radio htmlFor=''>
            <input type='radio' />
            Pendentes
          </Radio>

          <Radio htmlFor=''>
            <input type='radio' />
            Encerrados
          </Radio>
        </form>
      </Aside>

      <Section>
        <Search>
          <Loupe />

          <input type='text' placeholder='Pesquisar pedidos' />
        </Search>

        <List items={items} />
      </Section>
    </Style>
  )
}

export default Requests
