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
  Style,
  Submit
} from './styles'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { TNextPageWithLayout } from '@app/types/next.types'

import Head from 'next/head'

const Profile: TNextPageWithLayout = () => {
  const user = useAppSelector(({ userStore }) => userStore.user)

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
              <Input type='text' defaultValue={user?.full_name} />
            </Label>

            <Label htmlFor=''>
              Email:
              <Input type='text' defaultValue={user?.email} />
            </Label>

            {user?.register && (
              <Label htmlFor=''>
                Registro:
                <Input type='text' defaultValue={user?.register} />
              </Label>
            )}

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

        <Submit>Salvar alterações</Submit>
      </Style>
    </>
  )
}

export default Profile
