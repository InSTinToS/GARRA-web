/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-extra-semi */
import { Header, Radio, Style } from './styles'

import { Close } from './CreateRequest/styles'

import Button from '@app/components/atoms/Button'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'

import List from '@app/components/organisms/List'

import { CreateRequest } from '@app/components/templates/Requests/CreateRequest'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { TNextPageWithLayout } from '@app/types/next.types'

import { formatDate } from '@app/utils/date/format'

import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'

const Requests: TNextPageWithLayout = () => {
  const ref = useRef<IForwardModal>(null)
  const [requests, setRequests] = useState<any[]>([])
  const user = useAppSelector(({ userStore }) => userStore.user)

  const items = requests.map(req => ({
    customHeader: (
      <div
        style={{
          display: 'flex',
          width: '100%',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {formatDate(req.created_at)}

        <button
          type='button'
          style={{ padding: 0, width: 'auto' }}
          onClick={async () => {
            if (user?.token) {
              await api.delete(`/requests/${req.id}`, {
                headers: { Authorization: `Bearer ${user.token}` }
              })

              setRequests(prev => prev.filter(prev => prev.id !== req.id))
            }
          }}
        >
          <Close css={{ path: { fill: '$tertiary' } }} />
        </button>
      </div>
    ),

    content: <p key='1'>{req.description}</p>
  }))

  const getRequests = async () => {
    if (user) {
      const res = await api.get('/requests', {
        params: { user_id: user.id },
        headers: { Authorization: `Bearer ${user.token}` }
      })

      setRequests(res.data.requests.reverse())
    }
  }

  useEffect(() => {
    getRequests()
  }, [])

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Modal ref={ref}>
        <CreateRequest
          onCloseClick={() => {
            ref.current?.triggerModal({ open: false })
            getRequests()
          }}
        />
      </Modal>

      <Style>
        <Header>
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

          <Button
            type='button'
            onClick={() => {
              ref.current?.triggerModal({ open: true })
            }}
          >
            Novo Pedido
          </Button>
        </Header>

        <section>
          <List items={items} />
        </section>
      </Style>
    </>
  )
}

export default Requests
