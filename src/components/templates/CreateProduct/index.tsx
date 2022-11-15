/* eslint-disable @next/next/no-img-element */
import {
  BarCode,
  BarCodeField,
  BarCodes,
  Button,
  Close,
  Form,
  Header,
  Input,
  Label,
  ModalContent,
  ScannerBackground,
  Section,
  Style
} from './styles'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'

import { TNextPageWithLayout } from '@app/types/next.types'

import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

const CreateProduct: TNextPageWithLayout = () => {
  const router = useRouter()
  const modalRef = useRef<IForwardModal>(null)
  const [barCodesQnt, setBarCodesQnt] = useState(3)

  const barCodes = new Array(barCodesQnt).fill('').map((_, i) => i + 1)

  return (
    <>
      <Modal ref={modalRef}>
        <ModalContent>
          <ScannerBackground>
            <img src='/scanner.png' alt='Scanner' />
          </ScannerBackground>

          <Button
            type='button'
            css={{ bg: '$error' }}
            onClick={() => {
              modalRef.current?.triggerModal({ open: false })
            }}
          >
            Cancelar
          </Button>
        </ModalContent>
      </Modal>

      <Style>
        <Header>
          Por favor, informar os campos necessarios para abertura do chamado.
          Algumas informações serão preencidas automaticamente pelo seu perfil.
        </Header>

        <Section>
          <Form>
            <Label htmlFor=''>
              Nome:
              <Input type='text' />
            </Label>

            <Label>
              Quantidade:
              <Input type='number' min={1} defaultValue={1} />
            </Label>

            <BarCodes>
              {barCodes.map(value => (
                <li key={value}>
                  <BarCodeField>
                    <input
                      type='text'
                      placeholder={`Código de barras (${value})`}
                    />

                    <button
                      type='button'
                      onClick={() => {
                        modalRef.current?.triggerModal({ open: true })
                      }}
                    >
                      <BarCode />
                    </button>

                    <Close />
                  </BarCodeField>
                </li>
              ))}
            </BarCodes>

            <Button
              onClick={e => {
                e.preventDefault()

                router.push('/admin')
              }}
            >
              Adicionar
            </Button>
          </Form>
        </Section>
      </Style>
    </>
  )
}
export default CreateProduct
