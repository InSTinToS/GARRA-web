import { ArrowButton, Button, Field, Forgot, Form, Logo, Style } from './styles'

import { Link } from '@app/components/atoms/Link'
import Arrow from '@app/components/atoms/icons/Arrow'

import { TButtonProps } from '@app/types/react.types'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

const Home = () => {
  const router = useRouter()
  const [showSignUp, setShowSignUp] = useState(false)

  const toggleSignUp: TButtonProps['onClick'] = e => {
    e.preventDefault()
    setShowSignUp(prev => !prev)
  }

  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Style>
        <Form>
          {showSignUp && (
            <ArrowButton onClick={toggleSignUp}>
              <Arrow />
            </ArrowButton>
          )}

          <Logo src='/logo.png' alt='Garra logo' />

          {showSignUp ? (
            <>
              <Field type='text' placeholder='Nome completo' />

              <Field type='text' placeholder='E-mail' />

              <Field type='text' placeholder='Usuário' />

              <Field type='text' placeholder='Senha' />

              <Field type='text' placeholder='Confirmar senha' />

              <Button type='submit'>CADASTRAR</Button>
            </>
          ) : (
            <>
              <Field type='text' placeholder='Usuário' />

              <Field type='text' placeholder='Senha' />

              <Button
                type='submit'
                onClick={e => {
                  e.preventDefault()
                  router.push('/requests')
                }}
              >
                ENTRAR
              </Button>

              <Button type='button' onClick={toggleSignUp}>
                CADASTRAR
              </Button>

              <Forgot>
                Esqueceu a sua senha? <br />
                <Link>Clique aqui</Link> para recuperar.
              </Forgot>
            </>
          )}
        </Form>
      </Style>
    </>
  )
}

export default Home
