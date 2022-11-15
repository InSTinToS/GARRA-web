import { Close, Description, Form, Header, Quantity, Style } from './styles'

import Button from '@app/components/atoms/Button'

import { TButtonProps } from '@app/types/react.types'

interface ICreateRequestProps {
  onCloseClick: TButtonProps['onClick']
}

export const CreateRequest = ({ onCloseClick }: ICreateRequestProps) => (
  <Style>
    <Header>
      Criar novo pedido
      <button type='button' onClick={onCloseClick}>
        <Close />
      </button>
    </Header>

    <Form>
      <Quantity>
        Quantidade:
        <input type='number' min={0} />
      </Quantity>
      <Description htmlFor=''>
        O que você deseja?
        <textarea name='' id='' draggable={false} />
      </Description>
      <Button>Realizar pedido</Button>
    </Form>
  </Style>
)
