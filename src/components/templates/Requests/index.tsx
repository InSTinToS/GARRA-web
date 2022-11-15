import { Header, Radio, Style } from './styles'

import Button from '@app/components/atoms/Button'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'

import List from '@app/components/organisms/List'

import { CreateRequest } from '@app/components/templates/Requests/CreateRequest'

import { TNextPageWithLayout } from '@app/types/next.types'

import Head from 'next/head'
import { useRef } from 'react'

const Requests: TNextPageWithLayout = () => {
  const ref = useRef<IForwardModal>(null)

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Modal ref={ref}>
        <CreateRequest
          onCloseClick={() => {
            ref.current?.triggerModal({ open: false })
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
          <List
            items={[
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              },
              {
                header: ['Monitor Dell Full HD', '19/08/2001', 'Julio Casares'],
                content: (
                  <p key='1'>
                    Solicito um novo monitor para uso pessoal com o objetivo de
                    melhorar a produtividade, pois o atual é muito pequeno.
                  </p>
                )
              }
            ]}
          />
        </section>
      </Style>
    </>
  )
}

export default Requests
