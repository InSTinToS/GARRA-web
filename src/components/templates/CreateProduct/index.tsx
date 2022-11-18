/* eslint-disable @next/next/no-img-element */
import {
  BarCode,
  BarCodeField,
  Button,
  Form,
  Input,
  Label,
  ModalContent,
  ScannerBackground,
  Section,
  Style
} from './styles'

import Modal from '@app/components/molecules/Modal'
import { IForwardModal } from '@app/components/molecules/Modal/types'

import { useAppSelector } from '@app/hooks/useAppSelector'

import { api } from '@app/services/api'

import { TNextPageWithLayout } from '@app/types/next.types'

import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import { useRef } from 'react'

const CreateProduct: TNextPageWithLayout = () => {
  const user = useAppSelector(({ userStore }) => userStore.user)
  const router = useRouter()

  const modalRef = useRef<IForwardModal>(null)
  const formik = useFormik({
    initialValues: {
      name: '',
      quantity: 1,
      barcode: ''
    },
    onSubmit: async data => {
      if (user?.token) {
        await api.post('/products', data, {
          headers: { Authorization: `Bearer ${user.token}` }
        })
      }

      router.push('/admin')
    }
  })

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
        <Section>
          <Form>
            <Label htmlFor=''>
              Nome:
              <Input
                type='text'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </Label>

            <Label>
              Quantidade:
              <Input
                min={1}
                max={10}
                type='number'
                name='quantity'
                defaultValue={1}
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
            </Label>

            <BarCodeField>
              <input
                type='text'
                name='barcode'
                onChange={formik.handleChange}
                value={formik.values.barcode}
                placeholder='Código de barras'
              />

              <button
                type='button'
                onClick={() => {
                  modalRef.current?.triggerModal({ open: true })
                }}
              >
                <BarCode />
              </button>
            </BarCodeField>

            <Button
              onClick={e => {
                e.preventDefault()
                formik.handleSubmit()
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
