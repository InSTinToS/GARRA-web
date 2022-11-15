/* eslint-disable @next/next/no-img-element */
import {
  Avatar,
  Card,
  DefaultAvatar,
  Form,
  Header,
  Input,
  Label,
  Logo,
  Style
} from './styles'

import Button from '@app/components/atoms/Button'

import { TNextPageWithLayout } from '@app/types/next.types'

import Head from 'next/head'

const Profile: TNextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Garra</title>
      </Head>

      <Style>
        <Card>
          <Header>
            <Logo src='logo.png' alt='logo' />

            <Avatar>
              <DefaultAvatar src='user.svg' alt='avatar' />
            </Avatar>
          </Header>

          <Form>
            <Label htmlFor=''>
              Nome:
              <Input type='text' defaultValue='Rafael Cardoso Lima' />
            </Label>

            <Label htmlFor=''>
              Email:
              <Input type='text' defaultValue='rafaelcardosolima@gmail.com' />
            </Label>

            <Label htmlFor=''>
              Senha:
              <Input type='password' defaultValue='*************' />
            </Label>

            <Label htmlFor=''>
              Confirmar senha:
              <Input type='password' defaultValue='*************' />
            </Label>
          </Form>
        </Card>

        <Button>Salvar alterações</Button>
      </Style>
    </>
  )
}

export default Profile
